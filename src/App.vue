<template>
  <div>
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
export default {
  name: "App",
  components: { Nav },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* cursor: url("/pizzaslice_1.png"), auto; */
}
</style>
