'use strict'


    var numero1 =  prompt ("Introduce número1");
    var numero2 =  prompt ("Introduce número2");

  /*  while (numero1 <=0 || numero2 <=0 || isNan(numero1) || isNan(numero2)) {
      numero1 = parseInt(prompt ("Introduce número1"));
      numero2 = parseInt(prompt ("Introduce número2"));
    };*/
    while (numero1 <=0 || numero2 <=0 || isNan(numero1) || isNan(numero2)){
      numero1 = parseInt(prompt ("Introduce número1"));
      numero2 = parseInt(prompt ("Introduce número2"));
    }

    if (numero1 == numero2){
      alert ("Iguales");

    } else if (numero1 > numero2){
      alert ("Número 1 mayor");
      console.log ("Número 1 mayor");
      /*lert ("Número: "+numero1+"es mayor que"+
      " el número " + numero2);
      console.log ("Número: "+numero1+"es mayor que"+
      " el número " + numero2);
        */
    } else if (numero1 < numero2){
     alert( "Número2: "+numero2+ " es mayor"+
      " al número " + numero1);
    };

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