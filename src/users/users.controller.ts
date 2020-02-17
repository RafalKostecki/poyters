import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
    async addUser(
        @Body('username') username: string, 
        @Body('password') password: string, 
        @Body('mail') mail: string
    ) {
      const generatedId = await this.usersService.insertUser(username, password, mail);

      return {id: generatedId};
    }
}
