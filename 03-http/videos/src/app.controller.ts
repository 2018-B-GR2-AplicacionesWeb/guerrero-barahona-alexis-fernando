import {
  Get,
  Controller,
  Request,
  Response,
  Headers,
  HttpCode,
  HttpException,
  Query,
  Param,
  Res,
  Post,
  Body
} from '@nestjs/common';
import { AppService } from './app.service';
import { UsuarioService, Usuario } from './usuario.service';





@Controller('Usuario')//decoradores - es una funcion que se ejecuta antes de algo , este decorador recibe como el nombre del segmento //http.1192.168.1.6:3000/Usuario es deci rpone lo que se ejecutara en este segemento 


export class AppController {



  //este constructor no es un cosntructor normal, esta dise;ado apra injectar las dependencias

  constructor(
    private readonly _usuarioService: UsuarioService,


  ) {

  }




  @Get('saludar')
  saludar(): string {
    return ('hola mundo')
  }



  /* @Get('saludar')//aqui se define  //http.192.168.1.6:3000/Usuario/metodoHola como le metodo lo que esta dentro dle controlador
     saludar(
         @Query() queryParams,
         @Query('nombre') nombre,
         @Headers('seguridad') seguridad,
     ): string { // metodo!
         return nombre;
     }*/


  @Get('despedirse')//aqui se define  //http.1192.168.1.6:3000/Usuario/metodoHola como le metodo lo que esta dentro dle controlador

  @HttpCode(201)
  despedirse(): Promise<string> {//metodo
    return new Promise<string>(
      (resolve, reject) => {
        resolve('adios');
      }
    )
  }


  @Get('inicio')
    inicio(
        @Res() response,
        @Query('accion') accion: string,
        @Query('nombre') nombre: string,
        @Query('busqueda') busqueda: string,
    ) {


        let mensaje; // undefined

        if (accion && nombre) {
            switch (accion) {
                case 'actualizar':
                    mensaje = `Registro ${nombre} actualizado`;
                    break;
                case 'borrar':
                    mensaje = `Registro ${nombre} eliminado`;
                    break;
                case 'crear':
                    mensaje = `Registro ${nombre} creado`;
                    break;
            }
        }

        let usuarios: Usuario[];
        if (busqueda) {
            usuarios = this._usuarioService
                .buscarPorNombreOBiografia(busqueda);
        } else {
            usuarios = this._usuarioService.usuarios
        }

        response.render('inicio', {
           nombre: 'Alexis',
            arreglo: usuarios,
            mensaje: mensaje
        });
    }

    @Post('borrar/:idUsuario')
    borrar(
        @Param('idUsuario') idUsuario: string,
        @Res() response
    ) {
        const usuario = this._usuarioService
            .borrar(Number(idUsuario));

        const parametrosConsulta = `?accion=borrar&nombre=${usuario.nombre}`;

        response.redirect('/Usuario/inicio' + parametrosConsulta);
    }

    @Get('crear-usuario')
    crearUsuario(
        @Res() response
    ) {
        response.render(
            'crear-usuario'
        )
    }

    @Get('actualizar-usuario/:idUsuario')
    actualizarUsuario(
        @Param('idUsuario') idUsuario: string,
        @Res() response
    ) {
        const usuarioAActualizar = this
            ._usuarioService
            .buscarPorId(Number(idUsuario));

        response.render(
            'crear-usuario', {
                usuario: usuarioAActualizar
            }
        )
    }


    @Post('actualizar-usuario/:idUsuario')
    actualizarUsuarioFormulario(
        @Param('idUsuario') idUsuario: string,
        @Res() response,
        @Body() usuario: Usuario
    ) {
        usuario.id = +idUsuario;

        this._usuarioService
            .actualizar(+idUsuario, usuario);

        const parametrosConsulta = `?accion=actualizar&nombre=${usuario.nombre}`;

        response.redirect('/Usuario/inicio' + parametrosConsulta);

    }


    @Post('crear-usuario')
    crearUsuarioFormulario(
        @Body() usuario: Usuario,
        @Res() response
    ) {

        this._usuarioService.crear(usuario);

        const parametrosConsulta = `?accion=crear&nombre=${usuario.nombre}`;

        response.redirect('/Usuario/inicio' + parametrosConsulta)
    }









}
