<template>
  <div id="register">
    <b-modal
      id="modal-center"
      ref="modal"
      centered
      v-model="modal"
      @ok="handleOk"
      title="Register"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="email-input"
        >
          <b-form-input
            id="email-input"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Your Name:"
          label-for="name-input"
          :invalid-feedback="invalidFeedback"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="form.name"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Your Password:"
          label-for="password-input"
        >
          <b-form-input
            id="password-input"
            v-model="form.password"
            placeholder="Enter Password"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
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
