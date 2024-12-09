<script >
import { LogOut,UserRound } from 'lucide-vue-next';
import {useUserStore} from '../../../../stores/userStore.js'
import { useLoginState } from '../../../../stores/stateWidgetsStore.js';
import {auth} from '../../../../firebase/firebase.js';
import { signOut } from 'firebase/auth';
import LoadingText from './LoadingText.vue';


export default {

  //Para llamar al nombre del usuario
  setup() {
    const userStore = useUserStore();
    const showLogIn = useLoginState();

    return {
      userStore, // Accediendo al store completo
      showLogIn,
    };
  },
  
  //Aquí llamamos a todos los componentes
    components:{
      LogOut,
      UserRound,
      LoadingText
    },
    data(){
        return{
            
        }
    },
    methods:{
      async logout(){

        try{
          //Cierro sesión usuario de Firestore
          await signOut(auth)

          //Limpio el estado de Pinia
          this.userStore.clearUser();
          console.log('Usuario deslogueado');
        }catch(e){
          console.error(`Error cerrando la sesión: ${e}`);
        }
      },
       generarNickName (email){
        let nickname = '@';

        for(const char of email){
          if(char == '@'){
            break
          }
          nickname += char;
        }
        return nickname
      }
    
    },
    
}
</script>

<template>
<div class="grid grid-cols-2 gap-y-2 w-full text-sm">


  <div class="flex col-span-2 lg:justify-between mb-2  text-xs justify-end ">
    <div class="flex flex-row items-center justify-center gap-x-3 ">
      <!-- <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="rounded-full w-8 h-8" alt=""> -->
      <div class="flex flex-row gap-2 items-center lg:text-xs text-sm">
        <span class="lg:block hidden">Hola </span>
        <div class="lg:hidden block"><UserRound width="20px"/></div>
        <span v-if="userStore.isLoggedIn" class="text-primary ">{{generarNickName(userStore.userEmail)}} </span>
        <span v-if="userStore.isLoggedIn == false" class="text-white lg:text-purple-300" >Invitad@</span>
        <span v-else class="text-purple-300" ><LoadingText/></span>
      </div>
      
      
      
    </div>
    <button v-if="userStore.isLoggedIn" @click="logout" class="hover:text-purple-300 transition-all duration-500" >
      <LogOut />
    </button>
    <button v-else @click="showLogIn.toggleMenuLogin()" class="lg:text-xs ml-3 text-sm px-5 py-2 rounded-2xl bg-primary hover:bg-purple-300  transition-all duration-500">
      Log In
    </button>
  </div>
  <span class="text-xs lg:block hidden">Total reviews</span>
  <span class="text-right text-xs lg:block hidden">8</span>
  <span class="text-xs lg:block hidden">Votos</span>
  <span class="text-right text-xs lg:block hidden">4</span>
</div>
</template>
