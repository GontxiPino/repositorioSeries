// src/services/authService.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase.js";

// Registro de usuario
export const signup = async (email, password, additionalData = {}) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  const generarNickName = (email)=>{

    let nickname = '';

    for(const char of email){
      if(char == '@'){
        
        break
        
      }
      nickname += char;
    }
    console.log(nickname);
    return nickname
  }
  
  const finalNickname = generarNickName(user.email);
  console.log("Nickname generado:", finalNickname);

  // Guardar datos adicionales en Firestore
  await setDoc(doc(db, "usuarios-seriesLab", user.uid), {
    email: user.email,
    nickName: finalNickname,
    ...additionalData,
  });

  return user;
};

// Inicio de sesión
export const login = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};
