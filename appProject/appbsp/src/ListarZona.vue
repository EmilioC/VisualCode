<template>
   <div id="app">
     <!--
     <p id="fecha" v-for="mensaje of apt"
        v-bind:key="mensaje['.key']">hola
       <button @click="infoFecha(mensaje['.key'])">
          Remove</button>
          {{ mensaje.fecha }}
     </p> -->
<nav class="level is-mobile">
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Pendientes</p>
      <p class="title">3,456</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Realizados</p>
      <p class="title">123</p>
    </div>
  </div>
  <div class="level-item is-selected">
    <div>
      <p class="heading">Resto</p>
      <p class="title">456K</p>
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
      causes: "Reducción probabilidad de accidente"
    };
  },

  firebase: {
    apt: aptRef
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
    infoFecha (key){
      var fecha = new Date(aptRef.child(key).fecha().getFullYear(), 
      aptRef.child(key).fecha().getMonth(), 
      aptRef.child(key).fecha().getDate()); 
      document.getElementById("fecha").innerHTML= fecha;
      
      const now = new Date();  
         //var todayAtMidn= aptRef.child(key).fecha();
        var todayAtMidn = new Date(now.getFullYear(), now.getMonth(), now.getDate());  

        // Set start/end dates to a specified date (ISO format).  
        var startDate = new Date("2018-01-01T00:00:01Z");  
        var endDate = new Date("2018-06-01T00:00:01Z");  

        // Compare the two dates by comparing the millisecond  
        // representations.  
        if (todayAtMidn.getTime() > startDate.getTime() &&   
            todayAtMidn.getTime() < endDate.getTime()) {  
            document.write("Specified date is within this range."); 
            document.getElementById("fecha").innerHTML= "Dentro fecha";  
        }  
        else {  
            document.write("Specified date is not in this range.");
            document.getElementById("fecha").innerHTML= "fuera fecha";  
            }
      }
    
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
