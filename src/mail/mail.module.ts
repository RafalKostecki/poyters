import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';


@Module({
  imports: [],
  providers: [MailService],
  exports: [MailService],
  controllers: [MailController],
})
export class MailModule {}