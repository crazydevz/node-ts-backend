import { Request, Response } from 'express';
import constants from '@constants/index';
import catchAsync from '@middleware/functions/catch-async';
import productService from '@resources/product/service/product.service';

export const createProduct = catchAsync(async (req: Request, res: Response) => {
	let response = { ...constants.defaultServiceResponse };

	const payload = await productService.createProduct(req.body);
	response.status = 200;
	response.message = constants.productMessage.PRODUCT_CREATED;
	response.body = payload;

	return res.status(response.status).send(response);
});
