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
        <router-link class="navbar-item" to="/lists">Lists</router-link>
      </div>
      <div class="navbar-end">
        <div
          v-if="this.$store.state.user"
          class="navbar-item has-dropdown is-hoverable"
        >
          <a class="navbar-link">
            Hello {{ this.$store.state.user.username }}
          </a>
          <div class="navbar-dropdown">
            <router-link class="navbar-item" to="/profile"
              >Profile
            </router-link>
            <a class="navbar-item"> Settings </a>
            <hr class="navbar-divider" />
            <a class="navbar-item"> Logout </a>
          </div>
        </div>
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
        >
          Sign In
        </router-link>
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
.navbar-menu,
.navbar-dropdown {
  background: #00d1b2;
}
.navbar-item,
.navbar-link {
  color: white;
}
</style>
