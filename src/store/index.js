import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      hostname: process.env.VUE_APP_API_URL,
      user: null,
      recipe_lists: null,
      recipes: null,
      search_result_recipes: null,
      recipe_view: { id: null },
      recipe_view_timer: null,
    };
  },
  actions: {
    getLists({ commit }, { withRecipes }) {
      axios
        .get(`${this.state.hostname}/api/v1/recipe_lists`, {
          params: { withRecipes },
          withCredentials: true,
        })
        .then((response) => {
          commit("set_recipe_lists", response.data.recipe_lists);
        });
    },
    getRecipes({ commit }) {
      axios
        .get(`${this.state.hostname}/api/v1/recipes`, { withCredentials: true })
        .then((response) => {
          commit("set_recipes", response.data.recipes);
        });
    },
    getSearchResultRecipes({ commit }, { search_term }) {
      axios
        .get(`${this.state.hostname}/api/v2/search?term=${search_term}`, { withCredentials: true })
        .then((response) => {
          commit("set_search_result_recipes", response.data.recipes);
        });
    },
    getUser({ commit }) {
      return axios
        .get(`${this.state.hostname}/api/v1/me`, { withCredentials: true })
        .then((response) => {
          commit("set_user", response.data);
        })
        .catch(() => {
          // not authorized
        });
    },
    deleteRecipeList(_, { id }) {
      console.log(id);
      return axios
        .delete(`${this.state.hostname}/api/v1/recipe_list/${id}`, {
          withCredentials: true,
        })
        .then((res) => console.log(res));
    },
    logout({ commit }) {
      return axios
        .get(`${this.state.hostname}/api/v1/logout`, { withCredentials: true })
        .then(() => commit("set_user", null))
        .catch((err) => console.log(err));
    },
  },

  mutations: {
    set_user(state, user) {
      state.user = user;
    },
    set_recipe_lists(state, lists) {
      state.recipe_lists = lists;
    },
    set_recipes(state, recipes) {
      state.recipes = recipes;
    },
    set_search_result_recipes(state, search_result_recipes) {
      state.search_result_recipes = search_result_recipes;
    },
    set_recipe_view(state, recipe) {
      clearTimeout(state.recipe_view_timer);
      state.recipe_view_timer = setTimeout(
        () =>
          axios.put(
            `${this.state.hostname}/api/v1/recipe_view`,
            { id: recipe.id },
            { withCredentials: true }
          ),
        15 * 1000
      );
      state.recipe_view = recipe;
    },
  },
});

export default store;
