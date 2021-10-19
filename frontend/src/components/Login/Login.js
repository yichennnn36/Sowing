import React from 'react';
import { Input } from 'antd';
import { RightCircleOutlined, LeftOutlined, UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { FunctionBlock, InputWrapper, ButtonWrapper, StyleButton } from './LoginStyle';

const Login = ({ setIsLogin }) => {
  return (
    <FunctionBlock>
      <InputWrapper>
        <Input size="large" placeholder="Username" prefix={<UserOutlined />} />
        <Input.Password
          size="large"
          placeholder="Password"
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
      </InputWrapper>
      <ButtonWrapper>
        <StyleButton onClick={() => setIsLogin(false)}>
          <span>{<LeftOutlined />}</span>
        </StyleButton>
        <StyleButton>
          <span>{<RightCircleOutlined />}</span>
          Login
        </StyleButton>
      </ButtonWrapper>
    </FunctionBlock>
  )
}

export default Login;