<script >

import { RouterLink } from 'vue-router';



export default {

  //Aquí llamamos a todos los componentes
    components:{
     
    },
    data(){
        return{
          searchQuery: '',
          pathUrl: '/buscar-serie/'
        }
    },
    methods:{

      search() {
      if (this.searchQuery.trim()) {

        // Reemplazo espacios por "+":
        const formattedQuery = this.searchQuery.trim().replace(/\s+/g, '+');

        // Redirigo a la ruta /buscar-serie con la query formateada:
        this.$router.push({
          name: 'buscarSerie',
          params: { serie: formattedQuery },
        });
      } else {
        console.log('El campo de búsqueda está vacío');
      }
    },
    }
}
</script>

<style scoped>

.search-icon {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%239a9a9a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>');
  background-repeat: no-repeat;
  background-position-x: right 15px;
  background-position-y: center;

}

</style>

<template>

  <form @submit.prevent class="w-full">
    <input 
    
        class="w-full h-10 rounded-2xl lg:text-white text-gray-900 bg-white lg:bg-opacity-5 bg-opacity-80 pl-5 lg:mt-8 search-icon " 
        v-model="searchQuery"
        type="text"
        placeholder="Buscar serie..."
        @keyup.enter="search" />
    
     

  </form>
</template>
