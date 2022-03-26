<template>
  <div class="column is-4">
    <div @mouseover="hover = true" @mouseleave="hover = false" class="card">
      <div class="card-content">
        <p class="title is-5">
          <a href="test">{{ recipe.name }}</a>
        </p>
        <p class="title is-5">{{ recipe.recipe_list_name }}</p>
      </div>
      <button v-if="hover" @click="delete_recipe" class="delete"></button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RecipeCard",
  props: ["recipe"],
  data() {
    return {
      hover: false,
    };
  },
  methods: {
    async delete_recipe() {
      await axios
        .delete(`${this.$store.state.hostname}/api/v1/recipe?id=${this.recipe.id}`, {
          withCredentials: true,
        })
        .then(() => {
          this.$store.dispatch("getRecipes");
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
          }
        });
    },
  },
};
</script>

<style scoped>
.delete {
  right: 0.5rem;
  position: absolute;
  top: 0.5rem;
}
a {
  color: black;
}
</style>
