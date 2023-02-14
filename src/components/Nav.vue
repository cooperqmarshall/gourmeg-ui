<template>
  <!--
  <nav class="navbar is-primary">
    <div class="navbar-brand">
      <a href="#" class="navbar-item">
        <img src="/Chefhatcat.png" />
        <h1 class="title is-5 has-text">GOURMEG</h1>
      </a>
      <a role="button" class="navbar-burger" :class="{ 'is-active': active }" aria-label="menu" aria-expanded="false"
        data-target="navbarBasicExample" @click="active = !active">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': active }">
      <div class="navbar-start">
        <router-link class="navbar-item" @click="active = !active" to="/">Home</router-link>
        <router-link class="navbar-item" @click="active = !active" to="/lists">Lists</router-link>
        <router-link class="navbar-item" @click="active = !active" to="/about">About</router-link>
      </div>
      <div class="navbar-end">
        <div v-if="this.$store.state.user" class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Hello {{ this.$store.state.user.username }}
          </a>
          <div class="navbar-dropdown">
            <router-link class="navbar-item" @click="active = !active" to="/profile">Profile
            </router-link>
            <a class="navbar-item" @click="active = !active"> Settings </a>
            <hr class="navbar-divider" />
            <a class="navbar-item" @click="logout"> Logout </a>
          </div>
        </div>
        <router-link v-if="!this.$store.state.user" class="navbar-item" @click="active = !active"
          to="/register">Register</router-link>

        <router-link v-if="!this.$store.state.user" class="navbar-item" @click="active = !active" to="/signin">
          Sign In
        </router-link>
      </div>
    </div>
  </nav>
  -->
  <nav>
    <ul>
      <li>
        <router-link @click="active = !active" to="/">
          <font-awesome-icon icon="fa-solid fa-home" fixed-width size="lg" style="color: white;" />
        </router-link>
      </li>
      <li>
        <router-link @click="active = !active" to="/lists">
          <font-awesome-icon icon="fa-solid fa-list" fixed-width size="lg" style="color: white;" />
        </router-link>
      </li>
      <li>
        <button @click="active = !active">
          <font-awesome-icon icon="fa-solid fa-plus" size="lg" style="color: white;" />
        </button>
      </li>
      <li>
        <router-link @click="active = !active" to="/search">
          <font-awesome-icon icon="fa-solid fa-search" fixed-width size="lg" style="color: white;" />
        </router-link>
      </li>
      <li>
        <router-link @click="active = !active" to="/profile">
          <font-awesome-icon icon="fa-solid fa-user" fixed-width size="lg" style="color: white;" />
        </router-link>
      </li>
    </ul>
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
  methods: {
    async logout() {
      this.active = !this.active;
      await this.$store.dispatch("logout");
      this.$router.push("/about");
    },
  },
};
</script>


<style scoped>
nav {
  z-index: 999;
  background-color: #4caa80;
  width: 100%;
  position: fixed;
  bottom: 0;
}

nav>ul {
  max-height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

li * {
  font-size: 2rem;
}

li button * {
  font-size: 3rem;
  vertical-align: 0rem;
}

nav button {
  margin: 0;
  padding: 5px 10px 10px;
  width: 100%;
  background-color: #f89397;
  border-radius: 8px;
  border: none;
}

@media screen and (min-width: 600px) {
  nav {
    position: initial;
  }

  nav button {
    padding: 10px 10px 5px;
  }
}
</style>
