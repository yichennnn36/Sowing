import dataValidation from './data-validation';
import { requestHandling } from '../infrastructure';
import {
  memberHandler,
} from './handlers';

export const doSignUp = requestHandling.createAPIGatewayEventHandler(
  dataValidation.Schema.SIGN_UP,
  memberHandler.signUp,
);
export const doLogin = requestHandling.createAPIGatewayEventHandler(
  dataValidation.Schema.LOGIN,
  memberHandler.login,
);
