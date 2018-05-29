<template>
   <div id="app">
     <!--
     <p id="fecha" v-for="mensaje of apt"
        v-bind:key="mensaje['.key']">hola
       <button @click="infoFecha(mensaje['.key'])">
          Remove</button>
          {{ mensaje.fecha }}
     </p> -->

     <!-- Atribute is-mobile information: https://bulma.io/documentation/layout/level/ -->
<nav class="level is-mobile">
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">APT Realizados</p>
      <p class="title">3,456</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">APT MAYO</p>
      <p class="title">123</p>
    </div>
  </div>
  <div class="level-item is-selected has-text-centered">
    <div>
      <p class="heading">PENDIENTES</p>
      <p class="title">{{aptMayo}}</p>
    </div>
  </div>
  
</nav>
  <div class="columns is-mobile">
    <div class="column">
      <table class="table1 is-one-fifth">
        <thead>           
            <th>Fecha</th>
            <th>Categoría</th>           
        </thead >
             <tr v-for="mensaje of apt"
             v-bind:key="mensaje['.key']" >                
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
      minimo : "3", 
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
       
   }
};
</script>

<style lang="css">
    @import '/node_modules/bulma-extensions/bulma-timeline/dist/bulma-timeline.min.css';
    @import '/node_modules/bulma/css/bulma.min.css';

th, td {
    padding: 3%;
    border-bottom: 1px solid #ddd;  
    text-align: center;  
}
table {
    text-align: center;
    width: "100%";
    margin: 3%;
}


</style>
