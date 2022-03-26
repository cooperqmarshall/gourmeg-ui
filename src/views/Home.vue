<template>
  <div class="section">
    <div class="container">
      <h1 class="title is-2 has-text-centered">Home</h1>
      <AddRecipe />
      <div class="columns is-multiline is-centered">
        <RecipeCard v-for="r in recipes" :recipe="r" :key="r.id" />
      </div>
    </div>
  </div>
</template>

<script>
import RecipeCard from "@/components/RecipeCard.vue";
import AddRecipe from "@/components/AddRecipe.vue";
import _ from "lodash";

export default {
  name: "Home",
  components: {
    RecipeCard,
    AddRecipe,
  },
  // data() {
  //  return {
  //  };
  // },
  mounted() {
    this.$store.dispatch("getRecipes");
  },
  computed: {
    recipes() {
      return _.orderBy(this.$store.state.recipes, "id", "desc");
    },
  },
};
</script>

<style scoped></style>
