import { Get, Controller, Request, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';









@Controller('Usuario')//decoradores - es una funcion que se ejecuta antes de algo , este decorador recibe como el nombre del segmento //http.1192.168.1.6:3000/Usuario es deci rpone lo que se ejecutara en este segemento 







export class AppController {



  @Get('saludar')//aqui se define  //http.1192.168.1.6:3000/Usuario/metodoHola como le metodo lo que esta dentro dle controlador
  saludar(): string {//metodo
    return ('hola mundo')
  }


  @Get('despedirse')//aqui se define  //http.1192.168.1.6:3000/Usuario/metodoHola como le metodo lo que esta dentro dle controlador
  
  @HttpCode(201)
  despedirse(): Promise<string> {//metodo
    return new Promise<string>(
      (resolve, reject)=>{
        resolve('adios');
      }
    )
  }


  @Get('inicio')
  inicio(){
    //header
    return '<h1></h1>'
  }



}
