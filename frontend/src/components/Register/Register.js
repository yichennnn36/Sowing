import React, { useState, useRef } from 'react';
import { RightCircleOutlined, LeftOutlined, UserOutlined, EyeInvisibleOutlined, SmileOutlined } from '@ant-design/icons';
import { FunctionBlock, InputWrapper, ButtonWrapper, StyleButton, Alert, Success } from './RegisterStyle';
import Input from '../Input/Input';
import error from '../../constants/error';
import success from '../../constants/success';
import { register } from '../../api';

const Register = ({ setIsRegister, setIsLogin }) => {
  const [inputValue, setInputValue] = useState({
    nickname: '',
    username: '',
    password: ''
  });
  const [successMessage, setSuccessMessage] = useState([]);
  const [errMessage, setErrMessage] = useState([]);
  const [hasErr, setHasErr] = useState(false);
  const isClick = useRef(true);

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
      setErrMessage([error.EMPTY_FILEDS]);
      setHasErr(true);
      return;
    }

    if (hasErr) return;

    const fetchRegister = async () => {
      let response;
      try {
        response = await register(username, password, nickname);
      } catch (err) {
        setErrMessage([error.FAIL_REGISTER[0]]);
        setHasErr(true);
        return;
      }
      // success
      if (response.status === 204) {
        setSuccessMessage([success.SUCCESS_REGISTER]);

        setTimeout(() => {
          setIsRegister(false);
          setIsLogin(true);
        }, 1800);
        return;
      };

      const data = await response.json();
      // error status
      switch (data.errno) {
        case 'ERR_USER_EXIST':
          setErrMessage([error.FAIL_REGISTER[409]]);
          setHasErr(true);
          break;

        default:
          setErrMessage([error.FAIL_REGISTER[0]]);
          setHasErr(true);
      }
    }

    if (isClick.current) {
      isClick.current = false;
      fetchRegister();

      setTimeout(() => {
        isClick.current = true;
      }, 3000);
    }
  };

  return (
    <FunctionBlock>
      <InputWrapper>
        <Input
          type={'text'}
          name={'nickname'}
          placeholder="Nickname"
          prefix={<SmileOutlined />}
          value={inputValue.nickname}
          handleInputChange={handleInputChange}
        />
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
      {successMessage.length > 0 && <Success>{successMessage[0]}</Success>}
      <ButtonWrapper>
        <StyleButton onClick={() => setIsRegister(false)}>
          <span>{<LeftOutlined />}</span>
        </StyleButton>
        <StyleButton onClick={handleRegister}>
          <span>{<RightCircleOutlined />}</span>
          Register
        </StyleButton>
      </ButtonWrapper>
    </FunctionBlock>
  )
}

export default Register;