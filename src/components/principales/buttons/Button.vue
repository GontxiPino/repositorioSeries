<script >


export default {

    name: 'Button',
    
    props: {
    buttonText: {
      type: String,
      required: true
    }
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

<button class="btn bg-buttonColor px-16 py-3 rounded-lg">
 {{ buttonText }}
</button>
</template>
