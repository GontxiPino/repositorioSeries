<script >
//Aquí importamos el componente Title

import CardLastReviews from '../Cards/CardLastReviews.vue';


export default {

  //Aquí llamamos a todos los componentes
    components:{
     CardLastReviews
    },
    data(){
        return{
          dummyReviews : [

          {
              titulo: "BoJack Horseman",
              parrafo: "Conoce al caballo mas querido de los 90's ",
              imgUrl: "https://f4.bcbits.com/img/a2983687285_10.jpg"
          },

          {
              titulo: "Fargo",
              parrafo: "Serie de televisión antológica estadounidense",
              imgUrl: "https://www.lanacion.com.ar/resizer/v2/jon-hamm-como-el-malevolo-roy-tillman-en-la-7HN26MYSSVGYNETPK35466BZD4.JPG?auth=2b6473fefb00b2a38f746a4f7f7b992456a263440cb807a6b140a45704af24e6&width=880&height=586&quality=70&smart=false&focal=916,406"
          },
]            
        }
    },
}
</script>

<template>
  <div class="last-reviews-container flex flex-col w-full">
    <h3 class="pb-2">Last reviews</h3>
    <div class="flex flex-col gap-y-5 rounded-2xl">
      <CardLastReviews v-for="r in dummyReviews" :key="r.idReview" :review = r />
    </div>
  </div>

</template>
