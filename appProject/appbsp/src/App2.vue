<template>
  <div id="app">
    <meta name="viewport" content="initial-scale=1"> 
    <section > 
        <nav class="level">
        <div class="columns is-flex-mobile has-text-centered">
        <div class="column ">      
            <button class="button is-link is-outlined is-large  "><router-link to="/listarzona">Consulta</router-link></button> 
        </div>
        <div class="column">      
            <button class="button is-link is-outlined is-large"><router-link to="/formularioapt">Formulario </router-link></button>
        </div>  
        </div> 
        
        <!--
        <router-link to="/resumen1">Resumen 1</router-link>
        <router-link to="/boton1"> Boton 1</router-link>         
        <router-link to="/boton2"> Boton 2</router-link>
        <router-link to="/codeveloper"> codeveloper</router-link>                     
        <router-link to="/listafuera">Lista tabla NAME</router-link>
        <router-link to="/formulario">Formulario NAME</router-link> -->
        <router-view></router-view>
        </nav>
    </section>
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
  margin-top: 2%;
}

</style>