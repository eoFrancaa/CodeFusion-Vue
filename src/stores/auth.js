
import { defineStore } from 'pinia';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useStorage } from '@vueuse/core'

export const useAuthStore = defineStore('auth', () => {
  const user = useStorage("user", null);
  const isAuthenticated = useStorage("Auth", false);
  const token = useStorage("accessToken", null)

  const setUser = (newUser) => {
    user.value = newUser;
    token.value = newUser.accessToken
    isAuthenticated.value = !!newUser;
  };


  const checkUserAuth = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  };

  const logout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      setUser(null);
      isAuthenticated.value = false;
      token.value = null
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return {
    user,
    isAuthenticated,
    token,
    setUser,
    checkUserAuth,
    logout
  };
});
