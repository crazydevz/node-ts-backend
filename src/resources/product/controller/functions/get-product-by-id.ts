import constants from '@constants/index';
import catchAsync from '@middleware/functions/catch-async';
import productService from '@resources/product/service/product.service';
import { Request, Response } from 'express';

export const getProductById = catchAsync(
	async (req: Request, res: Response) => {
		let response = { ...constants.defaultServiceResponse };

		const payload = await productService.getProductById(req.params.id);
		response.status = 200;
		response.message = constants.productMessage.PRODUCT_FETCHED;
		response.body = payload;

		return res.status(response.status).send(response);
	}
);
