<template>

   <div id="app" >

<div class="grid-container3">
    <div >
      <ul>
        <li v-for="personName of apt"
        v-bind:key="personName['.key']">        
          <p class="grid-item3">
          <button @click="removeName(personName['.key'])">
        X  </button>
          {{personName.id}}
          {{personName.fecha}}
          {{personName.accion}}
          {{personName.typeAPT}}
           </p>                 
        </li>
      </ul>
    </div>
    </div> 

    <div class="grid-container4">
    <div >
      <ul>
        <li v-for="personName of apt"
        v-bind:key="personName['.key']">        
          <p class="grid-item3">
          <button @click="removeName(personName['.key'])">
        X  </button>
          {{personName.id}}
          {{personName.fecha}}
          {{personName.accion}}
          {{personName.typeAPT}}
           </p>                 
        </li>
      </ul>
    </div>
    </div> 


<div class="grid-container">
  <div class="grid-item">
       <div class="formulario1">
      <form >            
            <div class="form_group">                  
                    <button @click="submitName()">ID</button> 
                    <input v-model="id" type="text" class="id"/>
                </div>   
                </form>                
    </div>       
  </div>
  <div class="grid-item">
<div class="formulario2">
      <form >        
              <div class="form_group">                 
                    <button @click="submitName()">SUPE</button>
                    <input type="text" class="form-control" v-model="supervisor" />
                </div>      
                </form>               
    </div> 

  </div>
  <div class="grid-item">
<div class="formulario3">
      <form >   
            <div class="form_group">
                <button @click="submitName()">Fecha</button>  
                <input v-model="fecha" type="text" class="id"/>
                </div>
                </form>                
    </div> 

  </div>
  <div class="grid-item">
<div class="formulario4">
      <form >             
            <div class="form_group">                
                     <button @click="submitName()">Descripción</button>   
                    <input v-model="descripcion" type="text" class="id"/>
                </div>
                </form>                
    </div> 

  </div>
  <div class="grid-item">
      <div class="formulario5">
      <form >              
            <div class="form_group">                
                    <button @click="submitName()">Acción</button> 
                    <input v-model="accion" type="text" class="id"/>
                </div>     
                </form>               
    </div> 


  </div>
  <div class="grid-item">
<div class="formulario6">
      <form >                   
            <div class="form_group">
                    <button @click="submitName()">Tipo</button> 
                    <input v-model="typeAPT" type="text" class="id"/>
                </div>     
                </form>               
    </div> 
  </div>
  <div class="grid-item">

<div class="formulario7">
      <form >                    
            <div class="form_group">
                    <button @click="submitName()">Categoría</button>
                    <input v-model="category" type="text" class="id"/>
                </div>     
                </form>               
    </div> 

  </div>
  <div class="grid-item">
      <div class="formulario8">
      <form >                    
            <div class="form_group">
                    <button @click="submitName()">Foto</button>
                    <input v-model="photo" type="text" class="id"/>
                </div>    
                </form>               
    </div> 

  </div>
  <div class="grid-item">
 <div class="formulario10">
      <form >                  
            <div class="form_group">
                    <button @click="submitName()">Aprendizaje</button> 
                    <input v-model="aprendizaje" type="text" class="id"/>
                </div>    
                </form>               
    </div>   

  </div>

  <div class="grid-item">
      <div class="formulario10">
        <form >   
            <div class="form_group">
                    <button @click="submitName()">10</button>
                    <input type="text" class="form-control" v-model="causes" />
                </div>      
                </form>               
    </div>  

  </div>
</div>  
<!--  consult table for "Id" data -->   
 <div class="grid-container2">
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
    </div>
    </div> 

    <!--  consult table for "Id" data -->   
 
  </div>
</template>
<script>
import { aptRef } from "./firebase";

export default {
  data() {
    return {
      id: '254',
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
    }
  }
};
</script lan>
<style>
.grid-container {
  position: relative;
    bottom: 0;
    left: 10px;
    width: 300px;
    border: 3px solid #73AD21;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.096);
  border: 1px solid rgba(246, 255, 238, 0.8);
  padding: 1px;
  font-size: 30px;
  text-align: center;
}

.grid-container2 {
   position: relative;
    bottom: 0;
    left: 10px;
   
    border: 3px solid #73AD21;
    width: 30rem;
    height: 8rem;
}
.grid-item2 {
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(44, 117, 34);
  text-align: center;
  grid-row-end: auto;
}
.grid-container3 {
   
    position: sticky;
    top: 0;
    background-color: rgb(133, 194, 133);
    border: 2px solid #4CAF50;
    width: 10em;
}
.grid-container4 {
   
    position: sticky;
    left: 11em;
    top: 0;
    background-color: rgb(194, 185, 133);
    border: 2px solid #4CAF50;
    width: 10em;
}


</style>
