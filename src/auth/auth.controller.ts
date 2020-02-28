
import { Controller, Request, Response, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req, @Response() res) {
    const result = await this.authService.login(req.user);
    res.cookie('jwt', result.token, {
      expires: new Date(Date.now() + 9999999),
      httpOnly: true
    });
    res.status(200).end();
  }

  @Get('/auth/logout')
  async logout(@Response() res) {
    res.cookie('jwt', '', {
      expires: new Date(Date.now())
    });
    res.status(200).end();
  };
}