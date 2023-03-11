<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">
          <font-awesome-icon icon="fa-solid fa-home" fixed-width size="lg" style="color: white;" />
        </router-link>
      </li>
      <li>
        <router-link to="/lists">
          <font-awesome-icon icon="fa-solid fa-list" fixed-width size="lg" style="color: white;" />
        </router-link>
      </li>
      <li>
        <button @click="addRecipeActive = !addRecipeActive">
          <font-awesome-icon icon="fa-solid fa-plus" size="lg" style="color: white;" />
        </button>
      </li>
      <li>
        <router-link to="/search">
          <font-awesome-icon icon="fa-solid fa-search" fixed-width size="lg" style="color: white;" />
        </router-link>
      </li>
      <li>
        <router-link to="/profile">
          <font-awesome-icon icon="fa-solid fa-user" fixed-width size="lg" style="color: white;" />
        </router-link>
      </li>
    </ul>
  </nav>
  <div v-if="addRecipeActive" class="add-recipe-container">
    <AddRecipe />
  </div>
</template>


<script setup>
import AddRecipe from "@/components/AddRecipe.vue";
import { ref } from 'vue'

const addRecipeActive = ref(false)

</script>


<style scoped>
nav {
  z-index: 999;
  background-color: #4caa80;
  width: 100%;
  position: fixed;
  bottom: 0;
}

nav>ul {
  max-height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

li * {
  font-size: 2rem;
}

li button * {
  font-size: 3rem;
  vertical-align: 0rem;
}

nav button {
  margin: 0;
  padding: 5px 10px 10px;
  width: 100%;
  background-color: #f89397;
  border-radius: 8px;
  border: none;
}

.router-link-active>svg {
  color: #f89397 !important;
}

@media screen and (min-width: 600px) {
  nav {
    position: initial;
  }

  nav button {
    padding: 10px 10px 5px;
  }
}

.add-recipe-container {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  background-image: linear-gradient(black, #4caa80);
  z-index: 99;
}

.add-recipe-container>*{
  margin-bottom: 50%;
  width: min(100%, 600px);
}

</style>
