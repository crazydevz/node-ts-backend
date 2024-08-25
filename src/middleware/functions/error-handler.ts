import { NextFunction, Request, Response } from 'express';

export default (err: any, req: Request, res: Response, next: NextFunction) => {
	let { status, message, body } = err;

	const response = {
		status: status || 500,
		message,
		body
	};

	res.status(response.status).send(response);
};
