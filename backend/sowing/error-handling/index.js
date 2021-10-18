import errno from './errno';
import { SowingError, createHttpError } from './errorConstructor';

const errorHandling = {
  SowingError,
  errno,
  createHttpError,
};

export default errorHandling;
