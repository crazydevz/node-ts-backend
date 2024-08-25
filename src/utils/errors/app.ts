class AppError extends Error {
	status: number;
	body?: Record<string, any>;
	constructor(status: number, message: string, body?: Record<string, any>) {
		super(message);
		this.status = status;
		this.message = message;
		this.body = body;
	}
}

export default AppError;
