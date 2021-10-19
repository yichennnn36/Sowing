import React from 'react';
import { Input } from 'antd';
import { RightCircleOutlined, LeftOutlined, UserOutlined, EyeInvisibleOutlined, EyeTwoTone, SmileOutlined } from '@ant-design/icons';
import { FunctionBlock, InputWrapper, ButtonWrapper, StyleButton } from './RegisterStyle';

const Register = ({ setIsRegister }) => {
  return (
    <FunctionBlock>
      <InputWrapper>
        <Input size="large" placeholder="Nickname" prefix={<SmileOutlined />} />
        <Input size="large" placeholder="Username" prefix={<UserOutlined />} />
        <Input.Password
          size="large"
          placeholder="Password"
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
      </InputWrapper>
      <ButtonWrapper>
        <StyleButton onClick={() => setIsRegister(false)}>
          <span>{<LeftOutlined />}</span>
        </StyleButton>
        <StyleButton>
          <span>{<RightCircleOutlined />}</span>
          Register
        </StyleButton>
      </ButtonWrapper>
    </FunctionBlock>
  )
}

export default Register;