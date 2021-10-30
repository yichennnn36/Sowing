import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, setRegisterResponse, setErrorMessage, setSuccessMessage } from '../redux/reducers/userReducer';
import error from '../constants/error';

const useRegister = () => {
  const [inputValue, setInputValue] = useState({
    nickname: '',
    username: '',
    password: ''
  });
  const dispatch = useDispatch();
  const isLoading = useSelector(store => store.user.isLoadingRegister);
  const response = useSelector(store => store.user.registerResponse);
  const successMessage = useSelector(store => store.user.successMessage);
  const errorMessage = useSelector(store => store.user.errorMessage);

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
    dispatch(register(username, password, nickname));
  };

  useEffect(() => {
    if (successMessage) {
      return dispatch(setSuccessMessage(successMessage));
    }
    if (errorMessage) {
      return dispatch(setErrorMessage(errorMessage));
    }
  }, [dispatch, successMessage, errorMessage]);

  useEffect(() => {
    return () => {
      dispatch(setRegisterResponse(null));
      dispatch(setErrorMessage(null));
      dispatch(setSuccessMessage(null));
    }
  }, [dispatch]);

  return {
    response,
    isLoading,
    inputValue,
    handleInputChange,
    errorMessage,
    successMessage,
    handleRegister
  }
};

export default useRegister;