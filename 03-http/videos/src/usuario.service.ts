import { Injectable } from "@nestjs/common";

@Injectable()
export class UsuarioService {

    usuarios: Usuario[] = [
        {
            nombre: 'Adrian',
            biografia: 'doctor',
            id: 1
        },
        {
            nombre: 'Vicente',
            biografia: 'doctor',
            id: 2
        },
        {
            nombre: 'Carolina',
            biografia: 'doctor',
            id: 3
        }
    ];

    registroActual = 4;


    crear(nuevoUsuario: Usuario): Usuario {
        nuevoUsuario.id = this.registroActual;
        this.registroActual++;
        this.usuarios.push(nuevoUsuario);
        return nuevoUsuario;

    }



    actualizar(idUsuario: number,
        nuevoUsuario: Usuario): Usuario {
        const indiceUsuario = this
            .usuarios
            .findIndex(
                (usuario) => usuario.id === idUsuario
            );
        this.usuarios[indiceUsuario] = nuevoUsuario;
        return nuevoUsuario;
    }



    borrar(idUsuario: number): Usuario {

        const indiceUsuario = this
            .usuarios
            .findIndex(
                (usuario) => usuario.id === idUsuario
            );
        const usuarioBorrado = JSON.parse(
            JSON.stringify(this.usuarios[indiceUsuario])//esto es para clonar y guardar algo no se hace solo igualando 
        );
        this.usuarios.splice(indiceUsuario, 1);
        return usuarioBorrado;

    }

    buscarPorId(idUsuario: number) {
        return this.usuarios
            // .find(u=>u.id === idUsuario);
            .find(
                (usuario) => {
                    return usuario.id === idUsuario
                }
            );
    }

    buscarPorNombreOBiografia(busqueda:string):Usuario[]{

        return this.usuarios.filter(
            (usuario)=>{
                //Si la busqueda contiene algo del nombre

                const tieneAlgoEnElnombre = usuario
                    .nombre.includes(busqueda); // True / False


                

                //Siu la busqueda conitnee algo de la biografia

                const tieneAlgoEnLaBio = usuario
                    .biografia.includes(busqueda);// True / False

                return tieneAlgoEnElnombre || tieneAlgoEnLaBio;
            }
        )


    }








}


export interface Usuario {

    nombre: string;
    biografia: string;
    id: number;
}