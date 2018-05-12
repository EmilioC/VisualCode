<template>
   <div id="app">
    <div>
      <form>            
    <h5> Formulario </h5>          
                <div class="form_group">
                    <label for="id">ID</label>
                    <input v-model="id" type="text" class="form-control" required autofocus="autofocus"/>
                </div>
                <div class="form_group">
                    <label for="idsupervisor">SUPERVISOR</label>
                    <input type="text" class="form-control" v-model="supervisor" required />
                </div>        
                <div class="form_group">
                    <label for="fecha">FECHA</label>
                    <input type="date" class="form-control" v-model="fecha" required />
                </div>
                <div class="form_group">
                    <label for="descriptionAPT">DESCRIPCIÓN</label>
                    <textarea v-model="descripcion" rows="1" cols="40" required maxlength="40">
                        Escribe aquí tus comentarios</textarea>
                </div>
                <div class="form_group">
                    <label for="actionAPT">ACCIÓN TOMADA</label>
                    <textarea v-model="accion" rows="1" cols="40" required maxlength="40" value="Verbo"> </textarea>
                </div>

                <input type="date" v-model="mydate" />
                <div class="form_group">
                    <label for="typeAPT">TIPO APT</label>
                    <select name="transporte" size="2">
                        <option selected>COMPORTAMIENTO</option>
                        <option>CONDICIÓN</option>
                        <option>REFUERZO</option>
                    </select>
                </div>
                <div class="form_group">                    
                    <select name="categoria" size="2">
                    <option value="Salpicadura/Espray" selected>Salpicadura/Espray </option>
                    <option value="Ser golpeado por algo" >checked>Ser golpeado por algo</option>
                    <option value="Peligro de quemadura">Peligro de quemadura  </option>
                    <option value="Exposición a producto químico">Exposición a producto químico</option>
                    <option>Peligro en la conducción</option> 
                    <option>Peligro Electrico</option>
                    <option>Medio Ambiente</option>
                    <option>Equipos/Herramientas - Condición</option> 
                    <option>Equipos/Herramientas - Utilización</option> 
                    <option>Caída desde altura/Elevación</option>
                    <option>Peligro de Incendio/Fuego</option>
                    <option>Orden y Limpieza</option>
                    <option>Etiquetas/Señalización</option>    
                    <option>Equipos/Herramientas - Utilización</option>
                    <option>Caída desde altura/Elevación</option>
                    <option>Peligro de Incendio/Fuego</option>
                    <option>Orden y Limpieza</option>
                    <option>Etiquetas/Señalización</option>
                    <option>Peligro de Corte/Laceración</option>
                    <option>Fuga/Derrame de Material</option>
                    <option>Nivel de Ruido</option>
                    <option>Sobreesfuerzo/Ergonomía</option>
                    <option>Atención a la tarea</option>
                    <option>Fatiga/Cansancio</option>
                    <option>EPIs - Ojos</option>
                    <option>EPIs - Manos</option>
                    <option>EPIs - Oídos</option>
                    <option>EPIs - Otros</option>        
                    <option>Atrapamientos </option>
                    <option>Mal uso productos</option>
                    <option>Security</option>
                    <option>Resbalar/Tropezar o Caer</option>
                    <option>Mirando por dónde pasa</option>
                    <option>Incumple otras normas/procedimentos</option>
                        
                    </select>
                    
                </div>
                <div class="form_group">
                    <label for="photoAPT">FOTO</label>
                    <input type="text" class="form-control" v-model="photo" />
                </div>           
      
                <button @click="submitName()">Add</button>   
                </form>
                <hr>
                    <div class="timeline">                  
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