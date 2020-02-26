
import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './user.model';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require("bcrypt");


@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) { }

  async insertUser(username: string, password: string, mail: string) {
    const existingUsers = await this.userModel.find({username: username}).exec();
    
    if (existingUsers.length > 0) {
      throw new HttpException({
        status: 409,
        error: 'User already exists',
      }, 409);
    } else {
      await bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          throw new HttpException({
            status: 500,
            error: 'Error during crypting a password',
          }, 500);
        } else {
          const newUser = new this.userModel({
            username,
            password: hash,
            mail
          });
          
          newUser.save();
        }
      });
    }
  }

  async findOne(username: string): Promise<IUser[] | undefined> {
    const existingUsers = await this.userModel.find({username: username}).exec();
    return existingUsers;
  }
}