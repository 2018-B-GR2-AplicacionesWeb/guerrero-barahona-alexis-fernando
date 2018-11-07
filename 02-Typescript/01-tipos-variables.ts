
//duck typing
const nombre = 'alexis';
const edad = 21.2;
const casado = false;
const alexis = {};
const arreglo = [];
const fecha = new Date();


//lenguaje tipado
//let nombre1:string = "alejhvbxis";


let edad1:number|string = 123;
edad1 = '21';

let casado2:boolean = false;
casado2 =true;
casado2=null;
casado2 =undefined;

let arregloNumeros1: number[] | string[]= [1,2,3]
//arregloNumeros1.push('3');


//interface


const persona:{//aqui solo se degfine la itnerfaz 
    nombre:string;
    apellido?:string;//ahi se ahc eopcional a la propiedad
    edad?:number;
    estado?:'activo' | 'inactivo';

} = {
    nombre:'alexis',
    apellido:'guerrero',



};

//tbn se puede igualaar 


let fecha2:Date = new Date();

fecha2 = new Date('2018-05-06');


//tsc nombreArchivo.ts    esto se llama transpilar porque el navegador sc   