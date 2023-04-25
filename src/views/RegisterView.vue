<script setup>
import { ref } from 'vue';

import { useUserStore } from '@/stores/user.js';


const userStore = useUserStore();


const email = ref('juano@test.com');
const password = ref('1234567');



const handleSubmit = async () => {

    if(!email.value || password.value.length < 5){
        return alert("Llene los campos");
    }
    else{
        await userStore.registerUser(email.value,password.value);
        
    }

}


</script>

<template>
    <h1> Register</h1>
    <form v-on:submit.prevent="handleSubmit">
        <input v-model.trim="email" type="email" placeholder="Ingrese email">
        <input v-model.trim="password" type="password" placeholder="Ingrese contraseña">
        <button :disabled="userStore.loadingUser" type="submit"> Acceder </button>
    </form>
</template>

