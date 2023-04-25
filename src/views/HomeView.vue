<script setup>

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebaseConfig.js';

import { useUserStore } from '@/stores/user.js';

const userStore = useUserStore();


userStore.currentUser();


</script>

<template>
    <h1>Home</h1>
    <p> {{ userStore.userData?.email }}</p>
</template>
