const BASE_URL = process.env.REACT_APP_URL;

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