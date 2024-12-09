<script >
import { RouterLink } from 'vue-router';
import LogoSeriesLab from '../widgets/LogoSeriesLab.vue';
import { Star, Edit, Trash2 } from 'lucide-vue-next'


export default {
    //Estos son los parámetros que se le pasan al componente
    props:{

        idSerie:{type:String},
        nombreSerie:{type:String},
        srcImg:{type: String},
        popularidad:{type: Number},
        fechaEmision:{type: String},
        descripcionSerie:{type:String},
        ranking:{type:Number}
        
        
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
    <div class="lg:h-96 pb-5  flex flex-col lg:pb-5  ">
        <div class="lg:px-20 hidden  h-1/5 lg:flex lg:flex-row justify-between items-center bg-gradient-to-b from-gray-700 to-transparent  ">
            <RouterLink to="/">
                <LogoSeriesLab class="pt-1"/>
            </RouterLink>
        </div>

        <!-- Contenedor MOBILE -->
        <div class=" md:hidden px-5 flex flex-col w-full   ">

            <!-- IMAGEN + datos -->
            <div class="">
                <!-- contenedor foto y datos -->
                <div class="flex flex-row w-full ">

                    <!-- img -->
                    <div class="shadow-md shadow-black rounded-3xl ">
                        <img class="rounded-3xl object-cover h-44 " :src="srcImg" alt="">
                    </div>

                    <!-- datos -->
                    <div class="flex flex-col   justify-start pl-5">

                        <div class="">

                            <!-- Nombre -->
                            <div class="flex flex-row gap-5 items-center align-middle">
                                <div>Nombre original:</div>
                                <div class="font-poppinsThin text-md text-start ">{{ nombreSerie }}</div>
                            </div>

                            <!-- Fecha emisión -->
                            <div class="flex flex-row gap-5 items-center align-middle">
                                <div>Fecha emisión:</div>
                                <div class="font-poppinsThin text-md text-start ">{{`${fechaEmision.slice(8,10)}/${fechaEmision.slice(5,7)}/${fechaEmision.slice(0,4)}`}}</div>
                            </div>

                            <!-- POpularidad -->
                            <div class="flex flex-row gap-5 items-center align-middle">
                                <div>Popularidad IMDB:</div>
                                <div class="font-poppinsThin text-md text-start ">{{ popularidad }} votos</div>
                            </div>
                        

                            
                        </div>

                        <!-- separador -->
                        <div class="border-gray-600 border-t my-3"></div>

                        <!-- puntuación -->
                        <div class="flex flex-row justify-start h-full items-center   ">
                            <div class=" "><Star color="#dcd62e" strokeWidth={1} fill="#dcd62e" width="30px"/></div>
                            <div class="text-2xl">
                                {{ parseFloat(ranking.toFixed(1)) }}
                            </div>
                        </div>

                        
                    </div>
                </div>
                

            </div>
            
            <div class="pt-2 ">

            <div class="py-3 ">Sinópsis</div>
            <div class=" font-poppinsThin text-sm ">
            {{descripcionSerie }} 
            </div>
            </div>
            <!-- DESCRIPCIÓN -->
            
            </div>

        <!-- Contenedor DESK y md -->
        <div class=" lg:px-20 px-5 h-4/5 md:flex flex-col md:flex-row w-full hidden ">

            <!-- IMAGEN -->
            <div class="w-1/5 shadow-md shadow-black rounded-3xl">
                <img class="rounded-3xl object-cover h-full" :src="srcImg" alt="">
            </div>
            <!-- DESCRIPCIÓN -->
            <div class="flex flex-col  w-4/5 justify-start pl-6">
                <div class="">

                    <!-- Nombre -->
                    <div class="flex flex-row gap-5 items-center align-middle">
                        <div>Nombre original:</div>
                        <div class="font-poppinsThin text-md text-start ">{{ nombreSerie }}</div>
                    </div>

                    <!-- Fecha emisión -->
                    <div class="flex flex-row gap-5 items-center align-middle">
                        <div>Fecha emisión:</div>
                        <div class="font-poppinsThin text-md text-start ">{{`${fechaEmision.slice(8,10)}/${fechaEmision.slice(5,7)}/${fechaEmision.slice(0,4)}`}}</div>
                    </div>

                    <!-- POpularidad -->
                    <div class="flex flex-row gap-5 items-center align-middle">
                        <div>Popularidad IMDB:</div>
                        <div class="font-poppinsThin text-md text-start ">{{ popularidad }} votos</div>
                    </div>
                   
          
                    
                </div>

                <div class="border-gray-600 border-t my-3"></div>

                <div class=" ">

                    <div class="pb-3">Sinópsis</div>
                    <div class=" font-poppinsThin text-sm ">
                       {{descripcionSerie }} 
                    </div>
                </div>
            </div>

            </div>
            
    </div>
  
</template>
