<template>
  <div class="section">
    <div class="container">
      <AddRecipe />
      <div class="columns">
        <div class="column is-one-third">
          <div class="menu">
            <p class="menu-label">Categories</p>
            <ul class="menu-list">
              <ListMenu
                v-for="list in recipe_lists"
                :recipe_list="list"
                :key="list.id"
              />
            </ul>
          </div>
        </div>
        <RecipeView class="column is-two-thirds" />
      </div>
    </div>
  </div>
</template>

<script>
import ListMenu from "@/components/ListMenu.vue";
import RecipeView from "@/components/RecipeView.vue";
import AddRecipe from "@/components/AddRecipe.vue";

export default {
  name: "Lists",
  components: { ListMenu, RecipeView, AddRecipe },
  mounted() {
    this.$store.dispatch("getLists", { withRecipes: true });
  },
  computed: {
    recipe_lists() {
      return this.$store.state.recipe_lists;
    },
  },
};
</script>

<style></style>
