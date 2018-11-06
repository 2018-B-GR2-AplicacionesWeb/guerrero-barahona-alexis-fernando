const fs = require('fs');



// ['A','B','C'] esto reibira la funcion un arreglo de sitring y luego se crear archivo y llenar con algo, al final se devolvera una rreglo de respuestas 
//INDICE DE POSICION DE ARREGLO 
 //0-A.txt asi hay que crear, EL ARCHIVO CONTENDRA  'A'
 //1-B.txt  'B'
 //2-C.txt 'C'






 function ejercicio(
     
    arregloStrings,
    callback
 ){
    const arregloRespuestas = [];
     arregloStrings.forEach(
         (string,indice)=>{
             const nombreArchivo=`${indice}-${string}.txt`;
             const contenidoArchivo=string;

             fs.writeFile(
                 nombreArchivo,
                 contenidoArchivo,
                 (err)=>{
                    const respuesta ={
                        nombreArcivo:nombreArchivo,
                        contenidoArchivo:contenidoArchivo,
                        error:err
                    };

                    arregloRespuestas.push(respuesta);
                    const terminoElArreglo = arregloStrings.lenght===arregloRespuestas.length;
                    if(terminoElArreglo){
                        callback(arregloRespuestas);
                    }

                 }

             );
         }
     )
 };

 ejercicio(
    ['A','B','C'] ,
    (arregloRespuestas)=>{
        console.log(arregloRespuestas);
    }
 );