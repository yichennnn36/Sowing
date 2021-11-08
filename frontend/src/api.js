import { getAuthToken, TOKEN_NAME } from './utils';

const BASE_URL = process.env.REACT_APP_URL;
const TICKET_URL = process.env.REACT_APP_TICKET_URL;

export const fetchRegister = async (userData) => {
  const { username, password, nickname } = userData;
  try {
    const response = await fetch(`${BASE_URL}/sign-up`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
        nickname
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.status >= 200 && response.status < 400) {
      return response.ok;
    };
    return response.json();
  } catch (error) {
    alert('操作失敗，發生錯誤');
    console.log('error', error);
  }
};

export const fetchLogin = async (userData) => {
  const { username, password } = userData;
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.json();
  } catch (error) {
    alert('操作失敗，發生錯誤');
    console.log('error', error);
  }
};

export const fetchAllTickets = async () => {
  const token = getAuthToken(TOKEN_NAME);
  if (!token) return;
  try {
    const response = await fetch(TICKET_URL, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json'
      }
    });
    return response.json();
  } catch (error) {
    alert('操作失敗，發生錯誤');
    console.log('error', error);
  }
};

export const fetchPostTicket = async (data) => {
  const token = getAuthToken(TOKEN_NAME);
  try {
    const response = await fetch(`${TICKET_URL}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Authorization: token,
        'Content-Type': 'application/json'
      }
    });
    if (response.status >= 200 && response.status < 400) {
      return { ok: response.ok };
    };
    return response.json();
  } catch (error) {
    alert("操作失敗，發生錯誤");
    console.log(error);
  }
};

export const fetchDeleteTicket = async (id) => {
  const token = getAuthToken(TOKEN_NAME);
  try {
    const response = await fetch(`${TICKET_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json'
      }
    });
    if (response.status >= 200 && response.status < 400) {
      return { ok: response.ok };
    };
    return response.json();
  } catch (error) {
    alert("操作失敗，發生錯誤");
    console.log('error', error);
  }
};

export const fetchUpdateTicketStatus = async (ticketStatus) => {
  const token = getAuthToken(TOKEN_NAME);
  const { id, current_status, new_status } = ticketStatus;
  const status = { current_status, new_status };
  try {
    const response = await fetch(`${TICKET_URL}/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify(status),
      headers: {
        Authorization: token,
        'Content-Type': 'application/json'
      }
    });
    if (response.status >= 200 && response.status < 400) {
      return { ok: response.ok };
    };
    return response.json();
  } catch (error) {
    alert("操作失敗，發生錯誤");
    console.log(error);
  }
};

export const fetchEditTicket = async (data) => {
  const token = getAuthToken(TOKEN_NAME);
  const { ticket_id } = data;
  delete data.ticket_id;
  delete data.status;
  if (!data.content) delete data.content;
  try {
    const response = await fetch(`${TICKET_URL}/${ticket_id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        Authorization: token,
        'Content-Type': 'application/json'
      }
    });
    if (response.status >= 200 && response.status < 400) {
      return { ok: response.ok };
    };
    return response.json();
  } catch (error) {
    alert("操作失敗，發生錯誤");
    console.log(error);
  }
};