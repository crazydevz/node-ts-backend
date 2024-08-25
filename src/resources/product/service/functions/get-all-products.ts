import Product from '@database/models/product';

export const getAllProducts = async ({ skip = '0', limit = '10' }) => {
	let products = await Product.find({})
		.skip(parseInt(skip))
		.limit(parseInt(limit));
	return products;
};
