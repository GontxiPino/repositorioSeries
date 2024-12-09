<script>

import LogoSeriesLab from '../widgets/LogoSeriesLab.vue';
import { CircleX, Edit, Trash2 } from 'lucide-vue-next'
import { useLoginState } from '../../../../stores/stateWidgetsStore.js';
import { signup, login } from "../../../../firebase/authService.js";

export default {

    data() {
        return {
            isSignup: false,
            email: "",
            password: "",
        };
    },
    computed: {
        showLogIn() {
            return useLoginState();
        },
    },

    props:{
        
    },
    components:{
        LogoSeriesLab,
        CircleX,
    },
    methods: {
        async handleSubmit() {
            try {
                if (this.isSignup) {
                    await signup(this.email, this.password);
                    alert("Usuario registrado exitosamente");
                    console.log(`usuario registrado: ${this.email}`);
                    
                } else {
                    await login(this.email, this.password);
                    alert("Inicio de sesión exitoso");
                    console.log(`sesión iniciada con usuario: ${this.email}`);

                }
                this.showLogIn.toggleMenuLogin();
            } catch (error) {
                console.error(error);
                alert(error.message);
            }
        },
        toggleAuthMode() {
            this.isSignup = !this.isSignup;
        },
    },
}
</script>
<template>
    <div class="z-50 w-full flex flex-col justify-center px-5 items-center  gap-2 h-screen ">

        <div class="flex flex-col justify-center items-center md:max-w-96 w-full  gap-2  pb-5">
            <div class=" w-full flex flex-row justify-end">
                <button>
                    <CircleX 
                    @click="showLogIn.toggleMenuLogin()"
                    class="hover:scale-110 transition-all duration-500 ease-in-out hover:text-primary" /></button>
            </div>
            <div class="py-5">

                <LogoSeriesLab/>
            </div>

            <input 
                v-model="email"
                class="py-5 rounded-2xl pl-5 lg:w-96 xl:max-w-96 w-full text-gray-800"
                type="email" 
                placeholder="Email" 
            />
            <input 
                v-model="password"
                class="py-5 rounded-2xl pl-5 xl:max-w-96 lg:w-96 w-full text-gray-800"
                type="password" 
                placeholder="Password" 
            />
            <button 
                @click="handleSubmit"
                class='py-5 rounded-2xl  bg-purple-500 flex justify-center lg:w-96 xl:max-w-96 w-full transition-all duration-500 ease-in-out hover:bg-purple-700'            >
                {{ isSignup ? 'Crear cuenta' : 'Iniciar Sesión' }}
            </button>
            <button 
                @click="toggleAuthMode"
                class="text-sm mt-3 text-gray-300 hover:text-primary transition-all duration-500"
            >
                {{ isSignup ? '¿Ya tienes cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate' }}
            </button>
        </div>
        
    </div>
  
   
</template>
