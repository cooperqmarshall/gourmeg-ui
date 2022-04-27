<template>
  <div data-aos="flip-down" class="column is-4">
    <div class="card">
      <div v-if="image" class="card-image">
        <figure class="image is-4by2">
          <img :src="image" />
        </figure>
      </div>
      <div class="card-content">
        <p class="title is-5">
          {{ recipe.name }}
        </p>
        <p class="title is-5">{{ recipe.recipe_list_name }}</p>
        <button @click="focus_recipe(recipe)" class="button recipe-btn">
          Go to Recipe
        </button>
      </div>
      <button @click="delete_recipe" class="delete"></button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RecipeCard",
  props: ["recipe"],
  computed: {
    image() {
      return this.recipe.image_urls
        ? this.recipe.image_urls.slice(1, -1).split(",")[0]
        : "";
    },
  },
  methods: {
    async delete_recipe() {
      await axios
        .delete(
          `${this.$store.state.hostname}/api/v1/recipe?id=${this.recipe.id}`,
          {
            withCredentials: true,
          }
        )
        .then(() => {
          this.$store.dispatch("getRecipes");
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
          }
        });
    },
    focus_recipe(recipe) {
      this.$store.commit("set_recipe_view", recipe);
      this.$router.push("lists");
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
img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: 100% 50%;
}
p {
  margin-bottom: 5px !important;
}
</style>
