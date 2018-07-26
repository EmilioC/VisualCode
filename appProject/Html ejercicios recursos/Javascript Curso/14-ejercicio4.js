'use strict'

/*
Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
*/

var numero1 = parseInt (prompt("Insert number1", 0));
var numero2 = parseInt (prompt("Insert number2",0));

while (numero1 < numero2){
	numero1 ++;

	if (numero1%2 == 0){
		document.print ("<h6>El número "+numero1+"es impar</h6>")
	}
}