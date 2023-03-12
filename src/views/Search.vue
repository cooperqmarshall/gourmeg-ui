<template>
  <div>
    <div class="search-container">
      <input v-model="search_term" type="text" name="search">
      <button @click="initSearch">Search</button>
      <p v-if="search_result_recipes">Found {{ search_result_recipes.length }} result{{ search_result_recipes.length === 1 ? '' : 's'}}...</p>
    </div>
    <div class="search-results">
      <RecipeCard v-for="r in search_result_recipes" :recipe="r" :key="r.id" />
    </div>
  </div>
</template>

<script setup>
import RecipeCard from "@/components/RecipeCard.vue";
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore()

const search_term = ref('')
const search_result_recipes = computed(() => store.state.search_result_recipes)

function initSearch() {
  store.dispatch("getSearchResultRecipes", { search_term: search_term.value })
}
</script>

<style scoped>
h1 {
  font-size: 2.5rem;
  text-align: center;
  font-weight: 600;
  color: #363636;
  margin: 1.5rem 0;
}
p {
  margin: 0 1rem;
  width: 1000px;
}
.search-container {
  max-width: 1000px;
  margin: 1rem auto;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

input {
  font-size: 1.2rem;
  width: 90%;
  min-width: 0;
  border-radius: 0.5rem;
  border: 1px solid #e8e8e8;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  padding: 0.4rem 15px;
  flex: 1 0;
}

button {
  margin-left: 6px;
  padding: 8px 12px;
  font-size: 1rem;
  background-color: #f89397;
  border: none;
  border-radius: 5px;
}

.search-results {
  margin: auto;
  max-width: 1400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.search-results>* {
  flex: 1 1 auto;
}

@media screen and (min-width: 769px) {
  .search-results>* {
    flex: 0 0 auto;
  }
}
</style>
