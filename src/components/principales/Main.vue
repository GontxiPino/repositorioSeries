<script >
import TopReviewsSeries from './listas/TopReviewsSeries.vue';
import TopRatedSeries from './listas/TopRatedSeries.vue';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { app } from '../../../firebase/firebase.js';

//API
//Conexión con la API de TMDB al recurso de las Top series
const DB_TMDB_TOP_RATED= 'https://api.themoviedb.org/3/tv/top_rated?api_key='
const API_KEY = 'de4b6461e071a300a503b91fb095113d'
const LANGUAGE = 'es-ES'; // Idioma español de España
const DB_TOP_RATED = `${DB_TMDB_TOP_RATED}${API_KEY}&language=${LANGUAGE}`


//FIREBASE:
 //Conexión con la app de Firestore que se encuentra en el firebase.js
 const db = getFirestore(app);
 //Entrega un array con todos los objetos de la colección usuario de Firebase OK
 async function getTodos() {
    const todosCollectionRef = collection(db, 'all-reviews-series');
    const todosSnapshot = await getDocs(todosCollectionRef);
    const todasLasReviewsArray = todosSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return todasLasReviewsArray;
  }


export default {
    data(){
        return{

            arrayTopRated: [],
            allReviewsFirestore: [],
            filteredReviewsFirestore:[],
            top10filteredReviews:[]

        }
    },
    //Estos son los parámetros que se le pasan al componente
    props:{

        // titleText:{
        //     type: String,
        //     required:true,
        // },
        
    },
    //Aquí van los componentes importados
    components:{
        TopReviewsSeries,
        TopRatedSeries,

    },
    methods:{
      
    },
    created() {

        //Llamada a la API:
            fetch(DB_TOP_RATED)
            .then(res=>res.json())
            .then(data=>{
                setTimeout(()=>{
                    this.arrayTopRated = data.results.slice(0,6)
                },1000)
                
                
            })

        //Llamada al Firestore:
            setTimeout(()=>{

                getTodos().then(todosData => {
                this.allReviewsFirestore = todosData.slice(0,30)
                
                const idCount = {};
                this.allReviewsFirestore.forEach(review => {
                    idCount[review.serieId] = (idCount[review.serieId] || 0) + 1;
                 
                });

                const idsSinRepetir = new Set();

                for(const r of this.allReviewsFirestore){
                    if(!idsSinRepetir.has(r.serieId)){
                        idsSinRepetir.add(r.serieId)
                        this.filteredReviewsFirestore.push(r)
                    }
                }
                
                //Dejando solamente las 10 con más reviews:
                this.top10filteredReviews = this.filteredReviewsFirestore.slice(0,10)
                console.log(this.top10filteredReviews);
                

                });
                },1000)


        },
}
</script>
<template>
    
    <div class=" min-h-[calc(100vh-14rem)] flex flex-col justify-between  align-middle w-full ">
        <!-- Xavi -->
        <TopReviewsSeries
        :arrayFromFirestore="top10filteredReviews"
        />

        <!-- Mary -->
        <TopRatedSeries 
        :arrayFromData="arrayTopRated"
        />
    </div>
  
</template>
