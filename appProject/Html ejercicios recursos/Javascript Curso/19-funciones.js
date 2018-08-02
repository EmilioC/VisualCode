'use strict'

// Funciones
// Una función es una agrupación reutilizable de un conjunto de instrucciones


function calculadora(numero1, numero2){   	
	
	console.log (numero1 * numero2);
	document.write("Suma: " + (numero1 * numero2)+"<br/>");
   
  }

  function suma1 (numero1){   	
	
	return (numero1 + 1);
   
  }

  function suma1000 (a , b){	 
	
	document.write("Suma: " + (a + b)+"<br/>");
	document.write("Suma1: " + ((suma1 (a))+ 4)+"<br/>");
	calculadora (a, b);
  }

  calculadora (3, 9);
  suma1000 (5,5);

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
	document.getElementById ('demo').innerHTML= "alo";
   
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

