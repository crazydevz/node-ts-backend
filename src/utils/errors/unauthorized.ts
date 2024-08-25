import AppError from './app';
import { Error } from '@utils/enums/error';

class Unauthorized extends AppError {
	constructor(message: string, body?: Record<string, any>) {
		super(Error.unauthorized, message, body);
	}
}

export default Unauthorized;
