import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioService } from './usuario.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    UsuarioService], //aqui se debe a;adir el servicio de usuario apra que este disponible en nest
})
export class AppModule { }
