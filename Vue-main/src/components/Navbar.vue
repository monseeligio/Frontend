<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/">
        <img class="imgLogo" src="https://i.ibb.co/mShL7wQ/logo2.png" alt="">
        </router-link>
        <router-link to="/">
        <p class="navbar-brand sub">HOME</p>
        </router-link>
        <router-link to="/pastelero">  
        <p class="navbar-brand sub">PEDIDO</p>
        </router-link> 
        <router-link to="/cliente">
        <p class="navbar-brand sub">HACER PEDIDO</p>
        </router-link>        
    </nav>
</template>

<style>
.sub{
    color: #623307;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    float: left;
    margin-left: 9rem;
}
.imgLogo{
    width: 150px;
    height: 150px;
}
</style>