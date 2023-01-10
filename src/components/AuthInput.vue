<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control mb-2 has-icons-right has-icons-left">
      <input
        class="input"
        :class="{ 'is-danger': error.field === label }"
        :type="label === 'password' && !passwordShow ? 'password' : 'text'"
        :value="value"
        :placeholder="placeholder ? placeholder : label"
        @input="$emit('update:value', $event.target.value)"
      />
      <span class="icon is-small is-left">
        <i :class="`fas ${icon}`"></i>
      </span>
      <span
        v-if="label == 'password'"
        class="icon is-small is-right showPassword"
        @click="passwordShow = !passwordShow"
      >
        <i
          class="fas"
          :class="{ 'fa-eye': !passwordShow, 'fa-eye-slash': passwordShow }"
        ></i>
      </span>
      <span
        v-if="error.field === label"
        class="icon is-small is-right has-text-danger"
      >
        <i class="fas fa-exclamation-triangle"></i>
      </span>
      <p v-if="error.field === label" class="help is-danger">
        {{ error.error }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthInput",
  props: ["label", "placeholder", "icon", "error", "value"],
  emits: ["update:value"],
  data() {
    return {
      passwordShow: false,
    };
  },
};
</script>

<style scoped>
.showPassword {
  pointer-events: auto !important;
}
</style>
