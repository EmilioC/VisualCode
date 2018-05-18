<template>
  <div id="app">
    <img src="./assets/logo.png">

<section>
        <router-link to="/formularioapt">Formulario </router-link>
        <router-link to="/listarzona">- Consulta</router-link>
        <router-link to="/timeline">- Timeline</router-link>
      <router-link to="/formularioapt">Formulario APT</router-link>
        <router-link to="/resumen1">Resumen 1</router-link>
        <router-link to="/boton1"> Boton 1</router-link>         
        <router-link to="/boton2"> Boton 2</router-link>
        <router-link to="/codeveloper"> codeveloper</router-link> 
                    
        <router-link to="/listafuera">Lista tabla NAME</router-link>
        <router-link to="/formulario">Formulario NAME</router-link>
        
        <router-view></router-view>
    </section>
    <ul>
      <li><a href="https://www.danielprimo.io/podcast" target="_blank">WR</a></li>
       <li><a href="https://github.com/EmilioC/VisualCode/tree/master/appProject/appbsp" target="_blank">Git</a></li>
      
    </ul>
    
  </div>
</template>

<script>


export default {
  
}
</script>

<style>


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
