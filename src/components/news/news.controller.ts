import { Controller, Response, Post } from '@nestjs/common';
import { Resource, Roles, Scopes, AllowAnyRole, Unprotected, Public } from 'nest-keycloak-connect';

@Controller('news')
export class NewsController {

  @Post('add')
  @Roles('app-admin')
  findAll(@Response() res) {
    return res.status(200).send('OK');
  }

  @Post('user')
  @Roles('user')
  user(@Response() res) {
    return res.status(200).send('OK');
  }
}
