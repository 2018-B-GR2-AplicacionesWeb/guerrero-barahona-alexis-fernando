//02-observables

declare var require:any;//estom s ehace xq algunas cosas de javascript noe stan en typescript

const rxjs = require('rxjs');

const numeros$ = rxjs.of(1,2,3,4,5,6);

numeros$.subscribe(
    (ok)=>{//acepta rtres funcione sprimera es cuando esta bien, segunda mal y compelte es otra cosa

        console.log('eb ok',ok);

    },

    (error)=>{
        console.log('eb error',error);
    },

    ()=>{
        console.log('complete');
    },

);

