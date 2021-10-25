import Joi from 'joi';
import { dataValidation } from '../../infrastructure';

const NICKNAME = Joi.string();
const TICKET_TITLE = Joi.string();
const TICKET_CONTENT = Joi.string();
const TICKET_CATEGORY = Joi.number();
const TICKET_STATUS = Joi.string().valid('sowing', 'watering', 'sprouting');
const EVENT_LOCATION = Joi.string();

const SIGN_UP = {
  body: dataValidation.makeValidationSchema({
    username: dataValidation.Schema.USERNAME.required(),
    password: dataValidation.Schema.PASSWORD.required(),
    nickname: NICKNAME.required(),
  }),
};
const LOGIN = {
  body: dataValidation.makeValidationSchema({
    username: dataValidation.Schema.USERNAME.required(),
    password: dataValidation.Schema.PASSWORD.required(),
  }),
};

const CREATE_TICKET = {
  body: dataValidation.makeValidationSchema({
    title: TICKET_TITLE.required(),
    content: TICKET_CONTENT,
    location: EVENT_LOCATION.required(),
    status: TICKET_STATUS,
    category: TICKET_CATEGORY.required(),
    date: dataValidation.Schema.ISO_DATE.required(),
  }),
};

export {
  SIGN_UP,
  LOGIN,
  CREATE_TICKET,
};
