import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UsuarioModule} from "Usuario/usuario.module";
import {TypeOrmModule} from '@nestjs/typeorm';
import {UsuarioEntity} from "Usuario/usuario-entity";
import {LibroEntity} from "libro/libro.entity";
import {PaginaEntity} from "pagina/pagina.entity";

@Module({
    imports: [
        TypeOrmModule
            .forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '12345678',
                database: 'usuarios',
                synchronize: true,
                dropSchema: false,
                entities: [
                    UsuarioEntity,
                    LibroEntity,
                    PaginaEntity
                ]
            }),
        UsuarioModule
    ], // Modulos
    controllers: [AppController], // Controllers
    providers: [
        AppService
    ], // Servicios
})
export class AppModule {
}