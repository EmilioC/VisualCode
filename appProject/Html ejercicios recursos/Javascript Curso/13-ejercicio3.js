'use strict'

/*
Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/

var numero1 = parseInt ( prompt("Introduzca el número 1",0));
var numero2 = parseInt (prompt ("Introducir el número 2",0));

console.log (numero1);
console.log (numero2);

document.write("<h3>De"+numero1+" a "+numero2+" están estos numeros:</h3>")
for(var i = numero1; i <= numero2; i++){
	document.write("<h6>"+i+"</h6>");
}
