import React, { useState, useRef } from 'react';
import { useHistory } from "react-router-dom";
import { RightCircleOutlined, LeftOutlined, UserOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { FunctionBlock, InputWrapper, ButtonWrapper, StyleButton, Alert } from './LoginStyle';
import Input from '../Input/Input';
import error from '../../constants/error';
import { login } from '../../api';
import { setAuthToken } from '../../utils';

const Login = ({ setIsLogin }) => {
  const [inputValue, setInputValue] = useState({
    username: '',
    password: ''
  });
  const [errMessage, setErrMessage] = useState([]);
  const [hasErr, setHasErr] = useState(false);
  const isClick = useRef(true);
  const history = useHistory();

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
      setErrMessage([error.EMPTY_FILEDS]);
      setHasErr(true);
      return;
    }
    if (hasErr) return;

    const fetchLogin = async () => {
      let response;
      try {
        response = await login(username, password);
      } catch (err) {
        setErrMessage([error.FAIL_REGISTER[0]]);
        setHasErr(true);
        return;
      }

      const data = await response.json();
      // success
      if (response.status === 201) {
        const { nickname, token, token_expire_stamp } = data;
        setAuthToken(nickname, token, token_expire_stamp);
        return history.push('./kanban');
      };
      // error status
      switch (data.errno) {
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

    if (isClick.current) {
      isClick.current = false;
      fetchLogin();

      setTimeout(() => {
        isClick.current = true;
      }, 3000);
    }
  }

  return (
    <FunctionBlock>
      <InputWrapper>
        <Input
          type={'text'}
          name={'username'}
          placeholder="Username (6-12碼英數字)"
          prefix={<UserOutlined />}
          value={inputValue.username}
          handleInputChange={handleInputChange}
          setHasErr={setHasErr}
          errorMessage={error.INVALID_PARAMS.username}
        />
        <Input
          type={'password'}
          name={'password'}
          placeholder="Password (6-12碼英數字)"
          prefix={<EyeInvisibleOutlined />}
          value={inputValue.password}
          handleInputChange={handleInputChange}
          setHasErr={setHasErr}
          errorMessage={error.INVALID_PARAMS.password}
        />
      </InputWrapper>
      {errMessage.length > 0 && <Alert>{errMessage[0]}</Alert>}
      <ButtonWrapper>
        <StyleButton onClick={() => setIsLogin(false)}>
          <span>{<LeftOutlined />}</span>
        </StyleButton>
        <StyleButton onClick={handleLogin}>
          <span>{<RightCircleOutlined />}</span>
          Login
        </StyleButton>
      </ButtonWrapper>
    </FunctionBlock>
  )
}

export default Login;