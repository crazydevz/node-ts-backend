import { Request, Response } from 'express';
import catchAsync from '@middleware/functions/catch-async';
import constants from '@constants/index';
import userService from '../../service/user.service';

export const signin = catchAsync(async (req: Request, res: Response) => {
	let response = { ...constants.defaultServiceResponse };

	const payload = await userService.signin(req.body);
	response.status = 200;
	response.message = constants.userMessage.SIGNIN_SUCCESS;
	response.body = payload;

	return res.status(response.status).send(response);
});
