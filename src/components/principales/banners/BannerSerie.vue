<script>

import LogoSeriesLab from '../widgets/LogoSeriesLab.vue'

export default {
    data() {
    return {
        serie:{
            id:12,
            name: 'The Wire',
            desc:'David Simon, creador y co-guionista de la mini- serie de HBO tres veces ganadora del premio Emmy The Corner, este sencillo y extremadamente realista drama sigue una caótica y controvertida investigación de drogas ...',
            srcUrl:'https://static.hbo.com/content/dam/hbodata/series/the-wire/ka/the-wire-ka-1920.jpg',
        }
    };
},

    props:{
        // serie: Object,
    },
    components:{
        LogoSeriesLab
    },
}
</script>
<template>
    <div 
    :style="{backgroundImage: `url(${serie.srcUrl})`}" 
    class="w-full  bg-cover bg-center bg-no-repeat mb-0 hidden lg:block ">
        <div class="lg:px-20 px-5 lg:h-24 h-24 bg-gradient-to-r from-backgroundColor to-transparent  pt-6 flex flex-col ">
         <LogoSeriesLab/>
         <div class="py-5 lg:flex flex-row justify-between  gap-5 mt-5 hidden ">
             <!-- <h2 class=" flex align-middle text-3xl font-poppinsBold w-full">{{ serie.name }}</h2> -->
             <div class="flex flex-row gap-2">

                 
                 <!-- <p class="lg:flex text-xs hidden">{{ serie.desc }}</p> -->
                 
             </div>
             
         </div>
         </div>
    </div>
  
</template>


