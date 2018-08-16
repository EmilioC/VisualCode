'use strict'

// Funciones anonimas
// Es una función que no tiene nombre ... sometimes


function sumame(numero1, numero2, temazo, lo){
	var sumar = numero1 + numero2;
	console.log ("Funcion sumame= "+ sumar );
	temazo (sumar);
	lo (sumar)
}
sumame(2, 4, dato => { 
	console.log("función anónima");
	console.log("El datos es "+dato);
}, 
function (datos){
	console.log ("El día de hoy es maravilloso");
	console.log("2ª function: "+(datos*10000));
}),



function restarFecha(){     
        
	var fechaActual = document.getElementById ("fecha").value;
	var fechaApt = document.getElementById ('fecha1').value;

	var fechaActualA = new Date(fechaActual);
	var fechaAptA = new Date(fechaApt);
	var today = new Date();

	// Example: https://msdn.microsoft.com/es-es/library/ee532932(v=vs.94).aspx
   // var birthday = new Date(fechaActual);
	var fecha_diferencia_milisegundos = fechaAptA - fechaActualA ;
	var fecha_diferencia_dias =
	 (fecha_diferencia_milisegundos/(1000*60*60*24));
	 var fecha_diferencia_dias_sinDecimal = fecha_diferencia_dias.toFixed(1); 

	 var fecha_diferencia_horas =
	 (fecha_diferencia_milisegundos/(1000*60*60));
	 var fecha_diferencia_horas_sinDecimal = fecha_diferencia_horas.toFixed(1);       
	
	document.getElementById ('resultado1').innerHTML= fecha_diferencia_dias_sinDecimal;
	document.getElementById ('resultado2').innerHTML= fecha_diferencia_horas_sinDecimal;
	document.getElementById ('demo').innerHTML= "aloA";
  };
