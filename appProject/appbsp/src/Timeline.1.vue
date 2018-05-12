<template>

   <div id="app">   

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
             <tr v-for="mensaje of apt"
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
    </table>       <hr>

<!-- TEST FOR CREATE A TIMELINE WITH DIRECTIVE V-FOR-->
    <table class="table1">
        <tr v-for="mensaje of apt"
        v-bind:key="mensaje['.key']" >
                <td> {{ mensaje.fecha }}
                  <header class="timeline-header">
                    <span class="tag is-medium is-primary">{{ mensaje.fecha }}</span>
                  </header> </td>
                <td> {{ mensaje.id }} </td>
                <div class="timeline is-centered">                  
                  <header class="timeline-header">
                    <span class="tag is-medium is-primary">Start</span>
                  </header>
                  <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                      <p class="heading">January 2016</p>
                      <p>Timeline content - Can include any HTML element</p>
                    </div>
                  </div>
                  <div class="timeline-item">
                    <div class="timeline-marker is-image is-32x32">
                      <img src="http://bulma.io/images/placeholders/32x32.png">
                    </div>
                    <div class="timeline-content">
                      <p class="heading">February 2016</p>
                      <p>Timeline content - Can include any HTML element</p>
                    </div>
                  </div>
                  <header class="timeline-header">
                    <span class="tag is-primary">2017</span>
                  </header>
                  <header class="timeline-header">
                    <span class="tag is-primary">2017</span>
                  </header>
                  <header class="timeline-header">
                    <span class="tag is-primary">2017</span>
                  </header>
                  <header class="timeline-header">
                    <span class="tag is-primary">
                      <button>botón</button>
                    </span>
                  </header>
                  <div class="timeline-item">
                    <div class="timeline-marker is-icon">
                      <i class="fa fa-flag"></i>
                    </div>
                    <div class="timeline-content">
                      <p class="heading">March 2017</p>
                      <p>Timeline content - Can include any HTML element</p>
                    </div>
                  </div>
                  <div class="timeline-header">
                    <span class="tag is-medium is-primary">End</span>
                  </div>
          </div>
            </tr>
    </table> 
    <!--  START THE TIME LINE-->
                <hr>
                    <div class="timeline is-centered">                  
                  <header class="timeline-header">
                    <span class="tag is-medium is-primary">Start</span>
                  </header>
                  <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                      <p class="heading">January 2016</p>
                      <p>Timeline content - Can include any HTML element</p>
                    </div>
                  </div>
                  <div class="timeline-item">
                    <div class="timeline-marker is-image is-32x32">
                      <img src="http://bulma.io/images/placeholders/32x32.png">
                    </div>
                    <div class="timeline-content">
                      <p class="heading">February 2016</p>
                      <p>Timeline content - Can include any HTML element</p>
                    </div>
                  </div>
                  <header class="timeline-header">
                    <span class="tag is-primary">2017</span>
                  </header>
                  <header class="timeline-header">
                    <span class="tag is-primary">2017</span>
                  </header>
                  <header class="timeline-header">
                    <span class="tag is-primary">2017</span>
                  </header>
                  <header class="timeline-header">
                    <span class="tag is-primary">
                      <button>botón</button>
                    </span>
                  </header>
                  <div class="timeline-item">
                    <div class="timeline-marker is-icon">
                      <i class="fa fa-flag"></i>
                    </div>
                    <div class="timeline-content">
                      <p class="heading">March 2017</p>
                      <p>Timeline content - Can include any HTML element</p>
                    </div>
                  </div>
                  <div class="timeline-header">
                    <span class="tag is-medium is-primary">End</span>
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
      supervisor: null,
      fecha: null,
      descripcion: null,
      accion: null,
      typeAPT: null,
      category: null,
      photo: null
    };
    mydate: "2017-07-04";
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
        photo: this.photo
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
    }
  }
};
</script>
<style lang="css">
    @import '/node_modules/bulma-extensions/bulma-timeline/dist/bulma-timeline.min.css';
    @import '/node_modules/bulma/css/bulma.min.css';
</style>