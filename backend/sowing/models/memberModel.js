import SQL from 'sql-template-strings';
import errorHandling from '../error-handling';
import { mysqlConnector, logging } from '../../infrastructure';

const MODEL_NAME = 'memberModel';

async function checkIfUserExist({ username }) {
  logging.debug(`${MODEL_NAME}.checkIfUserExist`, { username });

  const [{ exist = 0 } = {}] = await mysqlConnector.query(SQL`
    SELECT EXISTS(
      SELECT 1
      FROM member
      WHERE username = ${username}
    ) AS exist
  `);

  return !!exist;
}

async function signUp({ username, hashPassword, nickname }) {
  logging.debug(`${MODEL_NAME}.signUp`, { username, nickname });

  const { affectedRows = 0 } = await mysqlConnector.query(SQL`
    INSERT INTO member (
      username,
      nickname,
      password
    ) VALUES (
      ${username},
      ${nickname},
      ${hashPassword}
    )
  `);

  if (affectedRows <= 0) {
    throw new errorHandling.SowingError({
      errno: errorHandling.errno.ERR_USER_NOT_CREATED,
    });
  }
}

async function getAuthInfo({ username, hashPassword }) {
  logging.debug(`${MODEL_NAME}.getAuthInfo`, { username });

  const [{
    member_id: memberId,
    nickname,
  } = {}] = await mysqlConnector.query(SQL`
    SELECT
      member_id,
      nickname
    FROM member
    WHERE (username, password) = (${username}, ${hashPassword})
  `);

  return { memberId, nickname };
}

async function updateToken({ memberId, token, tokenExpireStamp }) {
  logging.debug(`${MODEL_NAME}.updateToken`, { memberId });

  const { affectedRows = 0 } = await mysqlConnector.query(SQL`
    UPDATE member
    SET
      token = ${token},
      token_expire_stamp = ${tokenExpireStamp}
    WHERE member_id = ${memberId}
  `);

  if (affectedRows <= 0) {
    throw new errorHandling.SowingError({
      errno: errorHandling.errno.ERR_USER_NOT_UPDATED,
    });
  }
}

const memberModel = {
  checkIfUserExist,
  signUp,
  getAuthInfo,
  updateToken,
};

export default memberModel;
