<template>
  <div class="section">
    <div class="container">
      <h1 class="title is-2 has-text-centered">Lists</h1>
      <AddRecipe />
      <div class="columns is-mobile">
        <div v-if="!sidebarVisible" class="list-menu">
          <span
            @click="sidebarVisible = !sidebarVisible"
            class="icon has-text-primary is-size-5"
          >
            <i class="fas fa-angle-double-right pt-5"></i>
          </span>
        </div>
        <div
          class="column is-three-fifths-mobile is-one-quarter-tablet list-menu"
          v-if="sidebarVisible"
        >
          <div class="menu">
            <div class="menu-label" style="display: flex; align-items: center">
              <p style="flex-grow: 3">Categories</p>
              <span
                @click="sidebarVisible = !sidebarVisible"
                class="icon has-text-primary pr-3 is-size-5"
              >
                <i class="fas fa-angle-double-left"></i>
              </span>
            </div>
            <ul v-if="recipe_lists != null" class="menu-list">
              <ListMenu
                v-for="list in recipe_lists"
                :recipe_list="list"
                :key="list.id"
              />
            </ul>
          </div>
        </div>
        <RecipeView data-aos="zoom-in-down" class="column is-full-mobile" />
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
  data() {
    return {
      sidebarVisible: true,
    };
  },
  components: { ListMenu, RecipeView, AddRecipe },
  computed: {
    recipe_lists() {
      return this.$store.state.recipe_lists;
    },
  },
  mounted() {
    this.$store.dispatch("getLists", { withRecipes: true });
  },
};
</script>

<style scoped>
.list-menu {
  min-height: 50vh;
  position: sticky;
  top: 0px;
  align-self: flex-start;
}
</style>
