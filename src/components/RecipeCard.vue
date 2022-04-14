<template>
  <div data-aos="flip-down" class="column is-4">
    <div @mouseover="hover = true" @mouseleave="hover = false" class="card">
      <a @click="focus_recipe(recipe)"
        ><div class="card-content">
          <img v-if="image" :src="image" />
          <p class="title is-5">
            {{ recipe.name }}
          </p>
          <p class="title is-5">{{ recipe.recipe_list_name }}</p>
        </div>
      </a>
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
</style>
