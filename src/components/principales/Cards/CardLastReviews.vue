<script >


export default {

    props: {
        review : Object
    
    },

  //Aquí llamamos a todos los componentes
    components:{
     
    },
    data(){
        return{
        }
    },
}
</script>

<template>

<a href="#enlace-a-review">
    <div class="bg-white bg-opacity-5 rounded-2xl flex flex-row align-between">
        <div class="col-1 w-1/3 3xl:w-1/4">
            <img :src="review.imgUrl" alt="" class="w-full h-full aspect-square object-cover rounded-2xl">
        </div>
        <div class="col-2 w-2/3 3xl:w-3/4 flex flex-col p-4">
            <h4 class="text-md mb-1">{{ review.titulo }}</h4>
            <p class="text-xs">{{ review.parrafo }}</p>
        </div>
    </div>
</a>
</template>
