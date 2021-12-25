import HttpStatus from './httpStatus';
import errorHandling from '../../error-handling';
import { createResponse } from './httpResponse';
import { memberModel } from '../model';

async function parseAPIGatewayEvent({
  body,
  pathParameters,
  multiValueQueryStringParameters,
  requestContext,
  headers,
}, { auth = true }) {
  const { identity } = requestContext;
  const req = {
    ip: identity?.sourceIp,
  };

  req.params = { ...pathParameters };
  req.query = { ...multiValueQueryStringParameters };

  for (const [key, values] of Object.entries(req.query)) {
    if (!Array.isArray(values) || (values.length !== 1)) continue;
    req.query[key] = values[0];
  }

  if (body) {
    try {
      req.body = JSON.parse(body);
    } catch (err) {
      const httpError = new errorHandling.ServiceError(err.message, 'ERR_INVALID_REQUEST_BODY');
      httpError.status = HttpStatus.BAD_REQUEST;
      return { error: httpError };
    }
  }

  if (auth) {
    const { Authorization: token } = headers ?? {};
    const { memberId } = await memberModel.getUserByToken({ token });
    if (!memberId) {
      const httpError = new errorHandling.ServiceError('Authorization error', 'ERR_NOT_AUTHORIZED');
      httpError.status = HttpStatus.UNAUTHORIZED;
      return { error: httpError };
    }
    req.user = { memberId };
  }

  return req;
}

async function validateRequestData(req, schema) {
  try {
    if (req.params && schema.params) {
      req.params = await schema.params.validateAsync(req.params);
    }
    if (req.query && schema.query) {
      req.query = await schema.query.validateAsync(req.query);
    }
    if (req.body && schema.body) {
      req.body = await schema.body.validateAsync(req.body);
    }
  } catch (err) {
    const httpError = new errorHandling.ServiceError(err.message, 'ERR_INVALID_PARAMS');
    httpError.status = HttpStatus.BAD_REQUEST;
    return { error: httpError };
  }

  return { error: null };
}

async function handleAPIGatewayEvent(args, auth, event, context) {
  context.callbackWaitsForEmptyEventLoop = false;

  const [schema = {}, fn] = args;
  const res = createResponse();

  const req = await parseAPIGatewayEvent(event, { auth });
  if (req.error) {
    res.status(req.error.status).json(req.error);
    return res.toJSON();
  }

  const { error } = await validateRequestData(req, schema);
  if (error) {
    res.status(error.status).json(error);
    return res.toJSON();
  }

  await fn(req, res);

  return res.toJSON();
}

function createAPIGatewayEventHandler(...args) { return handleAPIGatewayEvent.bind(this, args, false); }
function createAuthAPIGatewayEventHandler(...args) { return handleAPIGatewayEvent.bind(this, args, true); }

const apiGatewayEventHandler = {
  createAPIGatewayEventHandler,
  createAuthAPIGatewayEventHandler,
};

export default apiGatewayEventHandler;
