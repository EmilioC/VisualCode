<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1">      
    <section>
<div class="tabs is-toggle ">
  <ul class="is-expanded">
    <li class="is-active">
      <a>
        <span class="icon is-small"><i  aria-hidden="true"></i></span>
        <span><router-link to="/formularioapt">Formulario </router-link></span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"><i aria-hidden="true"></i></span>
        <span><router-link to="/listarzona">Consulta</router-link></span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"><i  aria-hidden="true"></i></span>
        <span><router-link to="/timeline">Timeline</router-link></span>
      </a>
    </li>
    </ul>
</div>

   <!--   
     <img src="./assets/logo.png"> 
     <nav class="navbar" role="navigation" aria-label="dropdown navigation">
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">   Opciones       
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item">            
           <router-link to="/timeline">Timeline</router-link>
          </a>
          <a class="navbar-item">
            <router-link to="/formularioapt">Formulario APT</router-link>
          </a>
          <a class="navbar-item">
            <router-link to="/listarzona">- Consulta</router-link>
          </a>
          <hr class="navbar-divider">
          <div class="navbar-item">
            Version 0.7.1
          </div>
        </div>
        </div>
      </nav> 
     
        <router-link to="/formularioapt">Formulario </router-link>
        <router-link to="/listarzona">- Consulta</router-link>
        <router-link to="/timeline">- Timeline</router-link>--> 
       <!--   <router-link to="/formularioapt">Formulario APT</router-link>
        <router-link to="/resumen1">Resumen 1</router-link>
        <router-link to="/boton1"> Boton 1</router-link>         
        <router-link to="/boton2"> Boton 2</router-link>
        <router-link to="/codeveloper"> codeveloper</router-link>                     
        <router-link to="/listafuera">Lista tabla NAME</router-link>
        <router-link to="/formulario">Formulario NAME</router-link>  -->     
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
<style lang="css">
    @import '/node_modules/bulma-extensions/bulma-timeline/dist/bulma-timeline.min.css';
    @import '/node_modules/bulma/css/bulma.min.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>