//02-observables
const rxjs = require('rxjs');
const map = require('rxjs/operators').map;
const distinct = require('rxjs/operators').distinct; //suprime observables que esten repetidos 
const concat = require('rxjs/operators').concat; //suprime observables que esten repetidos 
const numeros$ = rxjs.of(1, true, 2, 2, 3, 4, 5, 6, 7, 7, 'alexis', ['oli'], function () { }, { nombre: 'alexis' }); //dentro de los observables se tiene booleano, string, 
numeros$
    .pipe(//el pipe seria como el bloque de codigo que recibie infinitas funciones para tratar al arreglo de observables 
distinct(), map((valorActual) => {
    return {
        data: valorActual
    };
}));
/*.subscribe(
    (ok) => {//acepta rtres funcione sprimera es cuando esta bien, segunda mal y compelte es otra cosa

        console.log('promesa numeros  ok', ok);

    },

    (error) => {
        console.log('promesa numeros  error', error);
    },

    () => {
        console.log('complete numeros');
    },

);*/
////
const promesita = (funciona) => {
    return new Promise((resolve, reject) => {
        if (funciona) {
            resolve(' :)');
        }
        else {
            reject(':(');
        }
    });
};
const promesita$ = rxjs.from(promesita(true)); //para transformar de promesas a observables 
/*promesita$
    .subscribe(

        (ok) => {
            console.log('promesita bien', ok);// eto seria como then y catch pero mucho mas facil en este caso este observable tiene ocmo elemntos a las caras felcies

        },

        (error) => {
            console.log('promesita mal', error);

        },

        () => {
            console.log('completado promesita');

        }

    );*/
const promesaUnida$ = numeros$
    .pipe(concat(promesita$));
promesaUnida$
    .subscribe((ok) => {
    console.log('promesa unida bien', ok); // eto seria como then y catch pero mucho mas facil en este caso este observable tiene ocmo elemntos a las caras felcies
}, (error) => {
    console.log('promesita unida mal', error);
}, () => {
    console.log('completado promesas undias');
});
//PARA EL DEBER SE USA inquirer 
//en el rpoyecto se debe guardar los datos en archivos, a parte deben cumplir con operaciones crud 
