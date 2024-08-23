import bcrypt from 'bcrypt';

import constants from '@constants/index';
import User from '@database/models/user';

export const signup = async ({
	email,
	password
}: {
	email: string;
	password: string;
}) => {
	const user = await User.findOne({ email });
	if (user) {
		throw new Error(constants.userMessage.DUPLICATE_EMAIL);
	}

	const hashedPassword = await bcrypt.hash(password, 12);
	const newUser = new User({ email, password: hashedPassword });
	const result = await newUser.save();

	return result;
};
