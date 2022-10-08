<template>
  <div class="section">
    <div class="container">
      <h1 class="title is-2 has-text-centered">Home</h1>
      <AddRecipe />
      <div class="block" style="display: flex; align-items: center">
        <div
          class="dropdown"
          @click="listDropdownActive = !listDropdownActive"
          :class="{ 'is-active': listDropdownActive }"
        >
          <div class="dropdown-trigger">
            <button
              class="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu"
            >
              <span>{{ this.sort == "views" ? "Most Viewed" : "Newest" }}</span>
              <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <a href="#" @click="this.sort = 'views'" class="dropdown-item"
                >Most Viewed</a
              >
              <a href="#" @click="this.sort = 'id'" class="dropdown-item"
                >Newest</a
              >
            </div>
          </div>
        </div>
        <span
          @click="this.order = this.order == 'up' ? 'down' : 'up'"
          class="icon is-size-5"
          style="padding-left: 0.5rem"
        >
          <i class="fas" :class="'fa-sort-amount-' + this.order"></i>
        </span>
      </div>
      <div class="columns is-multiline is-centered">
        <RecipeCard v-for="r in recipes" :recipe="r" :key="r.id" />
      </div>
    </div>
  </div>
</template>

<script>
import RecipeCard from "@/components/RecipeCard.vue";
import AddRecipe from "@/components/AddRecipe.vue";
import _ from "lodash";

export default {
  name: "Home",
  components: {
    RecipeCard,
    AddRecipe,
  },
  data() {
    return { listDropdownActive: false, sort: "new", order: "down" };
  },
  mounted() {
    this.$store.dispatch("getRecipes");
  },
  computed: {
    recipes() {
      console.log("here");
      return _.orderBy(
        this.$store.state.recipes,
        this.sort,
        this.order == "up" ? "desc" : "asc"
      );
    },
  },
};
</script>

<style scoped></style>
