<template>
  <div class="column is-4">
    <div class="card">
      <div class="card-content">
        <p class="title is-5">{{ recipe.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeCard",
  props: ["recipe"],
};
</script>

<style scoped>
</style>
