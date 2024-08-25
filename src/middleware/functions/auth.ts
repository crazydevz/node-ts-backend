import jwt, { JwtPayload } from 'jsonwebtoken';

import constants from '@constants/index';
import catchAsync from './catch-async';
import Unauthorized from '../../utils/errors/unauthorized';
import Forbidden from '@utils/errors/forbidden';
import { NextFunction, Request, Response } from 'express';

export const validateToken = catchAsync(
	async (
		req: Request & { user?: string | JwtPayload },
		res: Response,
		next: NextFunction
	) => {
		if (!req.headers.authorization) {
			return next(
				new Unauthorized(constants.requestValidationMessage.TOKEN_MISSING)
			);
		}

		const token = req.headers.authorization.split(' ')[1].trim();
		const decoded = jwt.verify(token, process.env.SECRET_KEY!);
		req.user = decoded;
		next();
	}
);

export const restrictTo = catchAsync(async (...roles: string[]) => {
	return (
		req: Request & { user: { role: string } },
		res: Response,
		next: NextFunction
	) => {
		if (!roles.includes(req.user.role)) {
			return next(
				new Forbidden(constants.requestValidationMessage.NOT_AUTHORIZED)
			);
		}
		next();
	};
});
