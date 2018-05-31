<template>

   <div id="app  is-right">
   <div>        
      <form class="">
        <div class="field">
          <label class="label">ID</label>
          <div class="control">
            <input v-model="id" class="input" type="text" placeholder="ID">
          </div>
        </div> 
        <div class="field">
          <label class="label">SUPERVISOR</label>
          <div class="control">
            <input v-model="supervisor" class="input" type="text" placeholder="supervisor">
          </div>
        </div>        
        <div class="field">
          <label class="label">FECHA</label>
          <div class="control">
            <input v-model="fecha" class="date" type="date" placeholder="fecha">
          </div>
        </div>
        <div class="field">
          <label class="label">DESCRIPCIÓN</label>
          <div class="control">
            <input v-model="descripcion" class="input" type="text" placeholder="descripcion">
          </div>
        </div>
        <div class="field">
          <label class="label">ACCIÓN TOMADA</label>
          <div class="control">
            <input v-model="accion" class="input" type="text" placeholder="acción">
          </div>
        </div>
        <div class="control">
          <label class="label">TIPO</label>
            <div class="select">
                    <select v-model="typeAPT">
                        <option selected value="Comportamiento"> COMPORTAMIENTO</option>
                        <option value="Condicion">CONDICIÓN</option>
                        <option value="Refuerzo">REFUERZO</option>
                    </select>                    
                        </div>
                    </div>
        <div class="field">
        <label class="label">CATEGORÍA</label>
        <div class="control">
            <div class="select">
            <select v-model="category">
                <option value="Salpicadura/Espray" selected>Salpicadura/Espray </option>
                    <option value="Ser golpeado por algo" >checked>Ser golpeado por algo</option>
                    <option value="Peligro de quemadura">Peligro de quemadura  </option>
                    <option value="Exposición a producto químico">Exposición a producto químico</option>
                    <option value="Peligro en la conducción ">Peligro en la conducción</option> 
                    <option value="Peligro Electrico ">Peligro Electrico</option>
                    <option value="Medio Ambiente ">Medio Ambiente</option>
                    <option value="Equipos/Herramientas - Condición ">Equipos/Herramientas - Condición</option> 
                    <option value="Equipos/Herramientas - Utilización ">Equipos/Herramientas - Utilización</option> 
                    <option value="Caída desde altura/Elevación ">Caída desde altura/Elevación</option>
                    <option value="Peligro de Incendio/Fuego ">Peligro de Incendio/Fuego</option>
                    <option value="Orden y Limpieza ">Orden y Limpieza</option>
                    <option value="Etiquetas/Señalización ">Etiquetas/Señalización</option>    
                    <option value="Equipos/Herramientas - Utilización ">Equipos/Herramientas - Utilización</option>
                    <option value="Caída desde altura/Elevación ">Caída desde altura/Elevación</option>
                    <option value="Peligro de Incendio/Fuego ">Peligro de Incendio/Fuego</option>
                    <option value="Orden y Limpieza ">Orden y Limpieza</option>
                    <option value="Etiquetas/Señalización ">Etiquetas/Señalización</option>
                    <option value="Peligro de Corte/Laceración ">Peligro de Corte/Laceración</option>
                    <option value="Fuga/Derrame de Material ">Fuga/Derrame de Material</option>
                    <option value="Nivel de Ruido ">Nivel de Ruido</option>
                    <option value="Sobreesfuerzo/Ergonomía ">Sobreesfuerzo/Ergonomía</option>
                    <option value="Atención a la tarea ">Atención a la tarea</option>
                    <option value="Fatiga/Cansancio ">Fatiga/Cansancio</option>
                    <option value="EPIs - Ojos ">EPIs - Ojos</option>
                    <option value="EPIs - Manos ">EPIs - Manos</option>
                    <option value="EPIs - Oídos ">EPIs - Oídos</option>
                    <option value="EPIs - Otros ">EPIs - Otros</option>        
                    <option value="Atrapamientos ">Atrapamientos </option>
                    <option value="Mal uso productos ">Mal uso productos</option>
                    <option value="Security ">Security</option>
                    <option value="Resbalar/Tropezar o Caer ">Resbalar/Tropezar o Caer</option>
                    <option value="Mirando por dónde pasa ">Mirando por dónde pasa</option>
                    <option value="Incumple otras normas/procedimentos ">Incumple otras normas/procedimentos</option>                        
                    </select>                    
                    </div>
                </div>
                </div>
                    <div class="field is-grouped">
                    <div class="control">
                        <button @click="submitName()" class="button is-link">AÑADIR APT</button>  
                    </div>
                    </div> 
                </form>
                <hr>
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
      photo: null,
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