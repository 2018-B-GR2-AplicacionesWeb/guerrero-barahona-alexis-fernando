//02-observables
const rxjs = require('rxjs');
const numeros$ = rxjs.of(1, 2, 3, 4, 5, 6);
numeros$.subscribe((ok) => {
    console.log('eb ok', ok);
}, (error) => {
    console.log('eb error', error);
}, () => {
    console.log('complete');
});
