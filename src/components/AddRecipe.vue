<template>
  <div class="section">
    <div class="columns is-centered">
      <div class="column is-4">
        <input type="text" class="card input" placeholder="http://recipe..." />
      </div>
      <div
        class="dropdown column is-2"
        :class="{ 'is-active': listDropdownActive }"
        @click="listDropdownActive = !listDropdownActive"
      >
        <div class="card dropdown-trigger control has-icons-right">
          <input
            class="input dropdown-input"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
          />
          <span>{{ list }}</span>
          <span class="icon is-right is-small">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <a href="#" class="dropdown-item"> Dropdown item </a>
            <a class="dropdown-item"> Other dropdown item </a>
            <a href="#" class="dropdown-item is-active">
              Active dropdown item
            </a>
            <a href="#" class="dropdown-item"> Other dropdown item </a>
            <hr class="dropdown-divider" />
            <a href="#" class="dropdown-item"> With a divider </a>
          </div>
        </div>
      </div>
      <div class="column is-1">
        <button class="button">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddRecipe",
  data() {
    return {
      list: null,
      listDropdownActive: false,
    };
  },
};
</script>

<style scoped>
</style>