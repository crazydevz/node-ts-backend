import constants from '@constants/index';
import Product from '@database/models/product';
import { validateObjectId } from '@utils/helpers/db-helper';
import { UpdateProductPayload } from '../types/update-product-payload';
import NotFound from '@utils/errors/not-found';

export const updateProduct = async ({
	id,
	body
}: {
	id: string;
	body: UpdateProductPayload;
}) => {
	validateObjectId(id);

	let conditions = {
		_id: id
	};
	let update = body;
	let options = { new: true };

	let product = await Product.findOneAndUpdate(conditions, update, options);
	if (!product) throw new NotFound(constants.productMessage.PRODUCT_NOT_FOUND);
	return product;
};
