import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import cookieParser from 'cookie-parser';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  const options = {
    "origin": true,
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    "credentials": true
  }
  app.enableCors(options)
  await app.listen(3000);
}

bootstrap();

