import React from 'react';
import PropTypes from 'prop-types';
import { RightCircleOutlined, LeftOutlined, UserOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { FunctionBlock, InputWrapper, ButtonWrapper, StyleButton, Alert } from './LoginStyle';
import Loading from '../../components/Loading/Loading';
import Input from '../Input/Input';
import error from '../../constants/error';
import useLogin from '../../hooks/useLogin';

const Login = ({ setIsLogin }) => {
  const {
    isLoading,
    inputValue,
    handleInputChange,
    setHasErr,
    errMessage,
    handleLogin
  } = useLogin();

  return (
    <FunctionBlock>
      {isLoading && <Loading />}
      <h2>Login</h2>
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
};

Login.propTypes = {
  setIsLogin: PropTypes.func
};

export default Login;