import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      hostname: process.env.VUE_APP_API_URL,
      user: null,
      recipe_lists: null,
      recipes: null,
      recipe_view: { id: null },
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
    getUser({ commit }) {
      return axios
        .get(`${this.state.hostname}/api/v1/me`, { withCredentials: true })
        .then((response) => {
          commit("login", response.data);
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
  },

  mutations: {
    login(state, user) {
      state.user = user;
    },
    set_recipe_lists(state, lists) {
      state.recipe_lists = lists;
    },
    set_recipes(state, recipes) {
      state.recipes = recipes;
    },
    set_recipe_view(state, recipe) {
      state.recipe_view = recipe;
    },
  },
});

export default store;
