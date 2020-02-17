
import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './user.model';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require("bcrypt");


@Injectable()
export class UsersService {
  // private readonly users: IUser[];
  private users: IUser[] = [];

  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {
    // this.users = [
    //   {
    //     userId: 1,
    //     username: 'john',
    //     password: 'changeme',
    //     mail: 'test@mail.com'
    //   },
    //   {
    //     userId: 2,
    //     username: 'chris',
    //     password: 'secret',
    //     mail: 'test@mail.com'
    //   },
    //   {
    //     userId: 3,
    //     username: 'maria',
    //     password: 'guess',
    //     mail: 'test@mail.com'
    //   },
    //   {
    //     userId: 4,
    //     username: 'test',
    //     password: 'password',
    //     mail: 'test@mail.com'
    //   }
    // ];
  }

  async insertUser(username: string, password: string, mail: string) {
    const existingUsers = await this.userModel.find({username: username}).exec();

    console.log('existingUser', existingUsers)
    
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
  
          console.log(newUser)
          newUser.save();
        }
      });
    }
  }

  async findOne(username: string): Promise<IUser | undefined> {
    return this.users.find(user => user.username === username);
  }
}