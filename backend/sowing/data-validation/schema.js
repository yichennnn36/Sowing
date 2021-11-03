import Joi from 'joi';
import { dataValidation } from '../../infrastructure';

const NICKNAME = Joi.string();
const TICKET_ID = Joi.number().positive();
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
    start_date: dataValidation.Schema.ISO_DATE.required(),
    end_date: dataValidation.Schema.ISO_DATE.required(),
  }),
};
const UPDATE_TICKET_STATUS = {
  params: dataValidation.makeValidationSchema({
    ticket_id: TICKET_ID.required(),
  }),
  body: dataValidation.makeValidationSchema({
    current_status: TICKET_STATUS.required(),
    new_status: TICKET_STATUS.required(),
  }),
};
const DELETE_TICKET = {
  params: dataValidation.makeValidationSchema({
    ticket_id: TICKET_ID.required(),
  }),
};
const UPDATE_TICKET_INFO = {
  params: dataValidation.makeValidationSchema({
    ticket_id: TICKET_ID.required(),
  }),
  body: dataValidation.makeValidationSchema({
    title: TICKET_TITLE,
    content: TICKET_CONTENT,
    location: EVENT_LOCATION,
    category: TICKET_CATEGORY,
    start_date: dataValidation.Schema.ISO_DATE,
    end_date: dataValidation.Schema.ISO_DATE,
  }),
};

export {
  SIGN_UP,
  LOGIN,
  CREATE_TICKET,
  UPDATE_TICKET_STATUS,
  DELETE_TICKET,
  UPDATE_TICKET_INFO,
};
