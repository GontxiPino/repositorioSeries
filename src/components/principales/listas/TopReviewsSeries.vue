<script >
import { RouterLink,RouterView } from 'vue-router';
import LoadingSpinner from '../widgets/LoadingSpinner.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';





export default {
  props:{
    arrayFromFirestore:{type:Array}

  },
  setup() {
      return {
        modules: [Pagination],
      };
    },

  //Aquí llamamos a todos los componentes
    components:{
     LoadingSpinner,
     Swiper,
     SwiperSlide,
     
     
    },
    data(){
        return{
          pathBaseSrcImg:'https://image.tmdb.org/t/p/w200/',
          pathUrl: '/review-serie/',
          currentIndex:0,
          slidesToShow: 5, // Número de elementos visibles por pantalla
          
            
        }
        
    },
    methods:{

      nextSlide(){
        const lastIndex = this.arrayFromFirestore.length - this.slidesToShow;

        console.log(`Index actual:${this.currentIndex+1}`);
        if (this.currentIndex < this.arrayFromFirestore.length - 1) {
        this.currentIndex++;
        } else {
          this.currentIndex = 0; // Vuelve al inicio
        }
      },

      prevSlide() {
        console.log(`Index actual:${this.currentIndex+1}`);
        
        if (this.currentIndex > 0) {
          this.currentIndex--;
        } else {
          this.currentIndex = 0; 
        }
      },

      updateSlidesToShow() {

        const width = window.innerWidth;

        if (width < 640) {
          this.slidesToShow = 2; 
          console.log(this.slidesToShow);
          // Teléfonos
        } else if (width < 1024) {
          this.slidesToShow = 4; // Tablets
          console.log(this.slidesToShow);
        } else {
          this.slidesToShow = 5; // Escritorio
          console.log(this.slidesToShow);
        }
  },
    },
    mounted() {

      this.updateSlidesToShow(); 
      window.addEventListener("resize", this.updateSlidesToShow);
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.updateSlidesToShow);
    },
}
</script>


<template>


  <div class=" font-poppinsLight  text-white flex flex-col   ">
   
     <h2 v-if="arrayFromFirestore.length > 0" class="text-lg lg:pl-20 pl-5  ">Top Reviews </h2>
     
     <div class="flex flex-row gap-4 w-full h-auto   ">

   
          <!-- Carrusel -->
    <div v-if="arrayFromFirestore.length > 0" class="relative  " >

      <div  class="relative overflow-hidden w-full h-auto ">
        <div
          class="flex flex-row justify-between transition-transform duration-500 ease-in-out lg:pl-20 pl-5   py-5 relative"
          :style="{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }"
        >
         
          <RouterLink
            v-for="(serie, index) in arrayFromFirestore"
            :key="serie.serieId"
            :to="pathUrl + serie.serieId"
            class="flex-shrink-0  mr-7 shadow-lg shadow-black rounded-2xl "
          >
            <img
              :src="serie.srcImage"
              :alt="serie.serieName"
              class="  w-full h-full object-cover rounded-2xl hover:scale-105 transition-all ease-in-out duration-100"
            />
          </RouterLink>
        </div>
      </div>
      
       <button v-if="currentIndex > 0"
        class="absolute top-[183px] left-0 h-[310px] hover:opacity-100 opacity-0 transition-all duration-500 ease-in-out  flex justify-center items-center transform -translate-y-1/2 bg-gradient-to-r  from-gray-900 to-transparent bg-opacity-50 text-white text-5xl  px-4 "
        @click="prevSlide"
      >
        ‹
      </button>
      <button v-if="currentIndex < arrayFromFirestore.length - slidesToShow"
        class="absolute top-[183px] right-0 transform hover:opacity-100 opacity-0 h-[310px] -translate-y-1/2 transition-all duration-500 ease-in-out   text-white p-2 text-5xl px-4 bg-gradient-to-l  from-gray-900  to-transparent bg-opacity-50 "
        @click="nextSlide"
      >
        ›
      </button>
    </div>       

   
        <!-- Spinner si no hay datos -->
        <div v-else  class="flex h-80 flex-col justify-center items-center w-full">
          <LoadingSpinner/>
        </div>

      </div>
    


  </div>
</template>
