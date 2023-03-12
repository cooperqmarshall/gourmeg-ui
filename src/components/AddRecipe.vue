<template>
  <div>
    <h1 v-if="!recipe">Add Recipe</h1>
    <h1 v-else>Recipe Added!</h1>
    <div v-if="!recipe" class="input-wrapper">
      <input v-model="url" type="text" class="input-url" placeholder="URL" />
      <input v-model="list" @focusin="dropdownActive = true" @focusout="offFocus" type="text" class="input-list" aria-haspopup="true"
        aria-controls="dropdown-menu" placeholder="List Name">
      <button @click="add_recipe">
        <span v-if="!loading">Add</span>
        <font-awesome-icon v-else icon="fa-spinner" pulse fixed-width size="lg" style="color: white;" />
      </button>
    </div>
      <div v-if="dropdownActive" class="dropdown-content">
        <a v-for="item in lists" @click="list = item.name; dropdownActive = false;" :key="item.id" class="dropdown-item">
          {{ item.name }}
        </a>
        <a v-if="list" class="dropdown-item"> + {{ list }} </a>
      </div>
    <p class="help">{{ error.error }}</p>
    <div class="recipe-card-wrapper">
      <RecipeCard @navigate-to-recipe="$emit('closeOverlay')" v-if="recipe" :recipe=recipe data-aos="zoom-in-up" style="flex: 1 1 auto;" />
    </div>
    <div style="text-align:center;">
      <button v-if="recipe" @click="recipe = null" data-aos="fade-zoom-in">
        <font-awesome-icon icon="fa-rotate-right" fixed-width size="lg" style="color: white;" />
        Add Another
      </button>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted, computed } from "vue";
import { useStore } from 'vuex';
import RecipeCard from "@/components/RecipeCard.vue";

const store = useStore()
onMounted(() => {
  store.dispatch("getLists", { withRecipes: false });
})

function offFocus() {
  setTimeout(() => dropdownActive.value = false, 100)
}

const dropdownActive = ref(false)

const list = ref("")
const lists = computed(() => {
  return store.state.recipe_lists?.filter((l) =>
    l.name.includes(list.value)
  );
})

const url = ref("")
const loading = ref(false)
const error = ref({ field: "", error: "" })
const recipe = ref(null)
async function add_recipe() {
  loading.value = true
  await axios
    .post(
      `${store.state.hostname}/api/v2/recipe`,
      {
        url: url.value,
        recipe_list_name: list.value,
      },
      { withCredentials: true }
    )
    .then((res) => {
      recipe.value = res.data
      url.value = "";
      list.value = "";
      error.value = {
        field: "",
        error: "",
      };
      store.dispatch("getRecipes");
      store.dispatch("getLists", { withRecipes: true });
    })
    .catch((e) => {
      if (e.response) {
        console.log(e.response.data);
        error.value = e.response.data
      }
    });
    loading.value = false
}
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  color: white;
  margin: 1.5rem 0;
}

.input-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
}

.input-url{
  flex-grow: 1;
}

.input-list{
  flex: 1
}

input {
  font-size: 1.2rem;
  width: 100%;
  min-width: 0;
  border-radius: 0.5rem;
  border: 1px solid #e8e8e8;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  padding: 0.4rem 2.5%;
}

button {
  padding: 8px 12px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background-color: #f89397;
  border: none;
  border-radius: 5px;
}

.dropdown-content {
  position: absolute;
}

.dropdown-content>a {
  font-size: 1rem;
}

button {
  font-size: 1.2rem;
}

.help {
  color: pink;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
}

.recipe-card-wrapper {
  display: flex;
}
</style>
