import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import constants from '@constants/index';
import User from '@database/models/user';
import { UserCredentials } from '../types/user-credentials.type';
import NotFound from '@utils/errors/not-found';
import BadRequest from '@utils/errors/bad-request';

export const signin = async ({ email, password }: UserCredentials) => {
	const user = await User.findOne({ email });
	if (!user) {
		throw new NotFound(constants.userMessage.USER_NOT_FOUND);
	}

	const isValid = await bcrypt.compare(password, user.password as string);
	if (!isValid) {
		throw new BadRequest(constants.userMessage.INVALID_PASSWORD);
	}

	const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY!, {
		expiresIn: '1d'
	});

	return { token };
};
