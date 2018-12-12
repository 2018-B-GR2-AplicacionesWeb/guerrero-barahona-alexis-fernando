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
    @Res() response
  ) {
    response.render('inicio', {
      nombre: 'ALEXIS', //esto es como decirle renderiza la pagina inicio e ingresa ese nombre
      arreglo: this._usuarioService.usuarios
    })


  }

  @Post('borrar/:idUsuario')
  borrar(
    @Param('idUsuario') idUsuario: string,
    @Res() response
  ) {
    this._usuarioService.borrar(Number(idUsuario));

    response.redirect('/Usuario/inicio');
  }


  @Get('crear-usuario')
  crearUsuario(
    @Res() response
  ) {
    response.render(//metodo para rendezzir una pagina

      'crear-usuario'

    )

  }


  @Post('crear-usuario')
  crearUsuarioFormulario(
    @Body() usuario: Usuario,
    @Res() response
  ) {

    this._usuarioService.crear(usuario);

    response.redirect('/Usuario/inicio')//aqui no se renderiza, porque comoes post solo deberia mandarse al servidor

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



  





}
