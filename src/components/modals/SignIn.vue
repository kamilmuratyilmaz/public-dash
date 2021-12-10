<template>
  <div id="sign-in">
    <b-modal
      id="modal-center"
      ref="modal"
      centered
      v-model="modal"
      :title="translate.title"
      @cancel="cancelRouter"
      @ok="cancelRouter"
    >
      <b-form>
        <b-form-group
          id="input-group-1"
          :label="translate.label.email"
          label-for="email-input"
        >
          <b-form-input
            id="email-input"
            v-model="form.email"
            :placeholder="translate.email"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          :label="translate.label.password"
          label-for="password-input"
        >
          <b-form-input
            id="password-input"
            v-model="form.password"
            :placeholder="translate.password"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            v-model="form.checked"
            id="checkboxes-3"
            :aria-describedby="ariaDescribedby"
          >
            <b-form-checkbox value="saved">{{
              translate.remember
            }}</b-form-checkbox>
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
      form: {
        email: "",
        password: "",
        checked: "",
      },
      modal: this.$route.meta.modal,
      translate: {
        title: this.$t("modal.title_sign_in"),
        email: this.$t("modal.email"),
        password: this.$t("modal.password"),
        remember: this.$t("modal.remember"),
        label: {
          email: this.$t("modal.label.email"),
          password: this.$t("modal.label.password"),
        },
      },
    };
  },
  methods: {
    cancelRouter() {
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
