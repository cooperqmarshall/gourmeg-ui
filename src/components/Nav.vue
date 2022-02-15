<template>
  <nav class="navbar is-primary">
    <div class="navbar-brand">
      <a href="#" class="navbar-item">
        <img src="/Chefhatcat.png" />
        <h1 class="title is-5 has-text">GOURMEG</h1>
      </a>
      <a
        role="button"
        class="navbar-burger"
        :class="{ 'is-active': active }"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="active = !active"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': active }"
    >
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">Home</router-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> More </a>

          <div class="navbar-dropdown">
            <a class="navbar-item"> About </a>
            <a class="navbar-item"> Jobs </a>
            <a class="navbar-item"> Contact </a>
            <hr class="navbar-divider" />
            <a class="navbar-item"> Report an issue </a>
          </div>
        </div>
      </div>
      <div class="navbar-end">
        <router-link
          v-if="this.$store.state.user"
          class="navbar-item"
          to="/profile"
          >Hello {{ this.$store.state.user.username }}</router-link
        >
        <router-link
          v-if="!this.$store.state.user"
          class="navbar-item"
          to="/register"
          >Register</router-link
        >
        <router-link
          v-if="!this.$store.state.user"
          class="navbar-item"
          to="/signin"
          >Sign In</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style scoped>
</style>