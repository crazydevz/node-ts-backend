import AppError from './app';
import { Error } from '@utils/enums/error';

class NotFound extends AppError {
	constructor(message: string, body?: Record<string, any>) {
		super(Error.notFound, message, body);
	}
}

export default NotFound;
