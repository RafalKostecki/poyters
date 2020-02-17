import * as mongoose from 'mongoose';


export interface IUser extends mongoose.Documen {
  userId: number | string,
  username: string,
  password: string,
  mail: string
};

export const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  mail: { type: String, required: true }
})