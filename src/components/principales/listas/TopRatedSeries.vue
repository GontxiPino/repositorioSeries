<script >
//Aquí importamos el componente Title

import { RouterLink } from 'vue-router';
import CardResults from '../cards/CardResults.vue';
import LoadingSpinner from '../widgets/LoadingSpinner.vue';

export default {
    props:{
      arrayFromData:{
        type: Array
      }


    },

  //Aquí llamamos a todos los componentes
    components:{
      CardResults,
      LoadingSpinner
     
    },
    data(){
        return{
          pathBaseSrcImg:'https://image.tmdb.org/t/p/w200/',
          pathUrl: '/review-serie/',

        }
        
    },
}
</script>

<template>
  
  <div class="lg:px-20  px-5 font-poppinsLight  text-white flex flex-col pb-8 ">
   
   
     <h2 class=" text-lg pb-6">Top Rated series</h2>
     
     <div v-if="arrayFromData.length > 0" class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-2 lg:gap-3 ">
     <div v-for="result in arrayFromData" :key="result.id">
                <RouterLink :to="pathUrl+result.id" class="">
                <CardResults
                :idSerie="result.id"
                :nombreSerie="result.name"
                :srcImg="pathBaseSrcImg+result.poster_path"
                :rating="result.vote_average"
                :anyoEmision="result.first_air_date.slice(0,4)"
                :descripcionSerie="result.overview"
            />
                   
                </RouterLink>
            </div>
      </div>
      <div v-else  class="flex h-80 flex-col justify-center items-center w-full">
          <LoadingSpinner/>
        </div>


  </div>
</template>
