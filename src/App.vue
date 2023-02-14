<template>
  <div>
    <Nav />
    <router-view style="min-height: 100vh" />
    <Footer />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Footer from "@/components/Footer.vue";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "App",
  components: { Nav, Footer },
  mounted() {
    AOS.init({ once: true, offset: 60, duration: 200 });
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

a,
button {
  cursor: url("/whole_pizza.png"), auto !important;
}
</style>
