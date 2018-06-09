<template>
   <div id="app">
     <!--
     <p id="fecha" v-for="mensaje of apt"
        v-bind:key="mensaje['.key']">hola
       <button @click="infoFecha(mensaje['.key'])">
          Remove</button>
          {{ mensaje.fecha }}
     </p> -->     
     <button @click="aptMayo()" class="button is-link">AÑADIR APT</button>
    <p class="title">{{fechaDiaMesAno}}</p>
    <label class="title" id="aptMes">{{aptMes}}</label>
     <!-- Atribute is-mobile information: https://bulma.io/documentation/layout/level/ -->


<nav class="level is-mobile">
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">APT Realizados</p>
      <p class="title">3,458</p>
        <p class="heading" id="demo">
          <ul>
            <li v-for="fecha in fechita"
            v-bind:key="fecha['.key']">
            </li>
          </ul>          
        </p>
    </div>
  </div>
  <hr>
  <div class="level-item has-text-centered ">
    <div>
      <p class="heading">APT MAYO</p>
      <p class="title">123</p>
    </div>
  </div> 
</nav>
<hr> <!-- Table of May-->
<div class="columns is-desktop " >
    <div class="">
      <table class="table1 is-one-fifth ">
        <thead>           
            <th></th>
            <th>fecha</th> 
            <th>catergoria</th>          
        </thead >
             <tr v-for="(mensaje, index) in filtroCategory"
             v-bind:key="mensaje['.key']">                
                <td> {{ index  }}</td>
                <td> {{ mensaje.fecha }} </td>
                <td> {{ mensaje.category }} </td>                           
            </tr>
      </table>   
    </div>
  </div>      
  </div>
</template>
<script>
import { aptRef } from "./firebase";
var fechon =  document.getElementById ('demo');

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
      fechita: "",
      fechaDiaMesAno: "",
      aptMes: "2",
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
      fechas: this.fechas;
      fechas = "vamos";      
      }
    },       

    computed: {
      aptMayo (){ 
        return this.cP_a = "6"
      },
      aptAbril (){           
        return this.cP_b = "6"
      }, 
      /*Filter apt with .id and includes. Test only is 
      the new value that we used for traverse the array */
      filtroId (){
      return this.apt.filter((test) => test.id.includes("3"));
      }, 
      /*Filter apt with letters insite of field category with includes*/
      filtroCategoria (){
      return this.apt.filter((juego) => juego.category.includes("o y"));
      },  
      filtroMay (){
      
      var fechaAPT = new Date(fechaActual);
      return this.apt.filter((juego) => 
      (date = juego.fecha) = this.mayo);
      },

      filtroJune (){
        var date;
      return this.apt.filter((juego) => (date = juego.fecha) = this.mayo);
      },
      
      /*Recorre en array el apt desde la instancia de Firebase y
      va modificando los datos*/
      filtroCategory (){      
      
      var today = new Date();
      var h = today.getHours();
      var min = today.getMinutes();
      var s = today.getSeconds();
      
      var m = today.getMonth()+1;
      var d = today.getUTCDate();
      var a = today.getUTCFullYear();

      this.fechaDiaMesAno = a+"-"+m+"-"+d;     

    /*Test with create new array type apt but we modify*
    and we use av-for for take new values of array*/
      
      /*If it is the current month*/
      var m = "6";
      var fechaAPTactual = "5";      
      if ( m = fechaAPTactual) {
          return this.apt.filter((juego) => ( 
          juego.id = m,
          juego.fecha = m     
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
