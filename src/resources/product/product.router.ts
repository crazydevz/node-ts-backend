import { Router } from 'express';
const router = Router();
import productController from './controller/product.controller';
import {
	getAllProductsSchema,
	createProductSchema,
	updateProductSchema
} from './product.schema';
import {
	validateBody,
	validateQueryParams
} from '@middleware/functions/validate-schema';
import { validateToken } from '@middleware/functions/auth';

router
	.route('/')
	.get(
		validateToken,
		validateQueryParams(getAllProductsSchema),
		productController.getAllProducts
	)
	.post(
		validateToken,
		validateBody(createProductSchema),
		productController.createProduct
	);

router
	.route('/:id')
	.get(productController.getProductById)
	.patch(
		validateToken,
		validateBody(updateProductSchema),
		productController.updateProduct
	)
	.delete(validateToken, productController.deleteProduct);

module.exports = router;
