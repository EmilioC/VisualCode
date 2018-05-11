<template>
   <div id="app">
    <div>
      <form>            
    <h4> FORMULARIO TABLA APT </h4>          
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
                    <option selected>Salpicadura/Espray </option>
                    <option>checked>Ser golpeado por algo</option>
                    <option>Peligro de quemadura  </option>
                    <option>Exposición a producto químico</option>
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

                    <!--
                    <label for="category">CATEGORÍA APT</label>
                    <input type="text" class="form-control" v-model="category" required />
                    <input type="radio" name="transporte" value="1">Salpicadura/Espray 
                    <input type="radio" name="transporte" value="2" checked>Ser golpeado por algo
                    <input type="radio" name="transporte" value="3">Peligro de quemadura  
                    <input type="radio" name="transporte" value="3">Exposición a producto químico
                    <input type="radio" name="transporte" value="3">Peligro en la conducción 
                    <input type="radio" name="transporte" value="3">Peligro Electrico
                    <input type="radio" name="transporte" value="3">Medio Ambiente
                    <input type="radio" name="transporte" value="3">Equipos/Herramientas - Condición 
                    <input type="radio" name="transporte" value="3">Equipos/Herramientas - Utilización 
                    <input type="radio" name="transporte" value="3">Caída desde altura/Elevación
                    <input type="radio" name="transporte" value="3">Peligro de Incendio/Fuego
                    <input type="radio" name="transporte" value="3">Orden y Limpieza
                    <input type="radio" name="transporte" value="3">Etiquetas/Señalización    
                    <input type="radio" name="transporte" value="3">Equipos/Herramientas - Utilización
                    <input type="radio" name="transporte" value="3">Caída desde altura/Elevación
                    <input type="radio" name="transporte" value="3"> Peligro de Incendio/Fuego
                    <input type="radio" name="transporte" value="3">Orden y Limpieza
                    <input type="radio" name="transporte" value="3">Etiquetas/Señalización
                    <input type="radio" name="transporte" value="3">Peligro de Corte/Laceración
                    <input type="radio" name="transporte" value="3">Fuga/Derrame de Material
                    <input type="radio" name="transporte" value="3">Nivel de Ruido
                    <input type="radio" name="transporte" value="3">Sobreesfuerzo/Ergonomía
                    <input type="radio" name="transporte" value="3">Atención a la tarea
                    <input type="radio" name="transporte" value="3">Fatiga/Cansancio
                    <input type="radio" name="transporte" value="3">EPIs - Ojos
                    <input type="radio" name="transporte" value="3">EPIs - Manos
                    <input type="radio" name="transporte" value="3">EPIs - Oídos
                    <input type="radio" name="transporte" value="3">EPIs - Otros                 
                    <input type="radio" name="transporte" value="3">Atrapamientos                 
                    <input type="radio" name="transporte" value="3">Mal uso productos
                    <input type="radio" name="transporte" value="3">Security
                    <input type="radio" name="transporte" value="3">Resbalar/Tropezar o Caer
                    <input type="radio" name="transporte" value="3">Mirando por dónde pasa
                    <input type="radio" name="transporte" value="3">Incumple otras normas/procedimentos -->

                </div>
                <div class="form_group">
                    <label for="photoAPT">FOTO</label>
                    <input type="text" class="form-control" v-model="photo" />
                </div>              
      
                <button @click="submitName()">Add</button>   
                </form>
                <hr>

                <div>
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
   
   
   <!-- <h1> LISTAR APT </h1>
    
    <div>
      <ul>
        <li v-for="personName of names"
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
      supervisor: null,
      fecha: null,
      descripcion: null,
      accion: null,
      typeAPT: null,
      category: null,
      photo: null,
    };  
    mydate: '2017-07-04'    
},

    firebase: {
    apt: aptRef,
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
<style>

</style>
