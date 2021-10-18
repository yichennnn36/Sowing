import mysql from 'promise-mysql';
import { Mutex } from 'async-mutex';
import logging from '../../logging';

const MODULE_NAME = 'mysqlConnector';

const MysqlConnectionPool = Object.freeze({
  SOWING: 0,
});

class MysqlConnector {
  constructor({
    connectionLimit = 3,
    charset = 'utf8mb4_unicode_ci',
    timezone = 'utc',
  } = {}) {
    this.connectionMap_ = new Map();
    this.connectionLimit_ = connectionLimit;
    this.charset_ = charset;
    this.timezone_ = timezone;
    this.mutex_ = new Mutex();
  }

  async query(sql, conn = MysqlConnectionPool.SOWING) {
    if (conn?.query instanceof Function) return conn.query(sql);

    const pool = await this.mutex_.runExclusive(this.getConnectionPool_.bind(this, conn));
    return pool.query(sql);
  }

  async doTransaction(connectionPool, fn, ...args) {
    logging.debug(`${MODULE_NAME}.${this.doTransaction.name}`, 'start');

    const pool = await this.mutex_.runExclusive(this.getConnectionPool_.bind(this, connectionPool));
    const conn = await pool.getConnection();
    await conn.beginTransaction();

    try {
      const resp = await fn(conn, ...args);

      logging.debug(`${MODULE_NAME}.${this.doTransaction.name}`, 'committing...');
      await conn.commit();
      logging.debug(`${MODULE_NAME}.${this.doTransaction.name}`, 'committed');

      return resp;
    } catch (err) {
      logging.debug(`${MODULE_NAME}.${this.doTransaction.name}`, 'rolling back...');
      await conn.rollback();
      logging.debug(`${MODULE_NAME}.${this.doTransaction.name}`, 'rolled back');

      throw err;
    } finally {
      conn.release();
      logging.debug(`${MODULE_NAME}.${this.doTransaction.name}`, 'connection released');
    }
  }

  async getConnectionPool_(type) {
    if (!this.connectionMap_.has(type)) {
      switch (type) {
        case MysqlConnectionPool.SOWING:
          this.connectionMap_.set(type, await mysql.createPool({
            host: process.env.SOWING_MYSQL_HOST,
            user: process.env.SOWING_MYSQL_USER,
            password: process.env.SOWING_MYSQL_PASSWORD,
            database: process.env.SOWING_MYSQL_DATABASE,
            connectionLimit: this.connectionLimit_,
            charset: this.charset_,
            timezone: this.timezone_,
          }));
          break;
        default:
          throw new Error('Unknown connection pool');
      }
    }

    return this.connectionMap_.get(type);
  }
}

export {
  MysqlConnectionPool,
  MysqlConnector,
};
