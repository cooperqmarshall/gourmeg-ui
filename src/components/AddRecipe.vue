<template>
  <div>
    <h1>Add Recipe</h1>
    <input v-model="url" type="text" class="card input" placeholder="URL" />
    <div @focusout="dropdownActive = false">
      <input v-model="list" @focusin="dropdownActive = true" type="text" class="" aria-haspopup="true"
        aria-controls="dropdown-menu" placeholder="List Name">
      <div v-if="dropdownActive" class="dropdown-content">
        <a v-for="item in lists" @click="list = item.name; dropdownActive = false;" :key="item.id" class="dropdown-item">
          {{ item.name }}
        </a>
        <a v-if="list" class="dropdown-item"> + {{ list }} </a>
      </div>
    </div>
    <button @click="add_recipe">
      Add
    </button>
    <p class="help">{{ error.error }}</p>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted, computed } from "vue";
import { useStore } from 'vuex';

const store = useStore()
onMounted(() => {
  store.dispatch("getLists", { withRecipes: false });
})


const list = ref("")
const dropdownActive = ref(false)
const url = ref(null)
const error = ref({ field: "", error: "" })

const lists = computed(() => {
  return store.state.recipe_lists?.filter((l) =>
    l.name.includes(list.value)
  );
})

async function add_recipe() {
  await axios
    .post(
      `${store.state.hostname}/api/v2/recipe`,
      {
        url: url.value,
        recipe_list_name: list.value,
      },
      { withCredentials: true }
    )
    .then(() => {
      url.value = "";
      list.value = "";
      error.value = {
        field: "",
        error: "",
      };
      store.dispatch("getRecipes");
      store.dispatch("getLists", { withRecipes: true });
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
        error.value = error.response.data;
      }
    });
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

input {
  font-size: 1.2rem;
  width: 100%;
  min-width: 0;
  border-radius: 0.5rem;
  border: 1px solid #e8e8e8;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  padding: 0.4rem 5%;
  margin: 0.5rem 0;
}

button {
  padding: 8px 12px;
  font-size: 1rem;
  background-color: #f89397;
  border: none;
  border-radius: 5px;
}

.dropdown-control:focus {
  background: red;
}
</style>
