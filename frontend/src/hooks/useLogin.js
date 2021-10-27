import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login, setLoginResponse } from '../redux/reducers/userReducer';
import { setAuthToken } from '../utils';
import error from '../constants/error';

const useLogin = () => {
  const [inputValue, setInputValue] = useState({
    username: '',
    password: ''
  });
  const [errMessage, setErrMessage] = useState([]);
  const [hasErr, setHasErr] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoading = useSelector(store => store.user.isLoadingLogin);
  const response = useSelector(store => store.user.loginResponse);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value
    });
  };

  const handleLogin = () => {
    setErrMessage([]);
    const { username, password } = inputValue;

    if (!username || !password) {
      setErrMessage([error.EMPTY_FILEDS.all]);
      setHasErr(true);
      return;
    }
    if (hasErr) return;

    dispatch(login(username, password));
  };

  useEffect(() => {
    // success
    if (response) {
      if (response.member_id) {
        const { nickname, token, token_expire_stamp } = response;

        setAuthToken(nickname, token, token_expire_stamp);
        history.push('./kanban');
      } else {
        // error status
        switch (response.errno) {
          case 'ERR_USER_LOGIN_FAILED':
            setErrMessage([error.FAIL_LOGIN[400]]);
            setHasErr(true);
            break;

          case 'ERR_USER_NOT_EXIST':
            setErrMessage([error.FAIL_LOGIN[401]]);
            setHasErr(true);
            break;

          default:
            setErrMessage([error.FAIL_LOGIN[0]]);
            setHasErr(true);
        }
      }
    }
  }, [response, history]);

  useEffect(() => {
    return () => {
      dispatch(setLoginResponse(null));
    }
  }, [dispatch]);

  return {
    isLoading,
    inputValue,
    handleInputChange,
    setHasErr,
    errMessage,
    handleLogin
  }
}

export default useLogin;