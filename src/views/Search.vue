<template>
  <div>
    <h1>Search</h1>
    <p><input type="text" name="search" id="search"></p>
  </div>
</template>

<script setup>

</script>

<style scoped>
h1 {
  font-size: 2.5rem;
  text-align: center;
  font-weight: 600;
  color: #363636;
  margin: 1.5rem 0;
}

p {
  text-align: center;
  margin: 1rem
}

input {
  width: 95%;
  min-width: 0;
  border-radius: 0.5rem;
  border: 1px solid #e8e8e8;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  padding: 0.5rem 5%;
}
</style>
