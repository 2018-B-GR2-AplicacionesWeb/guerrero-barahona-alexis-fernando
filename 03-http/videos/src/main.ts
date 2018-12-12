import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import {Options} from 'http-server';


async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.set('view engine','ejs');
  await app.listen(3000);
}
bootstrap();
