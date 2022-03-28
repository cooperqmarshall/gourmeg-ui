<template>
  <div class="content">
    <h1>
      <a :href="recipe.url" target="_blank">{{ recipe.name }}</a>
    </h1>
    <p v-html="recipe.ingredients"></p>
    <p v-html="recipe.instructions"></p>
  </div>
</template>

<script>
export default {
  name: "RecipeView",
  computed: {
    recipe() {
      return this.$store.state.recipe_view;
    },
  },
};
</script>

<style></style>
