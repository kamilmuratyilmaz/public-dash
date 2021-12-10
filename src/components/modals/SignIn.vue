<template>
  <div id="sign-in">
    <b-modal
      id="modal-center"
      ref="modal"
      centered
      v-model="modal"
      @ok="handleOk"
      title="Sign In"
    >
      <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="email-input"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="email-input"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
            :state="emailState"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
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

        <b-form-group id="input-group-3" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            v-model="form.checked"
            id="checkboxes-3"
            :aria-describedby="ariaDescribedby"
          >
            <b-form-checkbox value="saved">Check me out</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
      </b-form>
    </b-modal>
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
