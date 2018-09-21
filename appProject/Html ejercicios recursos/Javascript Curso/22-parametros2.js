'use strict'

// Parametros REST y SPREAD

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
	console.log("Fruta 1: ", fruta1);
	console.log("Fruta 2: ", fruta2);
	console.log("Resto "+resto_de_frutas);
}

function listadoDias (...dias){
	console.log ("Array días= "+dias);
}

listadoDias ("lunes", "martes", "miercoles", "jueves","wednesday");

listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");

var frutas = ["Naranja", "Manzana"];
listadoFrutas( ...frutas, "Sandia", "Pera", "Melon", "Coco");

// Funciones
// Una función es una agrupación reutilizable de un conjunto de instrucciones


function curso(numero1, numero2, mostrar = false){     
	if (mostrar == false){
		document.getElementById ('demo').innerHTML= "False suma "+(numero1 * numero2);
	}
	else{
		document.getElementById ('demo').innerHTML= "True multiplica"+ (numero1 + numero2);
	}      
  }

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

  function calculo(){     
        
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
	 var fecha_diferencia_dias_sinDecimal = fecha_diferencia_dias.toFixed(0); 

	 var fecha_diferencia_horas =
	 (fecha_diferencia_milisegundos/(1000*60*60));
	 var fecha_diferencia_horas_sinDecimal = fecha_diferencia_horas.toFixed(0); 
	 
	 if (fecha_diferencia_horas_sinDecimal != 5){
	  document.getElementById ('resultado3').innerHTML= "Más de 5 días " + fecha_diferencia_horas_sinDecimal;
	  document.getElementById ('resultado4').innerHTML= fecha_diferencia_horas_sinDecimal;
	 } else if ((fecha_diferencia_horas_sinDecimal >=5))     
	 document.getElementById ('resultado3').innerHTML= "Más 10 días " + fecha_diferencia_horas_sinDecimal;
	  document.getElementById ('resultado4').innerHTML= fecha_diferencia_horas_sinDecimal; 
	
  }

  