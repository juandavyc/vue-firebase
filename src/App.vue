<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { useUserStore } from '@/stores/user';

const userStore = useUserStore();

</script>

<template>
  <nav v-if="!userStore.loadingSession" class="navbar navbar-expand-sm navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
          <li class="nav-item" v-if="userStore.userData">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li class="nav-item" v-if="!userStore.userData">
            <RouterLink to="/login" class="nav-link">Login</RouterLink>
          </li>
          <li class="nav-item" v-if="!userStore.userData">
            <RouterLink to="/register" class="nav-link">Register</RouterLink>
          </li>
          <li class="nav-item" v-if="userStore.userData">
            <button v-on:click="userStore.logoutUser" class="btn btn-warning nav-link"> logout</button>
          </li>
          <!--
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="dropdownId">
              <a class="dropdown-item" href="#">Action 1</a>
              <a class="dropdown-item" href="#">Action 2</a>
            </div>
          </li>
          -->
        </ul>
      </div>
    </div>
  </nav>
  <div v-else>
    cargando navbar
  </div>
  <div class="container p-3">
    <RouterView />
  </div>
</template>

<style scoped>
.navbar-nav .nav-item .active {
  font-weight: bold;
}
</style>
