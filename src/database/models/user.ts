import { Schema, model } from 'mongoose';

const userSchema = new Schema(
	{
		email: String,
		password: String
	},
	{
		timestamps: true,
		toObject: {
			transform: function (doc, ret, options) {
				ret.id = ret._id;
				delete ret._id;
				delete ret.password;
				delete ret.__v;
				return ret;
			}
		},
		toJSON: {
			transform: function (doc, ret, options) {
				ret.id = ret._id;
				delete ret._id;
				delete ret.password;
				delete ret.__v;
				return ret;
			}
		}
	}
);

export default model('User', userSchema);
