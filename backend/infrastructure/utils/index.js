import { sha3_224 } from 'js-sha3';

function hashPassword(username, password) {
  return sha3_224(username + password);
}

const infraUtils = {
  hashPassword,
};

export default infraUtils;
