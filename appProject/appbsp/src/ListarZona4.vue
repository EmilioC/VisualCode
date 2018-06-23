<template>
   <div id="app">    
     <!-- Atribute is-mobile information: https://bulma.io/documentation/layout/level/ -->
    <!-- Table of May-->
    <div class="level-item has-text-centered ">
    <div>
      <p class="heading">APT MAYO</p>
      <p class="title">{{numberAptActualMonth}}</p>
    </div>
  </div>
  <div>
      <table class="table is-fullwidth">
        <thead> 
            <th>FECHA</th> 
            <th>CATEGORÍA</th>          
        </thead >
             <tr v-for="mensaje in filtroActualMonth"
             v-bind:key="mensaje['.key']">                
               <!-- <td> {{ index+1 }}</td> -->
                <td> {{ mensaje.fecha }} </td>
                <td> {{ mensaje.category }} </td>                           
            </tr>
      </table>   
    </div>
  </div>  
</template>

<script>
import { aptRef } from "./firebase";
var fechon =  document.getElementById ('demo');

var today = new Date();
      var h = today.getHours();
      var min = today.getMinutes();
      var s = today.getSeconds();      
      var m = today.getMonth()+1;
      var d = today.getUTCDate();
      var a = today.getUTCFullYear();       
      this.fechaDiaMesAno = a+"-"+m+"-"+d;  
      var today = new Date();   
      var m = today.getMonth()+1;
      var ano2018 = "2018";
      var guion = "-";
      var cero = "0";
      //Variable verifica mes actual
      var mesActual =a+guion+cero+m+guion;

export default {
  firebase: {
    apt: aptRef
  },
  data() {
    return {
      id: null,
      supervisor: "JA",
      fecha: "20/04/2018",
      descripcion: "Material dentro del recinto",
      accion: "Retirada del material",
      typeAPT: "Comportamiento",
      category: "Riesgo tropezar o caer",
      photo: "si",
      aprendizaje: "Responsabilidad equipos en buen estado",
      causes: "Reducción probabilidad de accidente",
    /* Test with Computed Properties 
    https://vuejs.org/v2/guide/computed.html#Computed-Properties*/
      fechas :"fechas",
      cP_: "si",
      cP_a :"3",
      cP_b :"4",
      minimo : "0",
      mayo: "31-05-2018", 
      mensaje: null,
      username: 'juanwmedia',
      mensajes: [],
      apt: [],
      fechita: "",
      fechaDiaMesAno: "",
      aptMes: "2",
      numberAptActualMonth: "",
    };
  },
  methods: {
    submitName() {
      aptRef.push({
        id: this.id,
        supervisor: this.supervisor,
        fecha: this.fecha,
        descripcion: this.descripcion,
        accion: this.accion,
        typeAPT: this.typeAPT,
        category: this.category,
        photo: this.photo,
        aprendizaje: this.aprendizaje,
        causes: this.causes        
      });
      this.name = "";
    },
    removeName(key) {
      aptRef.child(key).remove();
    },
    setEditName(key) {
      aptRef.child(key).update({ edit: true });
    },
    cancelEdit(key) {
      aptRef.child(key).update({ edit: false });
    },
    saveEditName(name) {
      const key = name[".key"];
      aptRef.child(key).set({
        name: person.name,
        edit: false
      });
    },
    infoFecha (){ 
       this.apt.filter((juego) => juego.fecha.includes("2018-05")).reverse();     
      }
    },   
    computed: {
      /*Filter apt with .id and includes. Test only is 
      the new value that we used for traverse the array */
      filtroId (){
      return this.apt.filter((test) => test.id.includes("3"));
      }, 
      /*Filter apt with letters insite of field category with includes*/
      filtroCategoria (){
      return this.apt.filter((juego) => juego.category.includes("e"));
      },  
      filtroActualMonth (){ 
        //Intentando contar el número de APT en el mes
        //En principio cuantos apt hay con fecha 2018-06-13
        //pero devuelve la posición del APT que cumple con la 
        //condición fecha pero no el número de APT que cumplen la condición.
        var numeroApts = 0;
        var myDate1 = new Date ('2018-06-14'); 
        for (var i=0; i < this.apt.length; i++)
          {
            var dateapt = this.apt[i].fecha;
           this.numberAptActualMonth = dateapt; 
           return dateapt.getMonth;
          }
        //Con .reverse()recuperamos el último dato añadido a la db.    
    //  return this.apt.filter((juego) => juego.fecha.includes(mesActual)).reverse();       
      },
      filtroJune (){
        return this.apt.ref('fecha').orderByValue().on('child_added', snapshot => {
                    console.log(snapshot.key, snapshot.val());
                });
      },
       numberAptActualMonth1 : function (){
      for (var i=0; i < this.apt.length; i++)
      {
        if ( this.apt[i].fecha == "2018-06-13")
        {
          numberAptActualMonth = i;
        }
      }
    },
      
      /*Recorre en array el apt desde la instancia de Firebase y
      va modificando los datos*/
      filtroCategory (){ 
      /*Test with create new array type apt but we modify*
      and we use av-for for take new values of array*/      
      /*If it is the current month*/
      
      var mesApt= this.fecha;
      this.mensaje = mesApt;
      var variable = "6";
      if ( m = mesApt) {
          return this.apt.filter((juego) => ( 
          juego.id = m,
          juego.fecha = d     
          ));
      }
      else {
          return this.apt.filter((juego) => ( 
          juego.id = m    
          ));
      } 

      /*Probando con un if dentro del recorrer juego.id.. ju
      if( today.month()= juego.fech() | today.year() = juego.fecha().year())
      (juego.id = h,
      juego.fecha =d,
      juego.category = m           
      ));0*/   
  }}
};
</script>

<style lang="css">
    @import '/node_modules/bulma-extensions/bulma-timeline/dist/bulma-timeline.min.css';
    @import '/node_modules/bulma/css/bulma.min.css';

</style>
