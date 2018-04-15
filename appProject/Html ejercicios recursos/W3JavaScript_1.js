
  function ampliar_info(){

      var ampliado = document.getElementById ('texto_ampliado');
      var resumen = document.getElementById ('texto_resumen');
      var enlace = document.getElementById ('enlace_ver');

      console.log (resumen.style.display);

      if (resumen.style.display == 'block' || resumen.style.display == ''){
        resumen.style.display = 'none';
        ampliado.style.display = 'block';   
        enlace.innerHTML = "Ocultar más información";     
      }
      else{
        resumen.style.display = 'block';
        ampliado.style.display = 'none'; 
        enlace.innerHTML = "Mostrar más información ";
      }
  } 

  function Fecha(){
    var fecha = document.getElementById("fecha");
      input.document.innerHTML("Date()")
  }
