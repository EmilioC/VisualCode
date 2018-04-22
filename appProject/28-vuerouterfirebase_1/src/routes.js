import Home from './components/Home.vue';
import Contacto from './components/Contacto.vue';
import Lista from './components/Lista.vue';
import Listafuera from './Listafuera.vue';
import Formulario from './Formulario.vue';
import Listarzona from './ListarZona.vue';



export const routes = [
    {path: '/', component: Home},
    {path: '/contacto', component: Contacto},
    {path: '/lista', component: Lista},
    {path: '/listafuera', component: Listafuera},
    {path: '/formulario', component: Formulario},
    {path: '/listarzona', component: Listarzona},
];