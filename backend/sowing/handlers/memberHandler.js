import errorHandling from '../error-handling';
import { logging, requestHandling } from '../../infrastructure';
import { memberManager } from '../managers';

const HANDLER_NAME = 'memberHandler';

async function signUp(req, res) {
  logging.debug(`${HANDLER_NAME}.signUp`);

  const {
    username,
    password,
    nickname,
  } = req.body;

  const { error } = await memberManager.signUp({
    username,
    password,
    nickname,
  });

  if (error) {
    const httpError = errorHandling.createHttpError(error);
    res.status(httpError.status).json(httpError);
    return;
  }

  res.status(requestHandling.HttpStatus.NO_CONTENT);

  return;
}

async function login(req, res) {
  logging.debug(`${HANDLER_NAME}.login`);

  const { username, password } = req.body;

  const {
    memberId,
    nickname,
    token,
    tokenExpireStamp,

    error,
  } = await memberManager.login({ username, password });

  if (error) {
    const httpError = errorHandling.createHttpError(error);
    res.status(httpError.status).json(httpError);
    return;
  }

  res.status(requestHandling.HttpStatus.CREATED).json({
    member_id: memberId,
    nickname,
    token,
    token_expire_stamp: tokenExpireStamp,
  });

  return;
}

const memberHandler = {
  signUp,
  login,
};

export default memberHandler;
