import Product from '@database/models/product';
import { CreateProductPayload } from '../types/create-product-payload';

export const createProduct = async (data: CreateProductPayload) => {
	let product = new Product({ ...data });
	let result = await product.save();
	return result;
};
