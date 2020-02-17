
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { IUser } from '../users/user.model';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require("bcrypt");


@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    // @InjectModel('User') private readonly userModel: Model<IUser>
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    return this.usersService.findOne(username).then(users => {
      if (users.length < 1) {
        console.log(users)
        throw new UnauthorizedException();
      } else {
        bcrypt.compare(pass, users[0].password, (err, res) => {
          if (err) {
            console.log('nie zgadza sie')
            return null;
          }
          if (res) {
            console.log('haslo sie zgadz')
            const { password, ...result } = users[0];
            return result;
          } else {
            console.log('nie zgadza sie haslo')
            return null;
          }
        });
      }
    }).catch(err => {
      console.log(err)
      return err
    })
  }

  // async validateUser(username: string, pass: string): Promise<any> {
  //   const users = await this.userModel.find({username: username}).exec();

  //   console.log('existingUser', users)
    
  //   if (users.length > 0) {
  //     throw new UnauthorizedException();
  //   } else {
  //     bcrypt.compare(pass, users[0].password, (err, res) => {
  //       if (err) {
  //         console.log('nie zgadza sie')
  //         return null;
  //       }
  //       if (res) {
  //         console.log('haslo sie zgadz')
  //         const { password, ...result } = users[0];
  //         return result;
  //       } else {
  //         console.log('nie zgadza sie haslo')
  //         return null;
  //       }
  //     });
  //   }
  // }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      // eslint-disable-next-line @typescript-eslint/camelcase
      access_token: this.jwtService.sign(payload),
    };
  }
}