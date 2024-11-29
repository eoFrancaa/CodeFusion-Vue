
import { defineStore } from 'pinia';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useStorage } from '@vueuse/core'

export const useAuthStore = defineStore('auth', () => {
  const user = useStorage("user", null);
  const isAuthenticated = useStorage("Auth", false);

  const setUser = (newUser) => {
    user.value = newUser;
    isAuthenticated.value = !!newUser;
  };


  const checkUserAuth = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  };

  return {
    user,
    isAuthenticated,
    setUser,
    checkUserAuth
  };
});
