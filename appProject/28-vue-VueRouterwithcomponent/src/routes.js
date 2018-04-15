import Home from './components/Home.vue';
import Contacto from './components/Contacto.vue';
import Formulario from './components/Formulario.vue';
import Formulario1 from './components/Formulario1.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/contacto', component: Contacto},
    {path: '/formulario', component: Formulario},
    {path: '/formulario1', component: Formulario1},
];