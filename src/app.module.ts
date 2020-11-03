import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { InfoController } from './info/info.controller';
import { InfoModule } from './info/info.module';
import { InfoService } from './info/info.service';
import { MailController } from './mail/mail.controller';
import { MailService } from './mail/mail.service';
import { MailModule } from './mail/mail.module';

const accessString = 'mongodb+srv://new-test-user:9OFB838GLJY0h1vx@cluster0-amydc.mongodb.net/test?retryWrites=true&w=majority';


@Module({
  imports: [
    MongooseModule.forRoot(accessString),
    AuthModule,
    UsersModule,
    InfoModule,
    MailModule
  ],
  controllers: [AppController, InfoController, MailController],
  providers: [AppService, InfoService, MailService],
})
export class AppModule {}
