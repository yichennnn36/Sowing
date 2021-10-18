import {
  HttpStatus,
  apiGatewayEventHandler,
} from './http';

const requestHandling = {
  HttpStatus,
  createAPIGatewayEventHandler: apiGatewayEventHandler.createAPIGatewayEventHandler,
  createAuthAPIGatewayEventHandler: apiGatewayEventHandler.createAuthAPIGatewayEventHandler,
};

export default requestHandling;
