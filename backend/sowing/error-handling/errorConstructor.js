import errno from './errno';
import errorMessage from './errorMessage';
import { errorHandling as errorHandlingBase } from '../../infrastructure';

function getCorrespondingStatusCode(err) {
  switch (err.errno) {
    case errno.ERR_USER_NOT_EXIST:
    case errno.ERR_USER_LOGIN_FAILED:
      return 401;
    case errno.ERR_USER_EXIST:
      return 409;
    case errno.ERR_USER_NOT_CREATED:
    case errno.ERR_USER_NOT_UPDATED:
    default:
      return 500;
  }
}

function getErrorMessage(errno) {
  return errorMessage[errno] ?? '';
}

function createHttpError(err, properties) {
  const statusCode = err.status ?? getCorrespondingStatusCode(err);
  return errorHandlingBase.createHttpError(statusCode, err, properties);
}

class SowingError extends errorHandlingBase.ServiceError {
  constructor({ errno }) {
    super(getErrorMessage(errno), errno);
    Error.captureStackTrace(this, this.constructor);
  }
}

export {
  SowingError,
  createHttpError,
};
