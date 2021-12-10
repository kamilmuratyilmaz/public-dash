<template>
  <div id="sign-in">
    <b-modal v-model="modal">Sign In</b-modal>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      modal: this.$route.meta.modal,
    };
  },
};
</script>

<style></style>
