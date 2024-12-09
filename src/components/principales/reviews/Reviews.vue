<script >
import CardReview from './CardReview.vue';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { app } from '../../../../firebase/firebase'

 //Conexión con la app de Firestore que se encuentra en el firebase.js
 const db = getFirestore(app);
 //Entrega un array con todos los objetos de la colección usuario de Firebase OK
 async function getTodos() {
    const todosCollectionRef = collection(db, 'all-reviews-series');
    const todosSnapshot = await getDocs(todosCollectionRef);
    const todasLasReviewsArray = todosSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return todasLasReviewsArray;
  }


export default {
    //Estos son los parámetros que se le pasan al componente
    props:{

        // titleText:{
        //     type: String,
        //     required:true,
        // },
        
    },
    data() {
      return {
        allReviews: [],
        formData:{
            nombre:'',
            apellido:'',
            email:''
        },
        submitted: false,
      }
    },
    //Aquí van los componentes importados
    components:{
    CardReview,

    },
    created() {
        setTimeout(()=>{

            getTodos().then(todosData => {
              this.allReviews = todosData;
      
              //Comprobando el array de objetos que son todas las reviews:
              console.log(this.allReviews);
              
            });
        },1000)
    },
    methods:{
       //Escribir datos en Firestore (en este casola colección usuario)
        async agregarDatosFirebase () {
            try{
                await addDoc(collection(db,'usuario'),this.formData);
            
                    console.log('DATOS OK');
                    this.submitted = false 
                    
            }catch(e){  
                    console.error('ERROR FEO:',e);
                    
            }
        },
        //Función al clickear SUBMIT
        handleSubmit(){
            this.submitted = true;
            this.agregarDatosFirebase();
        },
        
    },

}


</script>
<template>

    
    <div :class="allReviews.length > 0 ? 'lg:px-5' : 'lg:px-0'  ">
    
    <div v-if="allReviews.length > 0">

        <CardReview v-for="(item,index) in allReviews":key="index.id"
        :usuario=item.userEmail
        :nombreSerie=item.serieName
        :comentario=item.comment
        :rating=item.rating
        :srcImg=item.srcImage
        />
    </div>
    <div v-else class="bg-primaryBackground h-screen flex justify-center items-center ">
        <img src="../../../assets/gifs/loading2.gif" width="30"  alt="">
    </div>
    </div>
  
</template>
