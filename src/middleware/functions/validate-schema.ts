import constants from '@constants/index';
import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const validateSchema = (
	data: Record<string, any>,
	schema: Joi.ObjectSchema<any>
) => {
	const result = schema.validate(data, { convert: false });
	if (result.error) {
		const errDetails = result.error.details.map(
			(val: { message: string; path: (string | number)[] }) => ({
				error: val.message,
				path: val.path
			})
		);
		return errDetails;
	}
	return null;
};

export const validateBody = (schema: Joi.ObjectSchema<any>) => {
	return (req: Request, res: Response, next: NextFunction) => {
		let response = { ...constants.defaultServiceResponse };
		const err = validateSchema(req.body, schema);
		if (err) {
			response.body = err;
			response.message = constants.requestValidationMessage.BAD_REQUEST;
			return res.status(response.status).send(response);
		}
		return next();
	};
};

export const validateQueryParams = (schema: Joi.ObjectSchema<any>) => {
	return (req: Request, res: Response, next: NextFunction) => {
		let response = { ...constants.defaultServiceResponse };
		const err = validateSchema(req.query, schema);
		if (err) {
			response.body = err;
			response.message = constants.requestValidationMessage.BAD_REQUEST;
			return res.status(response.status).send(response);
		}
		return next();
	};
};
