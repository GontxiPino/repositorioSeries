<script >

export default {
    //Estos son los parámetros que se le pasan al componente
    props:{
        titleText:{
            type: String,
            required:true,
        },
        
    },
}
</script>
<template>
    
   <h1>{{ titleText }}</h1>
  
</template>

