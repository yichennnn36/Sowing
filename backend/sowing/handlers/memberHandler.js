import errorHandling from '../error-handling';
import { logging, requestHandling } from '../../infrastructure';
import { memberManager } from '../managers';

const HANDLER_NAME = 'memberHandler';

async function signUp(req, res) {
  try {
    logging.debug(`${HANDLER_NAME}.signUp`);

    const {
      username,
      password,
      nickname,
    } = req.body;

    await memberManager.signUp({
      username,
      password,
      nickname,
    });

    res.status(requestHandling.HttpStatus.NO_CONTENT);
  } catch (err) {
    const httpError = errorHandling.createHttpError(err);
    res.status(httpError.status).json(httpError);
  }
}

async function login(req, res) {
  try {
    logging.debug(`${HANDLER_NAME}.login`);

    const { username, password } = req.body;

    const {
      memberId,
      nickname,
      token,
      tokenExpireStamp,
    } = await memberManager.login({ username, password });

    res.status(requestHandling.HttpStatus.CREATED).json({
      member_id: memberId,
      nickname,
      token,
      token_expire_stamp: tokenExpireStamp,
    });
  } catch (err) {
    const httpError = errorHandling.createHttpError(err);
    res.status(httpError.status).json(httpError);
  }
}

const memberHandler = {
  signUp,
  login,
};

export default memberHandler;
