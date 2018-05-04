<template>
   <div id="app" >
<div class="grid-container">
  <div class="grid-item">
       <div class="formulario1">
      <form >            
            <div class="form_group">                  
                    <button @click="submitName()">ID</button> 
                    <input v-model="id" type="text" class="id"/>
                </div>
            <!-- <div class="form_group">
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
                </div> -->      
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
        <!--     <div class="form_group">
                    <input v-model="id" type="text" class="id"/>
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
                </div> -->      
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
            <!-- <div class="form_group">
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
                </div> -->
      
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
            <!-- <div class="form_group">
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
                </div> -->
      
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
            <!-- <div class="form_group">
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
                </div> -->      
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
            <!-- <div class="form_group">
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
                </div> -->      
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
            <!-- <div class="form_group">
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
                </div> -->      
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
            <!-- <div class="form_group">
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
                </div> -->      
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
            <!-- <div class="form_group">
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
                </div> -->      
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
                    
         <!--    <div class="form_group">
                    <input v-model="id" type="text" class="id"/>
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
                    <input type="text" class="form-control" v-model="causes" />
                </div>   -->    
                </form>               
    </div>  

  </div>
</div>  
<!--  consult table for "Id" data -->   
 <div class="grid-container1">
  <div class="grid-item1">   
    <div class="tabla1">  
    <table class="tablabtn1">        
        <!--  <thead>
            <th>
                <div class="form_group">
                    <label for="id">ID</label>
                    <input v-model="id" type="text" class="inputlearningAPT"/>
                </div>
            </th>
            <th>
                <div class="form_group">
                    <label for="aprendizaje">FECHA</label>
                    <input v-model="fecha" type="text" class="inputlearningAPT"/>
                </div>
            </th>
            <th>
                <div class="form_group">
                    <label for="fecha">LEARN</label>
                    <input v-model="aprendizaje" type="text" class="inputlearningAPT"/>
                </div>
            </th>            
                <th>
                <button @click="submitName()">Add</button> 
                </th>             
           
          <th>Aprendizaje</th>
            <th>ID</th>
            <th>Remove</th>
            <th>ADD</th>
            <th>Descripcion</th>
            <th>Accion</th>
            <th>Tipo APT</th>
            <th>Categoría</th>
            <th>Foto</th>
            <th>Causa</th>            
        </thead >--> 
             <tr v-for="mensaje of apt"
        v-bind:key="mensaje['.key']" >
                <td> {{ mensaje.id }} </td>
        <!--   <td> {{ mensaje.fecha }} </td>
                <td> {{ mensaje.aprendizaje }} </td>
                <td> {{ mensaje.descripcion }} </td>
                <td> {{ mensaje.accion }} </td>
                <td> {{ mensaje.typeAPT }} </td>
                <td> {{ mensaje.category }} </td>
                <td> {{ mensaje.photo }} </td>
                <td> {{ mensaje.aprendizaje }} </td>
                <td> {{ mensaje.causes }} </td>                
                  --> 
                <td> <button @click="removeName(mensaje['.key'])">
          Remove</button></td>          
            </tr>
    </table>   
</div> 
</div> 
<!--  consult table for "Fecha" data -->
 <div class="grid-item1">   
    <div class="tabla1">  
    <table class="tablabtn1">        
        <!--  <thead>
            <th>
                <div class="form_group">
                    <label for="id">ID</label>
                    <input v-model="id" type="text" class="inputlearningAPT"/>
                </div>
            </th>
            <th>
                <div class="form_group">
                    <label for="aprendizaje">FECHA</label>
                    <input v-model="fecha" type="text" class="inputlearningAPT"/>
                </div>
            </th>
            <th>
                <div class="form_group">
                    <label for="fecha">LEARN</label>
                    <input v-model="aprendizaje" type="text" class="inputlearningAPT"/>
                </div>
            </th>            
                <th>
                <button @click="submitName()">Add</button> 
                </th>             
           
          <th>Aprendizaje</th>
            <th>ID</th>
            <th>Remove</th>
            <th>ADD</th>
            <th>Descripcion</th>
            <th>Accion</th>
            <th>Tipo APT</th>
            <th>Categoría</th>
            <th>Foto</th>
            <th>Causa</th>            
        </thead >--> 
             <tr v-for="mensaje of apt"
        v-bind:key="mensaje['.key']" >
          <td> <button @click="removeName(mensaje['.key'])">
          Fecha</button></td>
        <td> {{ mensaje.fecha }} </td>                
                
      <!--      <td> {{ mensaje.id }} </td>
                <td> {{ mensaje.fecha }} </td>
                <td> {{ mensaje.aprendizaje }} </td>
                <td> {{ mensaje.descripcion }} </td>
                <td> {{ mensaje.accion }} </td>
                <td> {{ mensaje.typeAPT }} </td>
                <td> {{ mensaje.category }} </td>
                <td> {{ mensaje.photo }} </td>
                <td> {{ mensaje.aprendizaje }} </td>
                <td> {{ mensaje.causes }} </td>                
                  -->                         
            </tr>
    </table>   
    </div> 
</div> 

<!--  consult table for learning data -->
 <div class="grid-item1">   
    <div class="tabla1">  
    <table class="tablabtn1">        
        <!--  <thead>
            <th>
                <div class="form_group">
                    <label for="id">ID</label>
                    <input v-model="id" type="text" class="inputlearningAPT"/>
                </div>
            </th>
            <th>
                <div class="form_group">
                    <label for="aprendizaje">FECHA</label>
                    <input v-model="fecha" type="text" class="inputlearningAPT"/>
                </div>
            </th>
            <th>
                <div class="form_group">
                    <label for="fecha">LEARN</label>
                    <input v-model="aprendizaje" type="text" class="inputlearningAPT"/>
                </div>
            </th>            
                <th>
                <button @click="submitName()">Add</button> 
                </th>             
           
          <th>Aprendizaje</th>
            <th>ID</th>
            <th>Remove</th>
            <th>ADD</th>
            <th>Descripcion</th>
            <th>Accion</th>
            <th>Tipo APT</th>
            <th>Categoría</th>
            <th>Foto</th>
            <th>Causa</th>            
        </thead >--> 
             <tr v-for="mensaje of apt"
        v-bind:key="mensaje['.key']" >
          <td> <button @click="removeName(mensaje['.key'])">
          learning</button></td>
        <td> {{ mensaje.aprendizaje }} </td>             
                
      <!--      <td> {{ mensaje.id }} </td>
                <td> {{ mensaje.fecha }} </td>
                <td> {{ mensaje.aprendizaje }} </td>
                <td> {{ mensaje.descripcion }} </td>
                <td> {{ mensaje.accion }} </td>
                <td> {{ mensaje.typeAPT }} </td>
                <td> {{ mensaje.category }} </td>
                <td> {{ mensaje.photo }} </td>
                <td> {{ mensaje.aprendizaje }} </td>
                <td> {{ mensaje.causes }} </td>                
                  -->                         
            </tr>
    </table>   
    </div> 
</div> 
<!--  consult table for descripcion data -->
 <div class="grid-item1">   
    <div class="tabla1">  
    <table class="tablabtn1">        
        <!--  <thead>
            <th>
                <div class="form_group">
                    <label for="id">ID</label>
                    <input v-model="id" type="text" class="inputlearningAPT"/>
                </div>
            </th>
            <th>
                <div class="form_group">
                    <label for="aprendizaje">FECHA</label>
                    <input v-model="fecha" type="text" class="inputlearningAPT"/>
                </div>
            </th>
            <th>
                <div class="form_group">
                    <label for="fecha">LEARN</label>
                    <input v-model="aprendizaje" type="text" class="inputlearningAPT"/>
                </div>
            </th>            
                <th>
                <button @click="submitName()">Add</button> 
                </th>             
           
          <th>Aprendizaje</th>
            <th>ID</th>
            <th>Remove</th>
            <th>ADD</th>
            <th>Descripcion</th>
            <th>Accion</th>
            <th>Tipo APT</th>
            <th>Categoría</th>
            <th>Foto</th>
            <th>Causa</th>            
        </thead >--> 
             <tr v-for="mensaje of apt"
        v-bind:key="mensaje['.key']" >
          <td> <button @click="removeName(mensaje['.key'])">
          Descripcion</button></td>
        <td> {{ mensaje.descripcion }} </td>             
                
      <!--      <td> {{ mensaje.id }} </td>
                <td> {{ mensaje.fecha }} </td>
                <td> {{ mensaje.aprendizaje }} </td>
                <td> {{ mensaje.descripcion }} </td>
                <td> {{ mensaje.accion }} </td>
                <td> {{ mensaje.typeAPT }} </td>
                <td> {{ mensaje.category }} </td>
                <td> {{ mensaje.photo }} </td>
                <td> {{ mensaje.aprendizaje }} </td>
                <td> {{ mensaje.causes }} </td>                
                  -->                         
            </tr>
    </table>   
    </div> 
</div> 

<!--  consult table for accion data -->
 <div class="grid-item1">   
    <div class="tabla1">  
    <table class="tablabtn1">        
        <!--  <thead>
            <th>
                <div class="form_group">
                    <label for="id">ID</label>
                    <input v-model="id" type="text" class="inputlearningAPT"/>
                </div>
            </th>
            <th>
                <div class="form_group">
                    <label for="aprendizaje">FECHA</label>
                    <input v-model="fecha" type="text" class="inputlearningAPT"/>
                </div>
            </th>
            <th>
                <div class="form_group">
                    <label for="fecha">LEARN</label>
                    <input v-model="aprendizaje" type="text" class="inputlearningAPT"/>
                </div>
            </th>            
                <th>
                <button @click="submitName()">Add</button> 
                </th>             
           
          <th>Aprendizaje</th>
            <th>ID</th>
            <th>Remove</th>
            <th>ADD</th>
            <th>Descripcion</th>
            <th>Accion</th>
            <th>Tipo APT</th>
            <th>Categoría</th>
            <th>Foto</th>
            <th>Causa</th>            
        </thead >--> 
             <tr v-for="mensaje of apt"
        v-bind:key="mensaje['.key']" >
          <td> <button @click="removeName(mensaje['.key'])">
          Acción</button></td>
        <td> {{ mensaje.accion }} </td>             
                
      <!--      <td> {{ mensaje.id }} </td>
                <td> {{ mensaje.fecha }} </td>
                <td> {{ mensaje.aprendizaje }} </td>
                <td> {{ mensaje.descripcion }} </td>
                <td> {{ mensaje.accion }} </td>
                <td> {{ mensaje.typeAPT }} </td>
                <td> {{ mensaje.category }} </td>
                <td> {{ mensaje.photo }} </td>
                <td> {{ mensaje.aprendizaje }} </td>
                <td> {{ mensaje.causes }} </td>                
                  -->                         
            </tr>
    </table>   
    </div> 
</div> 

<!--  consult table for typeAPT data -->
 <div class="grid-item1">   
    <div class="tabla1">  
    <table class="tablabtn1">        
        <!--  <thead>
            <th>
                <div class="form_group">
                    <label for="id">ID</label>
                    <input v-model="id" type="text" class="inputlearningAPT"/>
                </div>
            </th>
            <th>
                <div class="form_group">
                    <label for="aprendizaje">FECHA</label>
                    <input v-model="fecha" type="text" class="inputlearningAPT"/>
                </div>
            </th>
            <th>
                <div class="form_group">
                    <label for="fecha">LEARN</label>
                    <input v-model="aprendizaje" type="text" class="inputlearningAPT"/>
                </div>
            </th>            
                <th>
                <button @click="submitName()">Add</button> 
                </th>             
           
          <th>Aprendizaje</th>
            <th>ID</th>
            <th>Remove</th>
            <th>ADD</th>
            <th>Descripcion</th>
            <th>Accion</th>
            <th>Tipo APT</th>
            <th>Categoría</th>
            <th>Foto</th>
            <th>Causa</th>            
        </thead >--> 
             <tr v-for="mensaje of apt"
        v-bind:key="mensaje['.key']" >
          <td> <button @click="removeName(mensaje['.key'])">
          typeAPT</button></td>
        <td> {{ mensaje.typeAPT }} </td>             
                
      <!--      <td> {{ mensaje.id }} </td>
                <td> {{ mensaje.fecha }} </td>
                <td> {{ mensaje.aprendizaje }} </td>
                <td> {{ mensaje.descripcion }} </td>
                <td> {{ mensaje.accion }} </td>
                <td> {{ mensaje.typeAPT }} </td>
                <td> {{ mensaje.category }} </td>
                <td> {{ mensaje.photo }} </td>
                <td> {{ mensaje.aprendizaje }} </td>
                <td> {{ mensaje.causes }} </td>                
                  -->                         
            </tr>
    </table>   
    </div> 
</div> 


<!--  consult table for category data -->
 <div class="grid-item1">   
    <div class="tabla1">  
    <table class="tablabtn1">        
        <!--  <thead>
            <th>
                <div class="form_group">
                    <label for="id">ID</label>
                    <input v-model="id" type="text" class="inputlearningAPT"/>
                </div>
            </th>
            <th>
                <div class="form_group">
                    <label for="aprendizaje">FECHA</label>
                    <input v-model="fecha" type="text" class="inputlearningAPT"/>
                </div>
            </th>
            <th>
                <div class="form_group">
                    <label for="fecha">LEARN</label>
                    <input v-model="aprendizaje" type="text" class="inputlearningAPT"/>
                </div>
            </th>            
                <th>
                <button @click="submitName()">Add</button> 
                </th>             
           
          <th>Aprendizaje</th>
            <th>ID</th>
            <th>Remove</th>
            <th>ADD</th>
            <th>Descripcion</th>
            <th>Accion</th>
            <th>Tipo APT</th>
            <th>Categoría</th>
            <th>Foto</th>
            <th>Causa</th>            
        </thead >--> 
             <tr v-for="mensaje of apt"
        v-bind:key="mensaje['.key']" >
          <td> <button @click="removeName(mensaje['.key'])">
          category</button></td>
        <td> {{ mensaje.category }} </td>             
                
      <!--      <td> {{ mensaje.id }} </td>
                <td> {{ mensaje.fecha }} </td>
                <td> {{ mensaje.aprendizaje }} </td>
                <td> {{ mensaje.descripcion }} </td>
                <td> {{ mensaje.accion }} </td>
                <td> {{ mensaje.typeAPT }} </td>
                <td> {{ mensaje.category }} </td>
                <td> {{ mensaje.photo }} </td>
                <td> {{ mensaje.aprendizaje }} </td>
                <td> {{ mensaje.causes }} </td>                
                  -->                         
            </tr>
    </table>   
    </div> 
</div> 

<!--  consult table for photo data -->
 <div class="grid-item1">   
    <div class="tabla1">  
    <table class="tablabtn1">        
        <!--  <thead>
            <th>
                <div class="form_group">
                    <label for="id">ID</label>
                    <input v-model="id" type="text" class="inputlearningAPT"/>
                </div>
            </th>
            <th>
                <div class="form_group">
                    <label for="aprendizaje">FECHA</label>
                    <input v-model="fecha" type="text" class="inputlearningAPT"/>
                </div>
            </th>
            <th>
                <div class="form_group">
                    <label for="fecha">LEARN</label>
                    <input v-model="aprendizaje" type="text" class="inputlearningAPT"/>
                </div>
            </th>            
                <th>
                <button @click="submitName()">Add</button> 
                </th>             
           
          <th>Aprendizaje</th>
            <th>ID</th>
            <th>Remove</th>
            <th>ADD</th>
            <th>Descripcion</th>
            <th>Accion</th>
            <th>Tipo APT</th>
            <th>Categoría</th>
            <th>Foto</th>
            <th>Causa</th>            
        </thead >--> 
             <tr v-for="mensaje of apt"
        v-bind:key="mensaje['.key']" >
          <td> <button @click="removeName(mensaje['.key'])">
          photo</button></td>
        <td> {{ mensaje.photo }} </td>             
                
      <!--      <td> {{ mensaje.id }} </td>
                <td> {{ mensaje.fecha }} </td>
                <td> {{ mensaje.aprendizaje }} </td>
                <td> {{ mensaje.descripcion }} </td>
                <td> {{ mensaje.accion }} </td>
                <td> {{ mensaje.typeAPT }} </td>
                <td> {{ mensaje.category }} </td>
                <td> {{ mensaje.photo }} </td>
                <td> {{ mensaje.aprendizaje }} </td>
                <td> {{ mensaje.causes }} </td>                
                  -->                         
            </tr>
    </table>   
    </div> 
</div> 

<!--  consult table for aprendizaje data -->
 <div class="grid-item1">   
    <div class="tabla1">  
    <table class="tablabtn1">        
        <!--  <thead>
            <th>
                <div class="form_group">
                    <label for="id">ID</label>
                    <input v-model="id" type="text" class="inputlearningAPT"/>
                </div>
            </th>
            <th>
                <div class="form_group">
                    <label for="aprendizaje">FECHA</label>
                    <input v-model="fecha" type="text" class="inputlearningAPT"/>
                </div>
            </th>
            <th>
                <div class="form_group">
                    <label for="fecha">LEARN</label>
                    <input v-model="aprendizaje" type="text" class="inputlearningAPT"/>
                </div>
            </th>            
                <th>
                <button @click="submitName()">Add</button> 
                </th>             
           
          <th>Aprendizaje</th>
            <th>ID</th>
            <th>Remove</th>
            <th>ADD</th>
            <th>Descripcion</th>
            <th>Accion</th>
            <th>Tipo APT</th>
            <th>Categoría</th>
            <th>Foto</th>
            <th>Causa</th>            
        </thead >--> 
             <tr v-for="mensaje of apt"
        v-bind:key="mensaje['.key']" >
          <td> <button @click="removeName(mensaje['.key'])">
          aprendizaje</button></td>
        <td> {{ mensaje.aprendizaje }} </td>             
                
      <!--      <td> {{ mensaje.id }} </td>
                <td> {{ mensaje.fecha }} </td>
                <td> {{ mensaje.aprendizaje }} </td>
                <td> {{ mensaje.descripcion }} </td>
                <td> {{ mensaje.accion }} </td>
                <td> {{ mensaje.typeAPT }} </td>
                <td> {{ mensaje.category }} </td>
                <td> {{ mensaje.photo }} </td>
                <td> {{ mensaje.aprendizaje }} </td>
                <td> {{ mensaje.causes }} </td>                
                  -->                         
            </tr>
    </table>   
    </div> 
</div> 

<!--  consult table for causes data -->
 <div class="grid-item1">   
    <div class="tabla1">  
    <table class="tablabtn1">        
        <!--  <thead>
            <th>
                <div class="form_group">
                    <label for="id">ID</label>
                    <input v-model="id" type="text" class="inputlearningAPT"/>
                </div>
            </th>
            <th>
                <div class="form_group">
                    <label for="aprendizaje">FECHA</label>
                    <input v-model="fecha" type="text" class="inputlearningAPT"/>
                </div>
            </th>
            <th>
                <div class="form_group">
                    <label for="fecha">LEARN</label>
                    <input v-model="aprendizaje" type="text" class="inputlearningAPT"/>
                </div>
            </th>            
                <th>
                <button @click="submitName()">Add</button> 
                </th>             
           
          <th>Aprendizaje</th>
            <th>ID</th>
            <th>Remove</th>
            <th>ADD</th>
            <th>Descripcion</th>
            <th>Accion</th>
            <th>Tipo APT</th>
            <th>Categoría</th>
            <th>Foto</th>
            <th>Causa</th>            
        </thead >--> 
             <tr v-for="mensaje of apt"
        v-bind:key="mensaje['.key']" >
          <td> <button @click="removeName(mensaje['.key'])">
          causes</button></td>
        <td> {{ mensaje.causes }} </td>             
                
      <!--      <td> {{ mensaje.id }} </td>
                <td> {{ mensaje.fecha }} </td>
                <td> {{ mensaje.aprendizaje }} </td>
                <td> {{ mensaje.descripcion }} </td>
                <td> {{ mensaje.accion }} </td>
                <td> {{ mensaje.typeAPT }} </td>
                <td> {{ mensaje.category }} </td>
                <td> {{ mensaje.photo }} </td>
                <td> {{ mensaje.aprendizaje }} </td>
                <td> {{ mensaje.causes }} </td>                
                  -->                         
            </tr>
    </table>   
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
</script>
<style>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  background-color: rgb(255, 255, 255);
  padding: 10px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.096);
  border: 1px solid rgba(246, 255, 238, 0.8);
  padding: 1px;
  font-size: 30px;
  text-align: center;
}

.grid-container1 {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  background-color: rgb(255, 255, 255);
  padding: 10px;
}
.grid-item1 {
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(44, 117, 34);
  text-align: center;
  grid-row-end: auto;
}
</style>
