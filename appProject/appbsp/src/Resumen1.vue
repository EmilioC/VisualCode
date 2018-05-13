<template>
   <div id="app">
     <td> <button @click="ordenar(key) ">
          ordenar</button></td>

<p id="demo">-</p>

<h1>RESUMEN 1 - Filter and ordering by date </h1>
     <table class="table3">
        <thead>
            <th>FECHA</th>
            <th>V</th>
        </thead >
             <tr v-for="mensaje of apt"
        v-bind:key="mensaje['.key']" >
                <td > {{ mensaje.fecha }} </td>
                <td> {{ mensaje.fecha | upper }} </td>
                <td>    <p id="dia"></p> </td>
                <td>    <p id="hora"></p> </td>
                <td>    <p id="minutos"></p> </td>
                <td>    <p id="año"></p> </td>
                <td>    <p id="calculo">-</p> </td>
                <td>    <p id="calculo">-</p> </td>
                <td> <button @click="removeName(mensaje['.key'])">
          Remove</button></td>
          <td> <button @click="darHora()">
          hora</button></td>
          

            </tr>
    </table>   
    <hr>
</div>
</template>
<script>
import { aptRef } from "./firebase";
      var cars = [
            {type:"Volvo", year:2016},
            {type:"Saab", year:2001},
            {type:"BMW", year:2010}];

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
      causes: "Reducción probabilidad de accidente",
    }    
  },

    firebase: {
      apt: aptRef
              },

  filters: {
    upper (value) {

      return value.toUpperCase()
    },
    number (value){
      return value = "1 hola que tal";
    },

    risa (value) {
     var d = new Date ();
     var hora = d.getDay;
    return value = hora;
    document.getElementById("hora").innerHTML= hora;

    }
  },

  methods: {

    myFunction() {
    cars.sort(function(a, b){return a.year - b.year});
    displayCars();
    },
    displayCars() {
    document.getElementById("demo").innerHTML =
    this.cars[0].type + " " + cars[0].year + "<br>" +
    this.cars[1].type + " " + cars[1].year + "<br>" +
   this.cars[2].type + " " + cars[2].year;
},

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
    orderByAptdate(key) {
      aptRef.child(key).update({ edit: false });      
    },
/* Test with date*/
     darHora(key) { 

    var d = new Date ();
     var hora = d.getHours;
    document.getElementById("hora").innerHTML= d.getMilliseconds();
    document.getElementById("dia").innerHTML= d.toDateString();
    document.getElementById("minutos").innerHTML= d.getMinutes();
    document.getElementById("año").innerHTML= d.getFullYear();
     },

     ordenar(key) { 
     },

    saveEditName(name) {
      const key = name[".key"];
      aptRef.child(key).set({
        name: person.name,
        edit: false
      });
    }
  }
};
</script>
<style>
table {
  border: 1px solid black;
  height: 1%;
  text-align: left;
  overflow-x: auto;
}

table.table3 {
  border: 10px solid rgba(16, 222, 226, 0.809);
  height: 1%;
  text-align: left;
  overflow-x: auto;
  
}
th,
td {
  padding: 2%px;
  text-align: left;
  border-bottom: 1px solid rgb(0, 5, 4);
}
tr:nth-child(even) {
  background-color: #dbeaeb;
}
div {
  overflow-x: auto;
}
</style>
