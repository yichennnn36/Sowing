import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setAuthToken } from '../utils';
import {
  selectUser,
  loginAsync,
  setErrorMessage,
  setResponse
} from '../redux/reducers/userReducer';
import error from '../constants/error';

const useLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    response,
    status,
    errorMessage
  } = useSelector(selectUser);
  const [inputValue, setInputValue] = useState({
    username: '',
    password: ''
  });
  const [isValid, setIsValid] = useState({
    username: true,
    password: true
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value
    });
  };

  const handleLogin = () => {
    dispatch(setErrorMessage(null));
    const { username, password } = inputValue;
    if (!username || !password) {
      dispatch(setErrorMessage(error.EMPTY_FILEDS.all));
      return;
    }
    if (!isValid.username || !isValid.password) return;
    dispatch(loginAsync(inputValue));
  };

  useEffect(() => {
    if (errorMessage) {
      return dispatch(setErrorMessage(errorMessage));
    }
    if (response) {
      if (response.errno) {
        switch (response.errno) {
          case 'ERR_USER_LOGIN_FAILED':
            dispatch(setErrorMessage(error.FAIL_LOGIN[400]));
            break;
          case 'ERR_USER_NOT_EXIST':
            dispatch(setErrorMessage(error.FAIL_LOGIN[401]));
            break;
          case 'ERR_INVALID_PARAMS':
            dispatch(setErrorMessage(error.FAIL_LOGIN[402]));
            break;
          default:
            dispatch(setErrorMessage(error.FAIL_LOGIN[0]));
            break;
        }
      }
      if (response.member_id) {
        const { nickname, token, token_expire_stamp } = response;
        setAuthToken(nickname, token, token_expire_stamp);
        history.push('./board');
      }
    }
  }, [dispatch, errorMessage, history, response]);

  useEffect(() => {
    return () => {
      dispatch(setResponse(null));
      dispatch(setErrorMessage(null));
    }
  }, [dispatch]);

  return {
    status,
    inputValue,
    handleInputChange,
    errorMessage,
    handleLogin,
    isValid,
    setIsValid
  }
};

export default useLogin;