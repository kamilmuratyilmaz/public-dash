<template>
  <div id="register">
    <b-modal v-model="modal">Register</b-modal>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      modal: this.$route.meta.modal,
    };
  },
};
</script>

<style></style>
