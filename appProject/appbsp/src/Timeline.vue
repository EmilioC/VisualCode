<template>
   <div id="app">    
       <div><table class="table1">
       <td v-for="mensaje of apt"
        v-bind:key="mensaje['.key']" >  
        
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="e.g Alex Smith">
          </div>
        </div>  
        <hr>             
               <div class="timeline is-rtl">
              <header class="timeline-header">
                <span class="tag is-medium is-primary">
                  {{ mensaje.fecha }}
                </span>
              </header>
              <div class="timeline-item is-primary">
                <div class="timeline-marker is-primary"></div>
                <div class="timeline-content">
                  <p class="heading">{{ mensaje.typeAPT }}</p>
                </div>
              </div>
               <div class="timeline-item is-primary">
                <div class="timeline-marker is-primary"></div>
                <div class="timeline-content">
                  <p class="heading">{{ mensaje.category }}</p>
                </div>
              </div>
               <div class="timeline-item is-primary">
                <div class="timeline-marker is-primary"></div>
                <div class="timeline-content">
                  <p class="heading">{{ mensaje.descripcion }}</p>
                </div>
              </div>
              <div class="timeline-item is-primary">
                <div class="timeline-marker is-primary"></div>
                <div class="timeline-content">
                  <p class="heading">{{ mensaje.accion }}</p>
                </div>
                
              </div>
             
              <header class="timeline-header">
                <span class="tag is-medium is-primary">End</span>
              </header>
            </div>
        </td>                 
      </table> </div>    
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
@import "/node_modules/bulma-extensions/bulma-timeline/dist/bulma-timeline.min.css";
@import "/node_modules/bulma/css/bulma.min.css";
</style>