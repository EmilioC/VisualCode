<template>
    <section>
        <h1>Rutas con Vue Router</h1>
        <router-link to="/" active-class="activo" tag="li" exact>
            <a>Home</a>
        </router-link>
        <router-link to="/contacto" active-class="activo" tag="li" >
            <a>Contacto</a>
        </router-link>
        <router-link to="/formulario" active-class="activo" tag="li" >
            <a>Formulario</a>
        </router-link>
        <router-link to="/formulario1" active-class="activo" tag="li" >
            <a>Formulario 1</a>
        </router-link>
        <hr>
        <router-view></router-view>
    </section>
</template> 

<script>
    export default {
    }
</script>

<style>
    .activo a {
        color: red;
    }
</style>