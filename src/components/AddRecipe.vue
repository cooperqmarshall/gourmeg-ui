<template>
  <div class="section">
    <div class="columns is-centered">
      <div class="column is-4">
        <input
          v-model="url"
          type="text"
          class="card input"
          placeholder="http://recipe..."
        />
      </div>
      <div
        class="dropdown column is-2"
        :class="{ 'is-active': listDropdownActive }"
        @click="listDropdownActive = true"
      >
        <div
          v-click-outside="clickOutside"
          class="card dropdown-trigger control has-icons-right"
        >
          <input
            v-model="list"
            class="input dropdown-input"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
          />
          <span class="icon is-right is-small">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <a
              v-for="item in lists"
              @click="this.list = item.name"
              :key="item.id"
              class="dropdown-item"
            >
              {{ item.name }}
            </a>
            <hr v-if="list" class="dropdown-divider" />
            <a v-if="list" class="dropdown-item"> + {{ list }} </a>
          </div>
        </div>
      </div>
      <div class="column is-1">
        <button
          @click="add_recipe"
          class="button"
          :class="{ 'is-loading': addLoading }"
        >
          Add
        </button>
      </div>
    </div>
    <p class="help is-danger">{{ error.error }}</p>
  </div>
</template>

<script>
import axios from "axios";
import vClickOutside from "click-outside-vue3";

export default {
  name: "AddRecipe",
  data() {
    return {
      list: null,
      url: null,
      listDropdownActive: false,
      addLoading: false,
      error: {
        field: "",
        error: "",
      },
    };
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  mounted() {
    this.$store.dispatch("getLists", { withRecipes: false });
  },
  computed: {
    lists() {
      return this.$store.state.recipe_lists;
    },
  },
  methods: {
    clickOutside() {
      this.listDropdownActive = false;
    },
    async add_recipe() {
      this.addLoading = true;
      await axios
        .post(
          `${this.$store.state.hostname}/api/v1/recipe`,
          {
            url: this.url,
            list: this.list,
          },
          { withCredentials: true }
        )
        .then(() => {
          this.url = "";
          this.list = "";
          this.error = {
            field: "",
            error: "",
          };
          this.$store.dispatch("getRecipes");
          this.$store.dispatch("getLists", { withRecipes: true });
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            this.error = error.response.data;
          }
        });
      this.addLoading = false;
    },
  },
};
</script>

<style scoped>
p {
  text-align: center;
}
</style>
