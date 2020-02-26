
import { Injectable, UnauthorizedException, Response } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require("bcrypt");


@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const users = await this.usersService.findOne(username);

    if (users.length < 1) throw new UnauthorizedException();
    
    if (bcrypt.compareSync(pass, users[0].password)) {
      const { password, ...result } = users[0];
      return result;
    } else {
      return null;
    }
  }

  
  async login(user: any, @Response() response: any) {
    const payload = { username: user.username, sub: user.userId };
    response.cookie('token', this.jwtService.sign(payload), {expires: new Date(Date.now() + 9999999), httpOnly: true, domain: 'http://localhost:4200'})
    // response.cookie('access_token', `${this.jwtService.sign(payload)}`, 'HttpOnly') // Using express res object.
    return response.send({
      status: 200,
      message: 'Authorization succesfull',
      username: user.username
    })
  }
}