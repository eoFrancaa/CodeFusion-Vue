<script setup>
</script>

<template>
  <div class="nav-container">

    <img class="logo" src="@/assets/Img/Logo.png" alt="Logo">

    <div class="nav-button">
      <router-link class="bnt-style" to="/"><p>Home</p></router-link> 
      <router-link class="bnt-style" to="/conselho"><p>Conselho</p></router-link> 
      <router-link class="bnt-style" to=""><p>Sobre</p></router-link> 
    </div>

    <div>
      <router-link to=""><button class="bnt-login">Perfil</button></router-link>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.logo {
  margin-left: 50px;
  max-width: 100px;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.1); 
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(90deg, #2C4156, #39586d);
  width: 100%;
  height: 70px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.nav-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
}

.bnt-style {
  color: white;
  background: transparent;
  border: transparent;
  font-size: 1.1rem;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;
}
.bnt-style:hover {
  color: #f1f1f1;
}

.bnt-style:after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #f1f1f1;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease;
}

.bnt-style:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
.bnt-login {
  width: 130px;
  height: 45px;
  background-color: #57788D;
  color: white;
  font-size: large;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
}
.bnt-login:hover {
  background-color: #4e6f82;
  transform: scale(1.05);
}

.bnt-login:focus {
  outline: none;
}
.nav-container.scrolled {
  background: linear-gradient(90deg, #1f2b33, #2C4156);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
}
</style>

