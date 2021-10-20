import moment from 'moment-timezone';
import errorHandling from '../error-handling';
import { logging, infraUtils } from '../../infrastructure';
import { memberModel } from '../models';

const MANAGER_NAME = 'memberManager';

async function signUp({
  username,
  password,
  nickname,
}) {
  logging.debug(`${MANAGER_NAME}.signUp`, { username, nickname });

  const isUserExist = await memberModel.checkIfUserExist({ username });
  if (isUserExist) {
    throw new errorHandling.SowingError({
      errno: errorHandling.errno.ERR_USER_EXIST,
    });
  }

  const hashPassword = infraUtils.hashPassword(username, password);

  await memberModel.signUp({
    username,
    hashPassword,
    nickname,
  });
}

async function login({ username, password }) {
  logging.debug(`${MANAGER_NAME}.login`, { username });

  const isUserExist = await memberModel.checkIfUserExist({ username });
  if (!isUserExist) {
    throw new errorHandling.SowingError({
      errno: errorHandling.errno.ERR_USER_NOT_EXIST,
    });
  }

  const hashPassword = infraUtils.hashPassword(username, password);

  const { memberId, nickname } = await memberModel.getAuthInfo({ username, hashPassword });
  if (!memberId) {
    throw new errorHandling.SowingError({
      errno: errorHandling.errno.ERR_USER_LOGIN_FAILED,
    });
  }

  const tokenExpireStamp = moment().add(1, 'days');
  const token = infraUtils.createToken(memberId, tokenExpireStamp);

  await memberModel.updateToken({
    memberId,
    token,
    tokenExpireStamp: tokenExpireStamp.format(),
  });

  return {
    memberId,
    nickname,
    token,
    tokenExpireStamp,
  };
}

const memberManager = {
  signUp,
  login,
};

export default memberManager;
