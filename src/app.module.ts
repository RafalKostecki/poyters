import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

const accessString = 'mongodb+srv://new-test-user:9OFB838GLJY0h1vx@cluster0-amydc.mongodb.net/test?retryWrites=true&w=majority';


@Module({
  imports: [
    MongooseModule.forRoot(accessString),
    AuthModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
