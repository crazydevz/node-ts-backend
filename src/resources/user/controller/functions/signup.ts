import { Request, Response } from 'express';
import catchAsync from '@middleware/functions/catchAsync';
import constants from '@constants/index';
import userService from '../../service/user.service';

export const signup = catchAsync(async (req: Request, res: Response) => {
	let response = { ...constants.defaultServiceResponse };

	const payload = await userService.signup(req.body);
	response.status = 200;
	response.message = constants.userMessage.SIGNUP_SUCCESS;
	response.body = payload;

	return res.status(response.status).send(response);
});
