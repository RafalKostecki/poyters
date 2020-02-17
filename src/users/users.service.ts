
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './user.model';


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
    const newUser = new this.userModel({
        username,
        password,
        mail
    });

    const result = await newUser.save();
    return result.id
  }

  async findOne(username: string): Promise<IUser | undefined> {
    return this.users.find(user => user.username === username);
  }
}