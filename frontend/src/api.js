import { getAuthToken, TOKEN_NAME } from './utils';

const BASE_URL = process.env.REACT_APP_URL;
const TICKET_URL = process.env.REACT_APP_TICKET_URL;

export const fetchRegister = async (username, password, nickname) => {
  let response;
  try {
    response = await fetch(`${BASE_URL}/sign-up`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
        nickname
      }),
      headers: {
        'content-type': 'application/json'
      }
    });
  } catch (err) {
    alert("操作失敗，發生錯誤");
    console.log(err);
  }
  if (response.status === 204) {
    return {
      status: 204,
      ok: response.ok
    }
  };
  return response.json();
};

export const fetchLogin = async (username, password) => {
  let response;
  try {
    response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers: {
        'content-type': 'application/json'
      }
    });
  } catch (err) {
    alert("操作失敗，發生錯誤");
    console.log(err);
  }
  return response.json();
};

export const fetchAllTicket = async () => {
  const token = getAuthToken(TOKEN_NAME);
  if (!token) return;

  let response;
  try {
    response = await fetch(TICKET_URL, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json'
      }
    });
  } catch (err) {
    alert("操作失敗，發生錯誤");
    console.log(err);
  }
  return response.json();
};

export const fetchPostTicket = async (data) => {
  const token = getAuthToken(TOKEN_NAME);

  let response;
  try {
    response = await fetch(`${TICKET_URL}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Authorization: token,
        'Content-Type': 'application/json'
      }
    });
  } catch (err) {
    alert("操作失敗，發生錯誤");
    console.log(err);
  }
  if (response.status >= 200 && response.status < 400) {
    return response.ok;
  };
  return response.json();
};