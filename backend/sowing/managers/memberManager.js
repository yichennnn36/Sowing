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

const memberManager = {
  signUp,
};

export default memberManager;
