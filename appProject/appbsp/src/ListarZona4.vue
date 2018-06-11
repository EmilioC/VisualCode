<template>
   <div id="app">    
     <!-- Atribute is-mobile information: https://bulma.io/documentation/layout/level/ -->
    <!-- Table of May-->
  <div>
      <table class="table is-fullwidth">
        <thead>           
            <th>Nº</th> 
            <th>FECHA</th> 
            <th>CATEGORÍA</th>          
        </thead >
             <tr v-for="(mensaje, index) in apt"
             v-bind:key="mensaje['.key']">                
                <td> {{ index }}</td>
                <td> {{ mensaje.fecha }} </td>
                <td> {{ mensaje.category }} </td>                           
            </tr>
      </table>   
    </div>
  </div>  
</template>

<script>
import { aptRef } from "./firebase";
var fechon =  document.getElementById ('demo');

export default {
  firebase: {
    apt: aptRef
  },
  data() {
    return {
      id: null,
      supervisor: "JA",
      fecha: "20/04/2018",
      descripcion: "Material dentro del recinto",
      accion: "Retirada del material",
      typeAPT: "Comportamiento",
      category: "Riesgo tropezar o caer",
      photo: "si",
      aprendizaje: "Responsabilidad equipos en buen estado",
      causes: "Reducción probabilidad de accidente",
    /* Test with Computed Properties 
    https://vuejs.org/v2/guide/computed.html#Computed-Properties*/
      fechas :"fechas",
      cP_: "si",
      cP_a :"3",
      cP_b :"4",
      minimo : "0",
      mayo: "31-05-2018", 
      mensaje: null,
      username: 'juanwmedia',
      mensajes: [],
      apt: [],
      fechita: "",
      fechaDiaMesAno: "",
      aptMes: "2",
    };
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
    },
    infoFecha (){ 
       this.apt.filter((juego) => juego.fecha.includes("2018-05")).reverse();     
      }
    },    

    computed: {
      /*Filter apt with .id and includes. Test only is 
      the new value that we used for traverse the array */
      filtroId (){
      return this.apt.filter((test) => test.id.includes("3"));
      }, 
      /*Filter apt with letters insite of field category with includes*/
      filtroCategoria (){
      return this.apt.filter((juego) => juego.category.includes("e"));
      },  
      filtroMay (){ 
        //Con .reverse()recuperamos el último dato añadido a la db.    
      return this.apt.filter((juego) => juego.fecha.includes("2018-05")).reverse();         
      },
      filtroJune (){
        return this.apt.ref('fecha').orderByValue().on('child_added', snapshot => {
                    console.log(snapshot.key, snapshot.val());
                });
      },
      
      /*Recorre en array el apt desde la instancia de Firebase y
      va modificando los datos*/
      filtroCategory (){   
      var today = new Date();
      var h = today.getHours();
      var min = today.getMinutes();
      var s = today.getSeconds();
      
      var m = today.getMonth()+1;
      var d = today.getUTCDate();
      var a = today.getUTCFullYear();

      this.fechaDiaMesAno = a+"-"+m+"-"+d;     

    /*Test with create new array type apt but we modify*
    and we use av-for for take new values of array*/
      
      /*If it is the current month*/
      
      var mesApt= this.fecha;
      this.mensaje = mesApt;
      if ( m = mesApt) {
          return this.apt.filter((juego) => ( 
          juego.id = m,
          juego.fecha = m     
          ));
      }
      else {
          return this.apt.filter((juego) => ( 
          juego.id = m    
          ));
      }

      /*Probando con un if dentro del recorrer juego.id.. ju
      if( today.month()= juego.fech() | today.year() = juego.fecha().year())
      (juego.id = h,
      juego.fecha =d,
      juego.category = m   
        
      ));0*/ 
  
  }}
};
</script>

<style lang="css">
    @import '/node_modules/bulma-extensions/bulma-timeline/dist/bulma-timeline.min.css';
    @import '/node_modules/bulma/css/bulma.min.css';

</style>
