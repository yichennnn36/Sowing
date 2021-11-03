import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectResponse,
  selectStatus,
  selectError,
  selectSuccess,
  registerAsync,
  setErrorMessage,
  setSuccessMessage,
  setResponse
} from '../redux/reducers/userReducer';
import error from '../constants/error';
import success from '../constants/success';

const useRegister = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const response = useSelector(selectResponse);
  const successMessage = useSelector(selectSuccess);
  const errorMessage = useSelector(selectError);
  const [inputValue, setInputValue] = useState({
    nickname: '',
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

  const handleRegister = () => {
    dispatch(setErrorMessage(null));
    const { nickname, username, password } = inputValue;
    if (!nickname || !username || !password) {
      dispatch(setErrorMessage(error.EMPTY_FILEDS.all));
      return;
    }
    dispatch(registerAsync(inputValue));
  };

  useEffect(() => {
    if (errorMessage) {
      return dispatch(setErrorMessage(errorMessage));
    }
    if (response) {
      if (response.errno) {
        switch (response.errno) {
          case 'ERR_USER_EXIST':
            dispatch(setErrorMessage(error.FAIL_REGISTER[409]));
            break;
          case 'ERR_INVALID_PARAMS':
            dispatch(setErrorMessage(error.FAIL_REGISTER[400]));
            break;
          default:
            dispatch(setErrorMessage(error.FAIL_REGISTER[0]));
            break;
        }
      }
      dispatch(setSuccessMessage(success.SUCCESS_REGISTER));
    }
  }, [dispatch, response, successMessage, errorMessage]);

  useEffect(() => {
    return () => {
      dispatch(setResponse(null));
      dispatch(setErrorMessage(null));
      dispatch(setSuccessMessage(null));
    }
  }, [dispatch]);

  return {
    response,
    status,
    inputValue,
    handleInputChange,
    successMessage,
    errorMessage,
    handleRegister,
    isValid,
    setIsValid
  }
};

export default useRegister;