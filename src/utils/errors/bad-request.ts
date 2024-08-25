import AppError from './app';
import { Error } from '@utils/enums/error';

class BadRequest extends AppError {
	constructor(message: string, body?: Record<string, any>) {
		super(Error.badRequest, message, body);
	}
}

export default BadRequest;
