import { sha3_224 } from 'js-sha3';

function hashPassword(username, password) {
  return sha3_224(username + password);
}

function createToken(memberId, timestamp) {
  return sha3_224(memberId.toString() + timestamp);
}

const infraUtils = {
  hashPassword,
  createToken,
};

export default infraUtils;
