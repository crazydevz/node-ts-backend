import Joi from 'joi';

export const createProductSchema = Joi.object().keys({
	name: Joi.string().required(),
	price: Joi.number().required(),
	brand: Joi.string().required()
});

export const getAllProductsSchema = Joi.object().keys({
	skip: Joi.string(),
	limit: Joi.string()
});

export const updateProductSchema = Joi.object().keys({
	name: Joi.string(),
	price: Joi.number(),
	brand: Joi.string()
});
