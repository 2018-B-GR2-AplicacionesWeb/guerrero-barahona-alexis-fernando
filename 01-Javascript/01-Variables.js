//TIPOS DE VARIABLES EN JAVASCRIPT 
//var se suaba apra definir una variable
var nombreVariable = 'valorVariable';
var edad = 1;//tipo number, los decimales tbn son number
var edad2 = '1';//tipo string
var casado = false; //boolean
var amigable = null;//???
var existeONo;//undefined, esta implicitamente que la variable esta igualado a undefined seria lo msimo esto existeONo = undefined;
var fechaNacimiento = new Date('1996-06-05');

console.log('edad', typeof edad);// console.log para imprimir en consolac
console.log('edad2', typeof edad2);
console.log('casado', typeof casado);
console.log('amigable', typeof amigable);
console.log('existeONo', typeof existeONo);
console.log('fechasacimeinto', fechaNacimiento);



// no tipado - no tiene tipos ej: edad = 10
//tipado - si tiene tipos ej: int edad = 10


//Javascript, para deifnir un objeto se usa llave valor 
//var Alexis = {}; eso ya e sun iobjetio aunque vacio

var Alexis = {   //nombre seria la llave y alexis el valor
    nombre: 'Alexis',
    edad: 29,
    hijos:undefined,
    llave:'valor',
};

console.log(Alexis.nombre); //asi se accesa a lsoa tributos 
console.log(Alexis.edad);
console.log(Alexis.hijos);


// ahora la diferencia con un objeto json

var adrianJSON = {
    "llave":"valor", //error
}



// if (0) se imprime no, si if null se imprime no, if undiefined tbn se imnprime no, el resto se imprime i o true

