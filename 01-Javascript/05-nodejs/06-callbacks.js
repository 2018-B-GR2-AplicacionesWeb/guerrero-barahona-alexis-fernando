//06-callback.js

const fs = require('fs');

console.log('inicio');

fs.readFile(//no se necesita  aandie externo para que se ejecute
    '06-texto2.txt',//nombre de archivo
    'utf-8',//condificacion
    (error, textoLeidoDelArchivo)=>{//si s enecesita al sistema oeprativo
        if(error){

            try{
                throw new Error(error);
            }catch(e){
                console.log(e)
            }
        }else{

            fs.writeFile(
                '06-texto2.txt',
                textoLeidoDelArchivo+'Mundo',
                (err)=>{
                    if(err) console.log('error')
                    console.log('Archivo actualizado');
                }

            );
            console.log(textoLeidoDelArchivo);
        }
        

    }
);



console.log('final');//esto imprime inciio fin y luego hola imprime en desorden, esto tmapoco de ada externo 

//un callback se ejecuta en el futuro , funciones quw devuelvenalgo en un tiempo en el futuro 

