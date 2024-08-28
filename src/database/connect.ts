import constants from '../constants';
import mongoose from 'mongoose';

module.exports = async () => {
	try {
		await mongoose.connect(process.env.DB_URI!);
		console.debug(constants.dbConnectionMessage.DB_CONNECTION_SUCCESS);
	} catch (err) {
		console.debug(constants.dbConnectionMessage.DB_CONNECTION_FAIL);
	}
};
