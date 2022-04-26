<template>
  <div>
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "App",
  components: { Nav },
  mounted() {
    AOS.init({ once: true });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: url("/pizzaslice_1.png"), auto;
}
a {
  cursor: url("/whole_pizza.png"), auto;
}
</style>
