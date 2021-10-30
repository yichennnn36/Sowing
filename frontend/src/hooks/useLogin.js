import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login, setLoginResponse, setErrorMessage } from '../redux/reducers/userReducer';
import { setAuthToken } from '../utils';
import error from '../constants/error';

const useLogin = () => {
  const [inputValue, setInputValue] = useState({
    username: '',
    password: ''
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoading = useSelector(store => store.user.isLoadingLogin);
  const response = useSelector(store => store.user.loginResponse);
  const errorMessage = useSelector(store => store.user.errorMessage);

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
    dispatch(login(username, password));
  };

  useEffect(() => {
    if (errorMessage) {
      dispatch(setErrorMessage(errorMessage));
      return;
    }
    if (response && response.member_id) {
      const { nickname, token, token_expire_stamp } = response;
      setAuthToken(nickname, token, token_expire_stamp);
      history.push('./kanban');
    }
  }, [dispatch, errorMessage, history, response]);

  useEffect(() => {
    return () => {
      dispatch(setLoginResponse(null));
      dispatch(setErrorMessage(null));
    }
  }, [dispatch]);

  return {
    isLoading,
    inputValue,
    handleInputChange,
    errorMessage,
    handleLogin
  }
};

export default useLogin;