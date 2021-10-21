import { strict as assert } from 'assert';
import util from 'util';
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
      throw httpError;
    }
  }

  if (auth) {
    const { token } = headers ?? {};
    const { memberId } = await memberModel.getUserByToken({ token });
    if (!memberId) {
      const httpError = new errorHandling.ServiceError('Authorization error', 'ERR_NOT_AUTHORIZED');
      httpError.status = HttpStatus.UNAUTHORIZED;
      throw httpError;
    }
    req.user = { memberId };
  }

  return req;
}

async function validateRequestData(data, schema) {
  assert.ok(schema instanceof Object, 'invalid schema for request params');

  try {
    data = await schema.validateAsync(data);
  } catch (err) {
    const httpError = new errorHandling.ServiceError(err.message, 'ERR_INVALID_PARAMS');
    httpError.status = HttpStatus.BAD_REQUEST;
    throw httpError;
  }

  return data;
}

async function handleAPIGatewayEvent(args, auth, event, context) {
  context.callbackWaitsForEmptyEventLoop = false;

  const [schema = {}] = args;
  const res = createResponse();
  let req;

  try {
    req = await parseAPIGatewayEvent(event, { auth });
  } catch (err) {
    res.status(err.status).json(err);
    return res.toJSON();
  }

  try {
    if (req.params && schema.params) req.params = await validateRequestData(req.params, schema.params);
    if (req.query && schema.query) req.query = await validateRequestData(req.query, schema.query);
    if (req.body && schema.body) req.body = await validateRequestData(req.body, schema.body);
  } catch (err) {
    res.status(err.status).json(err);
    return res.toJSON();
  }

  for (const fn of args) {
    if (fn instanceof Function) {
      util.types.isAsyncFunction(fn) ? await fn(req, res) : fn(req, res);
      if (res.statusCode < 200 || res.statusCode >= 300) break;
    }
  }

  return res.toJSON();
}

function createAPIGatewayEventHandler(...args) { return handleAPIGatewayEvent.bind(this, args, false); }
function createAuthAPIGatewayEventHandler(...args) { return handleAPIGatewayEvent.bind(this, args, true); }

const apiGatewayEventHandler = {
  createAPIGatewayEventHandler,
  createAuthAPIGatewayEventHandler,
};

export default apiGatewayEventHandler;
