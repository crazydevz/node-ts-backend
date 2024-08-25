import mongoose from 'mongoose';
import constants from '@constants/index';
import BadRequest from '@utils/errors/bad-request';

export const validateObjectId = (id: string) => {
	if (!mongoose.Types.ObjectId.isValid(id)) {
		throw new BadRequest(constants.requestValidationMessage.INVALID_ID);
	}
};
