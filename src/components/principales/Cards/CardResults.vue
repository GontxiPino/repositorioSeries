<script >
import LogoSeriesLab from '../widgets/LogoSeriesLab.vue';
import { Star, Edit, Trash2 } from 'lucide-vue-next'


export default {
    //Estos son los parámetros que se le pasan al componente
    props:{

        idSerie:{type:Number},
        nombreSerie:{type:String},
        srcImg:{type: String},
        rating:{type: Number},
        anyoEmision:{type: String},
        descripcionSerie:{type:String}
        
        
    },
    data() {
      return {
        
      }
    },
    //Aquí van los componentes importados
    components:{
        LogoSeriesLab,
        Star,
    },
   
    methods:{
       
    
        
    },

}



</script>

<template>


    <div class=" h-72 bg-secondaryBackground   flex flex-col pb-5   rounded-2xl hover:scale-105 transition-all ease-in-out duration-100">
        <img :src="srcImg" alt="" class=" overflow-hidden rounded-t-2xl object-cover">  
        <div class="flex flex-col px-2 ">
            <div class="flex flex-row justify-between align-middle items-center mt-2    ">
                <div class="flex flex-row items-center ">

                    <Star color="#dcd62e" strokeWidth={3} fill="#dcd62e" width="15px"/>
                    <div class=" pl-1 text-sm text-gray-400  font-poppinsRegular ">{{ parseFloat(rating.toFixed(1))}}</div>
                </div>
                <div class=" text-sm text-gray-400  font-poppinsRegular  ">{{ anyoEmision }}</div>

            </div>
            <div class="w-full  text-xs font-poppinsRegular  pt-2 h-16 ">{{ nombreSerie.slice(0,35 ) }}</div>
            
            <!-- <div class="w-full  text-xs font-poppinsThin h-16">{{ descripcionSerie.slice(0,80)+'...' }}</div> -->
            
        </div>
    </div>
  
</template>
