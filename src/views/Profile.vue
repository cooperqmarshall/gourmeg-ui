<template>
  <div>
    <h1>Profile</h1>
    <h2>Hello, {{ store.state.user.username }}</h2>
    <button @click="logout">Logout</button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

function logout() {
  router.push("/signin");
  store.dispatch("logout");
}
</script>

<style scoped>
div {
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  font-weight: 600;
  color: #363636;
  margin: 1.5rem 0;
}

h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #363636;
  margin: 1rem 0;
}

button {
  padding: 8px 12px;
  font-size: 1rem;
  background-color: #f89397;
  border: none;
  border-radius: 5px;
}
</style>
