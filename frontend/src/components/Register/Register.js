import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { RightCircleOutlined, LeftOutlined, UserOutlined, EyeInvisibleOutlined, SmileOutlined } from '@ant-design/icons';
import { FunctionBlock, InputWrapper, ButtonWrapper, StyleButton, Alert, Success } from './RegisterStyle';
import Loading from '../../components/Loading/Loading';
import Input from '../Input/Input';
import error from '../../constants/error';
import useRegister from '../../hooks/useRegister';

const Register = ({ setIsRegister, setIsLogin }) => {
  const {
    response,
    status,
    inputValue,
    handleInputChange,
    successMessage,
    errorMessage,
    handleRegister,
    isValid,
    setIsValid
  } = useRegister();

  useEffect(() => {
    if (response && successMessage) {
      setTimeout(() => {
        setIsRegister(false);
        setIsLogin(true);
      }, 1500);
    }
  }, [response, successMessage, setIsLogin, setIsRegister]);

  return (
    <FunctionBlock>
      {status === 'loading' && <Loading />}
      <h2>Register</h2>
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
          placeholder="Username (6-12碼英文或數字)"
          prefix={<UserOutlined />}
          value={inputValue.username}
          handleInputChange={handleInputChange}
          errorMessage={error.INVALID_PARAMS.username}
          isValid={isValid}
          setIsValid={setIsValid}
        />
        <Input
          type={'password'}
          name={'password'}
          placeholder="Password (6-12碼英文及數字)"
          prefix={<EyeInvisibleOutlined />}
          value={inputValue.password}
          handleInputChange={handleInputChange}
          errorMessage={error.INVALID_PARAMS.password}
          isValid={isValid}
          setIsValid={setIsValid}
        />
      </InputWrapper>
      {errorMessage && <Alert>{errorMessage}</Alert>}
      {successMessage && <Success>{successMessage}</Success>}
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
};

Register.propTypes = {
  setIsRegister: PropTypes.func,
  setIsLogin: PropTypes.func
};

export default Register;