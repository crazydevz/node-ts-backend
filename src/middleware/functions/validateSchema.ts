import constants from '@constants/index';

const validateSchema = (data: any, schema: any) => {
	const result = schema.validate(data, { convert: false });
	if (result.error) {
		const errDetails = result.error.details.map(
			(val: { message: any; path: any }) => ({
				error: val.message,
				path: val.path
			})
		);
		return errDetails;
	}
	return null;
};

export const validateBody = (schema: any) => {
	return (req: any, res: any, next: any) => {
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

export const validateQueryParams = (schema: any) => {
	return (req: any, res: any, next: any) => {
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
