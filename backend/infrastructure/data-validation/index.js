import Joi from 'joi';
import * as Schema from './schema';

function makeValidationSchema(keys) { return Joi.object().keys(keys); }

const dataValidation = {
  Schema,
  makeValidationSchema,
};

export default dataValidation;
