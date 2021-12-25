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
    const httpError = new errorHandling.SowingError({
      errno: errorHandling.errno.ERR_USER_EXIST,
    });
    return { error: httpError };
  }

  const hashPassword = infraUtils.hashPassword(username, password);

  const { affectedRows } = await memberModel.signUp({
    username,
    hashPassword,
    nickname,
  });
  if (affectedRows <= 0) {
    const httpError = new errorHandling.SowingError({
      errno: errorHandling.errno.ERR_USER_NOT_CREATED,
    });
    return { error: httpError };
  }

  return { error: null };
}

async function login({ username, password }) {
  logging.debug(`${MANAGER_NAME}.login`, { username });

  const isUserExist = await memberModel.checkIfUserExist({ username });
  if (!isUserExist) {
    const httpError = new errorHandling.SowingError({
      errno: errorHandling.errno.ERR_USER_NOT_EXIST,
    });
    return { error: httpError };
  }

  const hashPassword = infraUtils.hashPassword(username, password);

  const { memberId, nickname } = await memberModel.getAuthInfo({ username, hashPassword });
  if (!memberId) {
    const httpError = new errorHandling.SowingError({
      errno: errorHandling.errno.ERR_USER_LOGIN_FAILED,
    });
    return { error: httpError };
  }

  const tokenExpireStamp = moment().add(1, 'days');
  const token = infraUtils.createToken(memberId, tokenExpireStamp);

  const { affectedRows } = await memberModel.updateToken({
    memberId,
    token,
    tokenExpireStamp: tokenExpireStamp.format(),
  });
  if (affectedRows <= 0) {
    const httpError = new errorHandling.SowingError({
      errno: errorHandling.errno.ERR_USER_NOT_UPDATED,
    });
    return { error: httpError };
  }

  return {
    memberId,
    nickname,
    token,
    tokenExpireStamp,

    error: null,
  };
}

const memberManager = {
  signUp,
  login,
};

export default memberManager;
