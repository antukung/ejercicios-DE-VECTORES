const vectorUno= ["NEGRO","BLANCO","GRIS","AZUL","AMARILLO","NARANJA","MARRON"];
const vectorDos= [9,4,6,2,3,0,1];
const vectorTres= ["a","g","c","n","j","r","o"];

console.log (vectorUno[0],vectorDos[0],vectorTres[0]);
console.log (vectorUno[3],vectorDos[3],vectorTres[3]);
console.log (vectorUno.pop(),vectorDos.pop(),vectorTres.pop());

console.log (`El tipo de dato elegio es palabra ${vectorUno}`+`
El tipo de dato es numerico ${vectorDos}`+
`El tipo de dato es caracter ${vectorTres}`);