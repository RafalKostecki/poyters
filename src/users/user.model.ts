import * as mongoose from 'mongoose';


export interface IUser extends mongoose.Documen {
  userId: number | string,
  username: string,
  password: string,
  mail: string
};

export const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mail: { 
    type: String, 
    required: true,
    match: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  }
})