const BASE_URL = process.env.REACT_APP_URL;

export const register = async (username, password, nickname) => {
  const response = await fetch(`${BASE_URL}/sign-up`, {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
      nickname
    }),
    headers: {
      'content-type': 'application/json'
    }
  })
  return response;
};

export const login = async (username, password) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    body: JSON.stringify({
      username,
      password
    }),
    headers: {
      'content-type': 'application/json'
    }
  })
  return response;
};