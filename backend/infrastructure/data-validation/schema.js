import Joi from 'joi';

/** Generic schemas **/
const USERNAME = Joi.string().regex(/^[a-zA-Z\d]{6,12}$/);
const PASSWORD = Joi.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z\d@$!%*#?&]{6,12}$/);
const ISO_DATE = Joi.date().iso();

export {
  USERNAME,
  PASSWORD,
  ISO_DATE,
};
