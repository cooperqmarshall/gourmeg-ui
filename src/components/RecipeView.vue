<template>
  <div>
    <a :href="recipe.url" target="_blank">{{ recipe.name }}</a>
    <div v-html="recipe.data"></div>
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
