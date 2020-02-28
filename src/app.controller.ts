
import { Controller, Request, Response, Post, UseGuards, Body, Get, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req, @Response() res) {
    return this.authService.login(req.user, res);
  }

  @Post('users/create')
  async addUser(
    @Body('username') username: string, 
    @Body('password') password: string, 
    @Body('mail') mail: string
  ) {
    const generatedId = await this.usersService.insertUser(username, password, mail);

    return {id: generatedId};
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('users/profile/')
  async userProfile(@Request() req) {
    return req.user
  }
}