'use strict'

// Funciones anonimas
// Es una función que no tiene nombre


function sumame(numero1, numero2){
	var sumar = numero1 + numero2;
	console.log ( sumar );
}
sumame (2, 3);


function sumame1(){     
        
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
	
	document.getElementById ('resultado1').innerHTML= variableExterna;
	document.getElementById ('resultado2').innerHTML= fecha_diferencia_horas_sinDecimal;
	document.getElementById ('demo').innerHTML= "aloA";
  }

/*
sumame(5, 7, dato => {
	console.log("La suma es:", dato);
},
function(dato){
	console.log("La suma por dos es:", (dato*2));
},
function(dato){
	console.log("La suma por dos es:", (dato*80));
});

*/
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
   
  }
