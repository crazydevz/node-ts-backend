import { Schema, model } from 'mongoose';

const productSchema = new Schema(
	{
		name: String,
		price: Number,
		brand: String
	},
	{
		timestamps: true,
		toObject: {
			transform: function (doc, ret, options) {
				ret.id = ret._id;
				delete ret._id;
				delete ret.__v;
				return ret;
			}
		},
		toJSON: {
			transform: function (doc, ret, options) {
				ret.id = ret._id;
				delete ret._id;
				delete ret.__v;
				return ret;
			}
		}
	}
);

export default model('Product', productSchema);
