import Joi from 'joi';

export const signupSchema = Joi.object().keys({
	email: Joi.string().required(),
	password: Joi.string().required()
});

export const signinSchema = Joi.object().keys({
	email: Joi.string().required(),
	password: Joi.string().required()
});
