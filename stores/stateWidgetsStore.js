import { defineStore } from "pinia";
import {app} from '../firebase/firebase.js';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';



export const useLoginState = defineStore('state-widgets',{

    state:()=>({

        showLoginMenu: null,
    }),
    actions:{

        toggleMenuLogin(){
            this.showLoginMenu = !this.showLoginMenu
            // console.log(this.showLoginMenu);
            
        }
    }
})


