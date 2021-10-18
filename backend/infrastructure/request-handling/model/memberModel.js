import SQL from 'sql-template-strings';
import logging from '../../logging';
import { mysqlConnector } from '../../database';

const MODEL_NAME = 'memberModel';

async function getUserByToken({ token }) {
  logging.debug(`${MODEL_NAME}.getUserByToken`);

  const [{ member_id: memberId } = {}] = await mysqlConnector.query(SQL`
    SELECT member_id
    FROM member
    WHERE true
      AND token = ${token}
      AND token_expire_stamp > NOW()
  `);

  return { memberId };
}

const memberModel = {
  getUserByToken,
};

export default memberModel;
