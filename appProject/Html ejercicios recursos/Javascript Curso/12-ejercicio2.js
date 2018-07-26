'use strict'

/*
Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahí mostrar el resultado
*/

var suma = 0;
var contador = 0;
var letra = "a";

do {
	var numero = prompt ("Introducir número",0);
	
	if (isNaN(numero)){
		
		console.log ("Es una letra= "+letra);
	}
	else if (!isNaN(numero)) {

		var numero1 = parseInt(numero);
		suma = numero1 + suma;
		contador ++;
		console.log ("suma= "+suma);
		console.log ("contador= "+contador);
	}

} while (!isNaN(numero));

alert ("Suma de números"+ suma);
alert ("Media de números"+(suma/contador));

