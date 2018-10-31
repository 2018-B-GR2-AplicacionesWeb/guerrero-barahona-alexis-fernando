//08-promesas.js
//


const fs = require('fs');

const promesa = (nombreArchivo)=>{//promesas no reciben callback 
    return new Promise(
        (resolve,reject)=>{
            fs.readFile(
                nombreArchivo,
                'utf-8',
                (error, contenidoLeido)=>{
                    if(error){
                        reject(error);
                    }else{
                        resolve(contenidoLeido);
                    }

                }
            )
        }
    );
};//promesa se usa dentor d eufncion anonima y hace resolve o reject 



const promesaEscritura = (nombreArchivo, contenidoArchivo)=>{
    return new Promise(
        (resolve,reject)=>{
            fs.writeFile(
                nombreArchivo,
                contenidoArchivo,
                (error)=>{
                   if(error){
                       reject(error);

                   }else{
                       resolve(contenidoArchivo);
                   }

                }

            );
            }
            

        
    );
};


//deber cambiar function ejercicio a promesa
//para ahorita cambiar appendFIle  PROMESA

promesa('099-texto.txt')
.then(
    (contenido)=>{
        console.log('ok',contenido); //tbn se puede devovler lagun tipo de dato 
        return promesaEscritura(
            '07-texto.txt',
            contenido+'\nNUevo contenido'
        );
    }
)

.then(
    (contenidoCompleto)=>{
        console.log(contenidoCompleto);

    }
)

.catch(
    (error)=>{
        console.log('mal',error);
    }
);


//EJERCICIO EN CLASE

const promesaAppendFile = (nombreArchivo, contenidoArchivo)=>{
    return new Promise(
        (resolve,reject)=>{
            fs.readFile(
                nombreArchivo,
                'utf-8',
                (error, contenidoLeido)=>{
                    if(error){
                        fs.writeFile(
                            nombreArchivo,
                            contenidoLeido,
                            (error)=>{
                                if(error){
                                    reject(error);
                                }else{
                                    resolve(contenidoLeido)
                                }
                            }
                        );
                    }else{
                        fs.writeFile(
                            nombreArchivo,
                            contenidoLeido,
                            (error)=>{
                                if(error){
                                    reject(error);
                                }else{
                                    resolve(contenidoLeido)
                                }
                            }
                        );
                    }

                }
            );

        }
    )
}

promesaAppendFile('07-texto.txt', 'nuevoContenido' )
    .then(
        (contenidoLeido) => {
            console.log(contenido);
            return promesaEscritura('07-texto.txt', contenidoLeido);
        }
    )
    .catch(
        (error) => {
            console.log('Catch',error);
        }
);