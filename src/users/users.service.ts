
import { Injectable } from '@nestjs/common';
import { IUser } from './user.model';


@Injectable()
export class UsersService {
  private readonly users: IUser[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
      },
      {
        userId: 4,
        username: 'test',
        password: 'password'
      }
    ];
  }

  async findOne(username: string): Promise<IUser | undefined> {
    return this.users.find(user => user.username === username);
  }
}