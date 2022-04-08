<template>
  <div class="section">
    <div class="container">
      <h1 class="title has-text-centered">Register</h1>
      <h2 class="subtitle has-text-centered">Subtitle</h2>
      <div class="mb-4">
        <AuthInput
          :label="'email'"
          :icon="'fa-envelope'"
          :placeholder="'someone@something.com'"
          :error="error"
          v-model:value="email"
        />
        <AuthInput
          :label="'username'"
          :icon="'fa-user'"
          :error="error"
          v-model:value="username"
        />
        <AuthInput
          :label="'password'"
          :icon="'fa-key'"
          :error="error"
          v-model:value="password"
        />
      </div>
      <button
        @click="submit"
        class="button is-info"
        :class="{ 'is-loading': isLoading }"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import AuthInput from "@/components/AuthInput.vue";
import axios from "axios";

export default {
  components: { AuthInput },
  name: "Register",
  data() {
    return {
      email: "",
      username: "",
      password: "",
      error: {
        field: "",
        message: "",
      },
      isLoading: false,
      user: null,
    };
  },
  methods: {
    submit() {
      this.isLoading = true;
      axios
        .post(`${this.$store.state.hostname}/api/v1/register`, {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          axios
            .post(
              `${this.$store.state.hostname}/api/v1/signin`,
              {
                username: this.username,
                password: this.password,
              },
              { withCredentials: true }
            )
            .then((response) => {
              this.$store.commit("set_user", response.data);
              this.$router.push("/");
            })
            .catch(() => {
              this.$router.push("/signin");
            });
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            this.error = error.response.data;
          }
        });
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 500px !important;
}
</style>
