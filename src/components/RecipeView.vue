<template>
  <div class="content">
    <img v-if="image" :src="image" />
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
    image() {
      return this.recipe.image_urls
        ? this.recipe.image_urls.slice(1, -1).split(",")[0]
        : "";
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  height: 250px;
  object-fit: cover;
  object-position: 100% 50%;
}
</style>
