import { CreateProductPayload } from './create-product-payload';

export type UpdateProductPayload = CreateProductPayload & { id: string };
