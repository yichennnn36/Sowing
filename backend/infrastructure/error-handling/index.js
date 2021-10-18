import createError from 'http-errors';

class ServiceError extends Error {
  constructor(message, errno) {
    super(message);

    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
    this.errno_ = errno;
  }

  get errno() { return this.errno_; }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      errno: this.errno_,
    };
  }
}

function createHttpError(statusCode, err, properties) {
  const httpError = createError(statusCode, err, properties);

  if (!(httpError.toJSON instanceof Function)) {
    httpError.toJSON = () => {
      return Object.assign({
        name:     httpError.name,
        message:  httpError.message
      }, properties);
    };
  } else if (properties) {
    httpError.toOriginJSON = httpError.toJSON;
    httpError.toJSON = () => {
      return Object.assign(httpError.toOriginJSON(), properties);
    };
  }

  return httpError;
}

const errorHandling = {
  ServiceError,
  createHttpError,
};

export default errorHandling;
