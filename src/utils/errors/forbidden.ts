import AppError from './app';
import { Error } from '@utils/enums/error';

class Forbidden extends AppError {
	constructor(message: string, body?: Record<string, any>) {
		super(Error.forbidden, message, body);
	}
}

export default Forbidden;
