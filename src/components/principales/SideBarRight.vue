<script >

import LastReviewsContainer from './listas/LastReviewsContainer.vue';
import UserLastReviewsContainer from './listas/UserLastReviewsContainer.vue';
import Login from './widgets/Login.vue';
import SearchBar from './widgets/SearchBar.vue';

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
    
        LastReviewsContainer,
        UserLastReviewsContainer,
        SearchBar,
        Login

    }
}
</script>
<template>
    
    <div class=" bg-secondaryBackground h-full flex flex-col gap-y-10 items-center justify-start px-8 z-50">
        <SearchBar />
        <Login />
        <UserLastReviewsContainer />
        <LastReviewsContainer />
    </div>
  
</template>
