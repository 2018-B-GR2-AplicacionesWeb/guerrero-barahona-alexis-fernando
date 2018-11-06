//TRANSFORMAR LA FUNCION EJERCICIO A PROMESA
const fs = require('fs');





const promesaEjercicio = (arregloStrings) => {

    const arregloRespuestas = [];
    
    return new Promise(
        (resolve, reject) => {
            arregloStrings.forEach(
                (string, indice) => {
                    const nombreArchivo = `${indice}-${string}.txt`;
                    const contenidoArchivo = string;

                    fs.writeFile(
                        nombreArchivo,
                        contenidoArchivo,
                        (err) => {
                            const respuesta = {
                                nombreArchivo: nombreArchivo,
                                contenidoArchivo: contenidoArchivo,
                                error: err
                            };

                            arregloRespuestas.push(respuesta);
                            const terminoElArreglo = arregloStrings.length === arregloRespuestas.length;
                            if (terminoElArreglo) {
                                resolve(arregloRespuestas);
                            }
                        }
                    );
                }
            )

        }
    )
}


promesaEjercicio(['A', 'B', 'C'])
.then(
    (arregloRespuestas)=>{
        console.log(arregloRespuestas);
    }

)

.catch(
    (error)=>{
        console.log(error);
    }
)

   
