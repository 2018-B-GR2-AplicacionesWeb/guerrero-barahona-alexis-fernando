//OPERADORE SPUEDEN SER APLCIADOS A ARREGLOS Y OTRAS COSAS
//operador for each

const arreglo = ['A', 'b', 'c'];

/*const respuestaForEach = arreglo
    .forEach(
        (valorActual, indiceActual, arreglo) => {
            console.log('VALOR', valorActual);
            console.log('indice', indiceActual);
            console.log('arreglo', arreglo);
        }

    );*///ESTA FUNCION TIENE TODOS ESTOS PAMAETROS PERO ABAJPO SE INDICA UNA NFORMA AMS CORTA


const respuestaForEach2 = arreglo.forEach((v) => console.log(v));// esto e slo que un for  recorre un arreglo

console.log(respuestaForEach2);//undefined, forEach deuvle undefined



//map -- muta el arreglo

const respuestaMap = arreglo
    .map(
        (valorActual) => {
            return valorActual.toUpperCase();

        }
    )
    .forEach((v) => console.log(v));





//console.log(respuestaMap);//esto solo devuelve lo reemplazado a los valores en esa posicion pero no cambia al valor original, map sio devuelve otro arreglo 


//filter

const arregloNumeros = [1,4,5,7,{id:7, nombre:'alexis'},8,6,9,6,2,10];

const respuestaFilter = arregloNumeros
.filter(
    (valorActual)=>{

        return valorActual % 2 === 0// siempre se debera usar 3 iguales siempre nucna dos iguales en javascript, evalua lacondicion de si valorActual % 2 es 0 solo coge eso a los que son treu



    }
); // esta funcione sta diciendo de arreglonumeros saque lso nuemrois pares


console.log(respuestaFilter);

//findIndex


const respuestaFindIndex = arregloNumeros.findIndex(
    (valorActual)=>{
        return valorActual.id === 7//expresion, el fin index a diferencia del ifdex of no necesito recibir el objeto completo sibo parte de el , el findIndex sirve apra busquedas ena rreglos d eobjetos
    }
);
console.log(respuestaFindIndex);//devuelve le indice


//find

const respuestaFind= arregloNumeros.find(
    (valorActual)=>{
        return valorActual.id === 7//expresion, el fin index a diferencia del ifdex of no necesito recibir el objeto completo sibo parte de el , el findIndex sirve apra busquedas ena rreglos d eobjetos
    }
);
console.log(respuestaFind);//devuelve el objeto completo no el indice 

//some

const respuestaSome = arregloNumeros.some(
    (valorActual)=>{
        return valorActual>10;//EXPRESION, esta funcionse lle como que si hay algun numero mayor a 10 en ela rreglo, deuvelve un bolleano y en este caso es false
    }
);

console.log(respuestaSome);



//every

const respuestaEvery = arregloNumeros.every(
    (valorActual)=>{
        return valorActual<4;//EXPRESION, esta funcionse lle como que si todos los numeros del arreglo son menorees a 4, deuvelve un bolleano y en este caso es false4
    }
);

console.log(respuestaEvery);

//reduce

const respuestaReduce = arregloNumeros.reduce(
    (valorAcumulado, valorActual)=>{
        return valorAcumulado + valorActual;//se lee esto como sumar los elementos desde arreglo desde 0 
    },
    0//valor con el que empeiza la oepracion
);

console.log(respuestaReduce);


const respuestaReduceRight = arregloNumeros.reduce(
    (valorAcumulado, valorActual)=>{
        return valorAcumulado + valorActual;//es lo mismo pero de derecha a izuqierda
    0//valor con el que empeiza la oepracion
);

console.log(respuestaReduceRight);


const respuestaReducev2 = arregloNumeros.reduce(
    (valorAcumulado, valorActual)=>{
        return valorAcumulado - valorActual;//esto resta lo elemntos del arreglo empezando desde 100 
    },
    100//valor con el que empeiza la oepracion
);

console.log(respuestaReducev2);

//sort

const arregloNumerosClonado = JSON.parse(JSON.stringify(arregloNumeros));//esto e spara clonar el arreglo inicial 

const respuestaSort = arregloNumerosClonado.sort(
    (a,b) => a - b//sort arregla el arreglo de mayor a menos o menor a mayor en este caso 
);

