<template>
   <div id="app">

<p id="calculo">-</p>

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
          <td> <button @click="ordenar()">
          ordenar</button></td>

            </tr>
    </table>   
    <hr>

    <h1>RESUMEN 1 - Filter and ordering by date </h1>
     <table class="table1">
        <thead>
            <th>FECHA</th>
        </thead >
             <tr v-for="mensaje of apt"
        v-bind:key="mensaje['.key']" >
                <td> {{ mensaje.fecha }} </td>
                <td> <button @click="removeName(mensaje['.key'])">
          Remove</button></td>
            </tr>
    </table>   
    <hr>
  <!-- <div>
      <form>            
   <h1> DATOS: basedatos-ccc9b/apt</h1>               
                <div class="form_group">
                    <label for="id">ID</label>
                    <input v-model="id" type="text" class="form-control"/>
                </div>
                <div class="form_group">
                    <label for="idsupervisor">SUPERVISOR</label>
                    <input type="text" class="form-control" v-model="supervisor" />
                </div>        
                <div class="form_group">
                    <label for="fecha">FECHA</label>
                    <input type="text" class="form-control" v-model="fecha" />
                </div>
                <div class="form_group">
                    <label for="descriptionAPT">DESCRIPCIÓN</label>
                    <input type="text" class="form-control" v-model="descripcion" />
                </div>
                <div class="form_group">
                    <label for="actionAPT">ACCIÓN TOMADA</label>
                    <input type="text" class="form-control" v-model="accion" />
                </div>
                <div class="form_group">
                    <label for="typeAPT">TIPO APT</label>
                    <input type="text" class="form-control" v-model="typeAPT" />
                </div>
                <div class="form_group">
                    <label for="category">CATEGORÍA APT</label>
                    <input type="text" class="form-control" v-model="category" />
                </div>
                <div class="form_group">
                    <label for="photoAPT">FOTO</label>
                    <input type="text" class="form-control" v-model="photo" />
                </div>
                <div class="form_group">
                    <label for="learningAPT">APRENDIZAJE</label>
                    <input type="text" class="form-control" v-model="aprendizaje" />
                </div>
                <div class="form_group">
                    <label for="causes">EFECTO EN LA INSTALACIÓN</label>
                    <input type="text" class="form-control" v-model="causes" />
                </div>
      <button @click="submitName()">Add</button>
                </form>
                <hr>
    </div> -->

<h1>RESUMEN 1 (Firebase /apt ) </h1>
   <!-- Ojo¡¡ the instance of the firebase in this case is "apt"
   You can find the how create the new object in:
    firebase: {
    apt: aptRef
  },
  -->           
<table class="table1">
        <thead>
            <th>FECHA</th>
            <th>ID</th>
            <th>Aprendizaje</th>
            <th>Descripcion</th>
            <th>Accion</th>
            <th>Tipo APT</th>
            <th>Categoría</th>
            <th>Foto</th>
            <th>Causa</th>
        </thead >
             <tr v-for="mensaje of aptFecha"
        v-bind:key="mensaje['.key']" >
                <td> {{ mensaje.fecha }} </td>
                <td> {{ mensaje.id }} </td>
                <td> {{ mensaje.descripcion }} </td>
                <td> {{ mensaje.accion }} </td>
                <td> {{ mensaje.typeAPT }} </td>
                <td> {{ mensaje.category }} </td>
                <td> {{ mensaje.photo }} </td>
                <td> {{ mensaje.aprendizaje }} </td>
                <td> {{ mensaje.causes }} </td>
                <td> <button @click="removeName(mensaje['.key'])">
          Remove</button></td>
            </tr>
    </table>   
<!--
    <h1> LISTAR APT </h1>
    
    <div>
      <ul>
        <li v-for="personName of apt"
        v-bind:key="personName['.key']">        
          <p>
          <button @click="removeName(personName['.key'])">
          Remove</button>
          {{personName.id}}
          {{personName.supervisor}}
          {{personName.fecha}}
          {{personName.descripcion}}
          {{personName.accion}}
          {{personName.typeAPT}}
          {{personName.category}}
          {{personName.photo}}
          {{personName.aprendizaje}}
          {{personName.causes}}
           </p>                 
        </li>
      </ul>
    </div> -->  
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

  filters: {
    upper (value) {

      return value.toUpperCase()
    },
    number (value){
      return value = "1 hola que tal";
    },

    risa (value) {
     var d = new Date ();
     var hora = d.getHours;
    return value = hora;
    document.getElementById("hora").innerHTML= hora;

    }
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

     ordenar() { 
       apt.sort();
       document.getElementById("calculo").innerHTML = apt.fecha;

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
