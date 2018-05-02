<template>
  <div id="app">
<section>
        <router-link to="/listafuera">Lista tabla NAME</router-link>
        <router-link to="/formulario">Formulario NAME</router-link>
        <router-link to="/listarzona">Lista tabla APT</router-link>
        <router-link to="/formularioapt">Formulario APT</router-link>
        <router-link to="/resumen1">Resumen 1</router-link>
        <router-link to="/boton1"> Boton 1</router-link>
        <router-link to="/boton2"> Boton 2</router-link>
        <hr>
        <router-view></router-view>
    </section>

    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
