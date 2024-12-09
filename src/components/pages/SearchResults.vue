<script >
import { useRoute } from 'vue-router'; 
import AllReviews from '../principales/reviews/AllReviews.vue';
import FormReviews from '../principales/reviews/FormReviews.vue';
import TopReview from '../principales/reviews/TopReview.vue';
import LoadingSpinner from '../principales/widgets/LoadingSpinner.vue'
import { RouterLink } from 'vue-router';
import CardResults from '../principales/cards/CardResults.vue';
import LogoSeriesLab from '../principales/widgets/LogoSeriesLab.vue';


export default {

 data(){
    return{
        query: null, // Almacena la query que se busca
        apiDataResults: null, // Almacena los datos de la API
        loading: true, // Estado de carga
        error: null,
        pathBaseSrcImg:'https://image.tmdb.org/t/p/w200/',
        pathUrl: '/review-serie/',
        
    }

},
    //Estos son los parámetros que se le pasan al componente
    props:{
        
    },
    //Aquí van los componentes importados
    components:{

        AllReviews,
        TopReview,
        FormReviews,
        LoadingSpinner,
        CardResults,
        LogoSeriesLab
      
    //   Footer,
    },
    methods:{
        async fetchReviewDetails() {
            try {

                const API_KEY = 'de4b6461e071a300a503b91fb095113d'
                const DB_BASE = 'https://api.themoviedb.org/3/search/tv?api_key='
                const LANGUAGE = 'es-ES';
                const DB = `${DB_BASE}${API_KEY}&query=${this.query}&language=${LANGUAGE}`

                const res = await fetch(DB)
                if(!res){throw new Error("Error al obtener los datos");}

                this.apiDataResults = await res.json();
                this.apiDataResults = this.apiDataResults.results
                
                
                
                

            } catch (err) {
                this.error = err.message;
                console.error("Error en la API:", err);
            } finally {
                // Cambiar estado de carga en 1 segundo
                setTimeout (()=>{
                     
                    this.loading = false;
                },1000)
                
            }
        },
    },
    mounted() {

        // Obtener el parámetro de la URL
        const route = useRoute(); 
        this.query = route.params.serie; 
        this.query = this.query.replaceAll('+', ' ')
       
        // Asignar el ID recibido a la propiedad `reviewId`
        this.fetchReviewDetails(); // Llamar a la API
      
        
        
        
    },
    watch: {
    // Detectar cambios en los parámetros de la ruta
    '$route.params.serie'(newQuery) {
      this.query = newQuery; // Actualizar la query
      this.fetchReviewDetails(); // Volver a buscar
    },
  },
    
}
</script>
<template>
    <div class="lg:px-20 hidden lg:block px-5 h-20 md:px-10 lg:py-5    flex-row justify-between items-center bg-gradient-to-b from-gray-900 to-transparent ">
            <RouterLink to="/">
                <LogoSeriesLab class="pt-1"/>
            </RouterLink>
            

    </div>
    
    <div v-if="!loading" class="md:px-10 px-5 min-h-[calc(100vh-14rem)] flex flex-col gap-4 justify-start lg:pt-5 align-middle w-full lg:px-20">
        <div class="flex flex-row">

            <div  class="lg:py-5">Resultados de la búsqueda:</div>
            <div  class=" lg:py-5 pb-3 text-primary ml-3 "> {{ query }}</div>
        </div>
        <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6  gap-4 ">

            <div v-for="result in apiDataResults" :key="result.id">
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

    </div>

    <!-- SPINNER -->
    <div v-else class="min-h-[calc(100vh-14rem)] flex flex-col gap-4 justify-center items-center w-full ">
        <LoadingSpinner/>
    </div>
</template>