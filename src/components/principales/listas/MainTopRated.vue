<script >
//Aquí importamos el componente Title


export default {

  //Aquí llamamos a todos los componentes
    components:{
     
    },
    data(){
        return{
            reviewsDummy:
              [
                {
                  idSerie: 1,
                  nombreSeries: 'PB'
                },
                {
                  idSerie: 2,
                  nombreSeries: 'BCS'
                },
                {
                  idSerie: 3,
                  nombreSeries: 'BB'
                },
                {
                  idSerie: 4,
                  nombreSeries: 'CDD'
                }
              ]
            
        }
    },
}
</script>

<template>
  <div class="my-5 font-poppinsLight h-96 text-white flex flex-col bg-secondaryBackground">
   
     <h2>Top rated series</h2>
     <div class="flex flex-row gap-2">

       <div v-for="series in reviewsDummy" :key="idSerie" class="border border-white" >
        {{series.nombreSeries}}
       </div>
     </div>

  </div>
</template>
