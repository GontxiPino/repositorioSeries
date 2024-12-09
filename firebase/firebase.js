// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDexpnAOQQAW04zYfdS1M9u1Ldol41Kbk0",
  authDomain: "proyecto-final-lasalle-grupo-8.firebaseapp.com",
  projectId: "proyecto-final-lasalle-grupo-8",
  storageBucket: "proyecto-final-lasalle-grupo-8.appspot.com",
  messagingSenderId: "229500446718",
  appId: "1:229500446718:web:2b0c436e4adb92682882af"
};

// Initialize Firebase - exportar para llamarlo en un componente
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Listener global para cambios de autenticación
export const monitorAuthState = (callback) => {
  onAuthStateChanged(auth, callback);
};


