//una funcion es algo que recibe argumentos y que devuelve algo
function sumarDosNumeros(numUno, numDos) {
    //validaciones 
    var numeroUnoEsNumber = typeof numUno == 'number';//true
    var numeroDosEsNumber = typeof numDos == 'number';//true

    if (numeroUnoEsNumber && numeroDosEsNumber) {

        return numUno + numDos;

    } else {
        return 'NO SEA GAY INGRESE NUMEROS';
    }



}

//envio otros parametros

console.log(sumarDosNumeros(5, 7));
console.log(sumarDosNumeros('a', 'b'));//imprime 0 xq no son numeros, si se agrega mas argumentos o parametros javascript no los toma en cuenta

//las validaciones sirven para controlar datos que entrend e otras personas ya que javascript no manda errorres


function saludar() {
    console.log('hola putos');//esto es undefined si una funcion notn eien return, es decir el undefined es como el void
}

saludar();

console.log(saludar());//no hay error ya que imprime un undefined y como javascript noes tipado hace loq ue le da la ganan


function sumarNumeros(...numero) {//los tres putnos aqui significan que s epuede poner n numeros de argumentos y eto al funcion trata como una rreglo

    var arregloTemporal = numero;//los n arguemntos se ahcen una rreglo

    var i;
    var resultado=0;
    for (i = 0; i < arregloTemporal.length; i++) {
        resultado+=arregloTemporal[i];
    }

    return resultado;

}


console.log(sumarNumeros(1, 2, 3, 4));


function saludar2(nombre, funcionMensajeria){
    var saludo = `HOLA ${nombre.toUpperCase()}`;
    funcionMnesajeria(saludo);
    return saludo;//la tilde iunvertida sirve para concatenar pero de una mejor forma junto con ${} sirve para concatenar variables de template es decir variables que se tiene afuera pero se ignresa en una cadena
}

saludar("vicente",imprimirEnConsola);

function imprimirEnConsola(texto){
    console.log(texto);
}///revisar esto de ignresar funciones como parametros


//var
var variable = 'valor';// NUNCA MAS se va a usar esto

//FORMAS DE DECLARAR VARIABLES

let edad = 29; // esta se usa para poder mutar el objeto, es decir igualar el objeto a alguna cosa
edad=30;

const casado = false; // esta variable e sinmutable 

casado = true;// no se puede jacer

const hijos = null;
hijos = 1;

const mascotas = {};
mascotas = 1;//ninguno de estos s epude inmutart cuando es const 

const carros = [];
carros = []; // tamoco se puede inmutar, immutar significa que nos  epoued eigualar a algo 




const mascotas = {};

mascotas.cachetes = 'Cachetes';
mascotas.numero =1;
delete mascotas.numero;//esto si s epuede hacer porque tiene metodos y se reasigna x ejemplo si hiciera const nombre = alexis y se hace nombre.toUpperCase() esto se puede hacer



const carros = [];

carros.push('FINAL');
carros.pop();

//  ES RECOMENDABLE SIEMPRE USAR VARIABLES INMUTABLES




//ANONYMOUS FUNCTIONS --no e sbueno suar funciones anonimas
//SON FUNCIONES QUE NO TIENEN NOMBRE


const saludar4 = function(){
    //implementacion
};//las variables tbn pueden ser igualadas a funciones anonimas

saludar4();

const usuario = {
    nombre: 'Adrian',
    saludar:function(){
        return this.nombre
    }
};//tbn s epuede usar funciones anonimas en emtodos de objetos
usuario.saludar();


//enviar como parametros
saludar("Adrian", function(texto){
    console.log(texto);
});


// fat arrowe funcionts -> =>


const saludarv3 = ()=>{
    //implementacion

};
saludarv3();

const usuariov2 = {
    nombre:'Alexis',
    saludar: ()=>{

    }
};

saludar("Adrian", (texto)=>{
    console.log(texto);
});


const sumarDosNumerosV2 = function(numeroUno, numeroDos){
    return numeroUno + numeroDos;
};

const sumarDosNumerosV3 = (n1, n2) => n1 + n2;//es lo mismo que de arribita pero es mas corto mas legible 

const saludarV5 = saludo => console.log(saludo);//cuando se usa un solo parametro se puede omitir el aprentesis x ejemp en saludo 

const saludarV6 = (saludo) => console.log(saludo);// es lo msimo
S
const saludarV5 = saludo => {
    console.log(saludo)
};// e slo mismo




