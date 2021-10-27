import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, setRegisterResponse } from '../redux/reducers/userReducer';
import error from '../constants/error';
import success from '../constants/success';

const useRegister = () => {
  const [inputValue, setInputValue] = useState({
    nickname: '',
    username: '',
    password: ''
  });
  const [successMessage, setSuccessMessage] = useState([]);
  const [errMessage, setErrMessage] = useState([]);
  const [hasErr, setHasErr] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(store => store.user.isLoadingRegister);
  const response = useSelector(store => store.user.registerResponse);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value
    });
  };

  const handleRegister = () => {
    const { nickname, username, password } = inputValue;

    if (!nickname || !username || !password) {
      setErrMessage([error.EMPTY_FILEDS.all]);
      setHasErr(true);
      return;
    }

    if (hasErr) return;

    dispatch(register(username, password, nickname));
  };

  useEffect(() => {
    // success
    if (response) {
      if (response.ok) {
        setSuccessMessage([success.SUCCESS_REGISTER]);
      } else {
        // error status
        switch (response.errno) {
          case 'ERR_USER_EXIST':
            setErrMessage([error.FAIL_REGISTER[409]]);
            setHasErr(true);
            break;

          default:
            setErrMessage([error.FAIL_REGISTER[0]]);
            setHasErr(true);
        }
      }
    }
  }, [response]);

  useEffect(() => {
    return () => {
      dispatch(setRegisterResponse(null));
    }
  }, [dispatch]);

  return {
    response,
    isLoading,
    inputValue,
    handleInputChange,
    setHasErr,
    errMessage,
    successMessage,
    handleRegister
  }
}

export default useRegister;