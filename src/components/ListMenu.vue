<template>
  <li>
    <a
      style="display: flex; align-items: center"
      @click="this.isDropDown = !isDropDown"
    >
      <span class="icon has-text-primary"
        ><i
          class="fas"
          :class="{ 'fa-caret-down': !isDropDown, 'fa-caret-up': isDropDown }"
        ></i
      ></span>
      <div style="flex-grow: 3">{{ recipe_list.name }}</div>
      <div>
        <span v-if="isDropDown" class="icon"><i class="fas fa-pen"></i></span>
        <button
          v-if="isDropDown"
          @click="delete_recipe_list"
          class="delete"
        ></button>
      </div>
    </a>
    <ul v-if="isDropDown">
      <li
        v-for="recipe in recipe_list.recipes"
        :key="recipe.id"
        @click="focus_recipe(recipe)"
      >
        <a :class="{ 'is-active': recipe_view_id == recipe.id }">{{
          recipe.name
        }}</a>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["recipe_list"],
  data() {
    return {
      isDropDown: false,
      list_focus: true,
    };
  },
  methods: {
    focus_recipe(recipe) {
      this.$store.commit("set_recipe_view", recipe);
    },
    async delete_recipe_list() {
      console.log(this.recipe_list.id);
      await this.$store.dispatch("deleteRecipeList", {
        id: this.recipe_list.id,
      });
      this.$store.dispatch("getLists", { withRecipes: true });
    },
  },
  computed: {
    recipe_view_id() {
      return this.$store.state.recipe_view.id;
    },
  },
  beforeMount() {
    this.list_focus = true;
  },
  updated() {
    if (this.list_focus && this.recipe_list.recipes) {
      console.log("check");
      if (this.recipe_list.recipes.find((r) => r.id === this.recipe_view_id)) {
        this.isDropDown = true;
      }
      this.list_focus = false;
    }
  },
};
</script>

<style>
.rotate {
  transform: rotate(180);
}
</style>
