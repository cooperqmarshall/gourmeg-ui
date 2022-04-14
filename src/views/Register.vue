<template>
  <div class="section">
    <div class="container">
      <h1 class="title has-text-centered">Register</h1>
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
      <span
        ><p>already have an account?</p>
        <button
          @click="this.$router.push('/signin')"
          class="button is-light is-link right"
        >
          Sign in
        </button>
      </span>
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
.right {
  float: right;
}
span {
  float: right;
  display: flex;
  align-items: center;
}
p {
  padding-right: 5px;
}
</style>
