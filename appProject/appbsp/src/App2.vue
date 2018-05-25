<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1"> 
    <section class="is-fullwidth columns is-gapless" > 
        <div class="columns is-mobile">
        <div class="column">      
            <button class="button is-link is-outlined is-half"><router-link to="/listarzona">Consulta</router-link></button> 
        </div>
        <div class="column">      
            <button class="button is-link is-outlined "><router-link to="/formularioapt">Formulario </router-link></button>
        </div>
        <div class="column">           
            <button class="button is-link is-outlined "> <router-link to="/timeline">Timeline</router-link> </button>
        </div>  
        </div> 
        <router-view></router-view>
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
  color: #2c3e50;
  margin-top: 1%;
  background-color: rgb(255, 255, 255);
  position: center;
}

</style>