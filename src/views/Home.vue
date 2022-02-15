<template>
  <div class="section">
    <div class="container">
      <h1 class="title is-2 has-text-centered">Home</h1>
      <AddRecipe />
      <div class="columns is-centered">
        <RecipeCard
          v-for="r in recipes"
          v-bind:recipe="r"
          v-bind:key="r.title"
        />
      </div>
    </div>
  </div>
</template>



<script>
import RecipeCard from "@/components/RecipeCard.vue";
import AddRecipe from "@/components/AddRecipe.vue";

export default {
  name: "Home",
  components: {
    RecipeCard,
    AddRecipe,
  },
  data() {
    return {
      recipes: [
        { title: "Macaroni Pasta" },
        { title: "Lemon Cream Pasta" },
        { title: "Pizza" },
      ],
    };
  },
};
</script>

<style scoped>
</style>