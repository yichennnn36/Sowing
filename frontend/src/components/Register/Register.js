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
    isLoading,
    inputValue,
    handleInputChange,
    setHasErr,
    errMessage,
    successMessage,
    handleRegister
  } = useRegister();

  useEffect(() => {
    if (response && response.ok) {
      setTimeout(() => {
        setIsRegister(false);
        setIsLogin(true);
      }, 1800);
    }
  }, [response, setIsLogin, setIsRegister])

  return (
    <FunctionBlock>
      {isLoading && <Loading />}
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
};

Register.propTypes = {
  setIsRegister: PropTypes.bool,
  setIsLogin: PropTypes.bool
};

export default Register;