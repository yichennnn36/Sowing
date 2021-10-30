import React, { useState } from 'react';
import { InputBlock, Alert } from './InputStyle';

const Input = ({
  type,
  name,
  placeholder,
  prefix,
  value,
  handleInputChange,
  errorMessage
}) => {
  const [isValid, setIsValid] = useState({
    username: true,
    password: true
  });

  const handleCheckValid = (e) => {
    const { name, value } = e.target;
    const usernameReg = /^[a-zA-Z\d]{6,12}$/;
    const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z\d@$!%*#?&]{6,12}$/;

    if (name === 'username' && value) {
      const usernameBoolean = usernameReg.test(value) ? true : false;
      setIsValid({ ...isValid, username: usernameBoolean });
      // usernameBoolean ? setHasErr(false) : setHasErr(true);
      return;
    }
    if (name === 'password' && value) {
      const passwordBoolean = passwordReg.test(value) ? true : false;
      setIsValid({ ...isValid, password: passwordBoolean });
      // passwordBoolean ? setHasErr(false) : setHasErr(true);
      return;
    }
  };

  return (
    <InputBlock>
      {prefix}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleInputChange}
        value={value}
        onBlur={handleCheckValid}
      />
      {isValid && !isValid[name] && <Alert>{errorMessage}</Alert>}
    </InputBlock>
  )
};

export default Input;