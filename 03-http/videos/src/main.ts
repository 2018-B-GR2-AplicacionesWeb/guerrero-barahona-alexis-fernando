import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { Options } from 'http-server';

import * as session from 'express-session';
import * as express from 'express';


async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.set('view engine', 'ejs');


  app.use(
    session({
      secret: 'No sera de tomar un traguito',
            resave: false,
            saveUninitialized: true,
            cookie: {secure: true}
    })
  );


  //configurar el servidor WEB

  app.use(express.static('publico'));
  await app.listen(3000);
}
bootstrap();
