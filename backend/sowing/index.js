import dataValidation from './data-validation';
import { requestHandling } from '../infrastructure';
import {
  memberHandler,
  sowingHandler,
} from './handlers';

export const doSignUp = requestHandling.createAPIGatewayEventHandler(
  dataValidation.Schema.SIGN_UP,
  memberHandler.signUp,
);
export const doLogin = requestHandling.createAPIGatewayEventHandler(
  dataValidation.Schema.LOGIN,
  memberHandler.login,
);

export const doCreateTicket = requestHandling.createAuthAPIGatewayEventHandler(
  dataValidation.Schema.CREATE_TICKET,
  sowingHandler.createTicket,
);
export const doGetTickets = requestHandling.createAuthAPIGatewayEventHandler(
  sowingHandler.getTickets,
);
