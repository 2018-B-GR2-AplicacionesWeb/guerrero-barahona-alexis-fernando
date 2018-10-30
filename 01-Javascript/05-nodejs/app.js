//app.js

const nodejs = require('./nodejs.js');//el require sirve para llamar al archivo que se va exportar d eotro script
const runtime = require('./runtime.js');
const so = require('./so.js');

console.log(nodejs);
console.log(runtime);
console.log(so);
console.log(so.archivos);

//se puede exportar todo tipo de cosas



// cuando se trate de una carpeta con otra jerarqueia es asi

const util1 = require('./util/util');//carpegta mas arriba

const na = require('../01-Variables');//para irse a carpeta ams adrentro

console.log(util1);
console.log(na);


//modeulos del sistema que viene preinstalado

const fs = require('fs');//modeulos preinstalaods

console.log(fs);

// modeulos que no vienen rpesintalados

const express = require('express');//modulos no preisntalaods
console.log(express);
