import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null, 
  }),
  actions: {
    setUser(userData) {
      this.user = userData;
    },
    clearUser() {
      this.user = null;
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.user, // Devuelve true si hay un usuario activo
    userEmail: (state) => state.user?.email, //Devuelve el email del usuariocli
  },
});
