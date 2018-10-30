//so.js

module.exports = {//en un json se puexe exportar todo en un json
    tipo: 'privado',
    activo: true,
    version: 'WINDOWS 7',
    imprimir: ()=>{
        console.log(this.version);
    },
    archivos:[1,2,3],
    programas:[
        {
            nombre:'EXCEL',
            version:2017
        }
    ]
};