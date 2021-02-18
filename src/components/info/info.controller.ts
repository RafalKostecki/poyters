import { Controller, Response, Get } from '@nestjs/common';
import { InfoService } from './info.service';

@Controller('info')
export class InfoController {
  constructor(
    private readonly infoService: InfoService
  ) {}

  @Get('check')
  check(@Response() res) {
    return res.status(200).send('OK');
  }

  @Get('app')
  app() {
    return this.infoService.app();
  }
}
