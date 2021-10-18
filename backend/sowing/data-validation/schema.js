import Joi from 'joi';
import { dataValidation } from '../../infrastructure';

const NICKNAME = Joi.string();

const SIGN_UP = {
  body: dataValidation.makeValidationSchema({
    username: dataValidation.Schema.USERNAME.required(),
    password: dataValidation.Schema.PASSWORD.required(),
    nickname: NICKNAME.required(),
  }),
};

export {
  SIGN_UP,
};
