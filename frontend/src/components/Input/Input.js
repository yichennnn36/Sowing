import PropTypes from 'prop-types';
import { InputBlock, Alert } from './InputStyle';

const Input = ({
  type,
  name,
  placeholder,
  defaultValue,
  prefix,
  value,
  handleInputChange,
  errorMessage,
  isValid,
  setIsValid
}) => {
  const handleCheckValid = (e) => {
    const { name, value } = e.target;
    const usernameReg = /^[a-zA-Z\d]{6,12}$/;
    const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z\d@$!%*#?&]{6,12}$/;

    if (name === 'username' && value) {
      const usernameBoolean = usernameReg.test(value) ? true : false;
      setIsValid({ ...isValid, username: usernameBoolean });
      return;
    }
    if (name === 'password' && value) {
      const passwordBoolean = passwordReg.test(value) ? true : false;
      setIsValid({ ...isValid, password: passwordBoolean });
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
        defaultValue={defaultValue}
      />
      {isValid && !isValid[name] && <Alert>{errorMessage}</Alert>}
    </InputBlock>
  )
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  prefix: PropTypes.element,
  value: PropTypes.string,
  handleInputChange: PropTypes.func,
  errorMessage: PropTypes.string,
  isValid: PropTypes.object,
  setIsValid: PropTypes.func
}

export default Input;
