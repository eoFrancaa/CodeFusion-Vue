<script setup>
</script>


<template>
<div class="nav-container">
    <h1 id="nav-logo">Conselho de classe</h1>
    <div class="nav-button">
        <router-link to=""><button class="bnt-style">Conselho</button></router-link> 
        <router-link to="/About"><button class="bnt-style">conselho</button></router-link> 
        <router-link to=""><button class="bnt-style">sobre</button></router-link> 
    </div>
    <div class="nav-login"><router-link to=""><button class="bnt-login">sobre</button></router-link></div>
</div>
</template>

<style scoped>
#nav-logo {
    color: #2C4156;
    margin: 0px;
}
.nav-container{
    background-color: #99A0AA;
    width: 100%;
    height: 100px;
    margin: 0px;
} 
.nav-button{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin: 0px;
}
.bnt-style{
    color: #2C4156;
    background: transparent;
    border: transparent;
    font-size: large;
}
.nav-login{
    display: flex;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 100px;
}
.bnt-login{
    background-color: #2C4156;
    color: white;
    font-size: large;
    border: transparent;
}
</style>