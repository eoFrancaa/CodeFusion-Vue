<script setup>
import { onMounted, ref } from 'vue';
import { useAuthStore } from '@/stores/auth.js';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

const isLoggedIn = ref(false);
const modalProfile = ref(false);
const router = useRouter();
const authStore = useAuthStore();

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const toggleModal = () => {
  modalProfile.value = !modalProfile.value;
};


const closeModal = (event) => {
  if (event.target === event.currentTarget) {
    modalProfile.value = false;
  }
};

const handleSingOut = async() => {
  await authStore.logout()
  console.log(authStore.isAuthenticated)
  signOut(auth).then(() => {
    router.push("/");
  });
};


const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div class="nav-container">

    <div class="nav-button">
      <router-link class="bnt-style" to="/"><p>Home</p></router-link>
      <router-link class="bnt-style" to="/conselho" v-if="isLoggedIn"><p>Conselho</p></router-link>
      <router-link class="bnt-style" to="/sobre"><p>Sobre</p></router-link>
      <button @click="toggleModal" class="bnt-login">Perfil</button>
    </div>

    <div v-if="modalProfile" class="modalProfile" @click="closeModal">
      <div class="modal-content">
        <router-link v-if="!isLoggedIn" class="bnt-style" to="/register"><p>Registrar</p></router-link>
        <router-link v-if="!isLoggedIn" class="bnt-style" to="/singin"><p>Entrar</p></router-link>
        <button class="bnt-style" v-if="isLoggedIn" @click="handleSingOut">Sign Out</button>
      </div>
    </div>
  </div>
</template>


<style scoped>
.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(90deg, #2c4156, #39586d);
  width: 100%;
  height: 60px;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  padding: 0 10px;
}

.nav-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.bnt-style {
  color: white;
  background: transparent;
  border: none;
  font-size: 0.9rem;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}
.bnt-style:hover {
  color: #d3d3d3;
}

.bnt-login {
  padding: 5px 10px;
  background-color: #57788d;
  color: white;
  font-size: 0.9rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}
.bnt-login:hover {
  background-color: #4e6f82;
  transform: scale(1.05);
}

.modalProfile {
  width: 200px;
  position: fixed;
  bottom: 70px;
  right: 10px;
  background-color: #39586d;
  color: white;
  padding: 15px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;
}

.modal-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

@media (max-width: 768px) {
  .nav-container {
    height: 50px;
    padding: 0 5px;
  }

  .bnt-style {
    font-size: 0.8rem;
  }

  .bnt-login {
    padding: 5px;
    font-size: 0.8rem;
  }

  .modalProfile {
    width: 180px;
  }
}



</style>
