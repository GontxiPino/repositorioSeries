<script >
import BannerSerie from '../principales/banners/BannerSerie.vue';
import Main from '../principales/Main.vue';

export default {
    //Estos son los parámetros que se le pasan al componente
    props:{

        // titleText:{
        //     type: String,
        //     required:true,
        // },
        
    },
    //Aquí van los componentes importados
    components:{
      Main,
      BannerSerie,
      
    //   Footer,
    }
}
</script>
<template>
    
    <div class=" min-h-[calc(100vh-14rem)] flex flex-col gap-4 justify-center align-middle w-full">
        <BannerSerie/>
        <Main/>
    </div>
  
</template>