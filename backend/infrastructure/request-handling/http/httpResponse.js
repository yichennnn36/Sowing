import HttpStatus from './httpStatus';

const DEFAULT_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials' : true // Required for cookies, authorization headers with HTTPS
};

class HttpResponse {
  constructor({ status, headers, body }) {
    this.status_ = status;
    this.headers_ = headers;
    this.body_ = body;
  }

  get statusCode() { return this.status_; }

  status(status) { this.status_ = status; return this; }
  headers(headers) { this.headers_ = headers; return this; }
  json(json) { this.body_ = json; return this; }

  toJSON() {
    return {
      statusCode: this.status_,
      headers: this.headers_,
      body: this.body_ ? JSON.stringify(this.body_) : '{}',
    };
  }
}

function createResponse({ data, status } = {}) {
  return new HttpResponse({
    status: status ?? data?.status ?? HttpStatus.INTERNAL_SERVER_ERROR,
    headers: DEFAULT_HEADERS,
    body: data,
  });
}

export {
  createResponse,
};
