import constants from '@constants/index';
import Product from '@database/models/product';
import NotFound from '@utils/errors/not-found';
import { validateObjectId } from '@utils/helpers/db-helper';

type DeleteProductPayload = { id: string };

export const deleteProduct = async ({ id }: DeleteProductPayload) => {
	validateObjectId(id);
	let product = await Product.findByIdAndDelete(id);
	if (!product) throw new NotFound(constants.productMessage.PRODUCT_NOT_FOUND);
	return product;
};
