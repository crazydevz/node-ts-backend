import constants from '@constants/index';
import Product from '@database/models/product';
import NotFound from '@utils/errors/not-found';
import { validateObjectId } from '@utils/helpers/db-helper';

export const getProductById = async (id: string) => {
	validateObjectId(id);
	let product = await Product.findById(id);
	if (!product) throw new NotFound(constants.productMessage.PRODUCT_NOT_FOUND);
	return product;
};
