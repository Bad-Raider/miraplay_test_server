import { Schema } from 'mongoose';

const userMongooseSchema = new Schema(
    {
        password: {
            type: String,
            required: [true, 'Set password for user'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
        },
        name: {
            type: String,
            required: [true, 'Name is required'],
        },
        token: {
            type: String,
            default: '',
        },
    },
    { versionKey: false, timestamps: true }
);

export default userMongooseSchema;
