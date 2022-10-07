<template>
  <div class="block">
    <div class="columns is-centered">
      <div class="column is-6">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">URL:</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input
                  v-model="url"
                  type="text"
                  class="card input"
                  placeholder="Recipe Website URL"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-4" @click="listDropdownActive = true">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">List:</label>
          </div>
          <div
            v-click-outside="clickOutside"
            class="field-body dropdown"
            style="width: 100%"
            :class="{ 'is-active': listDropdownActive }"
          >
            <div class="field" style="width: 100%">
              <div class="control dropdown-trigger card has-icons-right">
                <input
                  v-model="list"
                  type="text"
                  class="input dropdown-input"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                  placeholder="List Name"
                  Name
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
                  <a v-if="list" class="dropdown-item"> + {{ list }} </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="text-align: right" class="column is-1">
        <button
          @click="add_recipe"
          class="button is-light is-primary"
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
      list: "",
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
      return this.$store.state.recipe_lists?.filter((l) =>
        l.name.includes(this.list)
      );
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
