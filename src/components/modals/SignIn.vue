<template>
  <div id="sign-in">
    <b-modal
      id="modal-center"
      centered
      v-model="modal"
      :title="translate.title"
      @ok="submitModal"
      @hidden="routeBack"
    >
      <b-form>
        <b-form-group
          id="input-group-1"
          :label="translate.label.email"
          label-for="email-input"
        >
          <b-form-input
            id="email-input"
            v-model="$v.user.email.$model"
            :placeholder="translate.email"
            :state="$v.user.email.$error ? false : null"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          :label="translate.label.password"
          label-for="password-input"
        >
          <b-form-input
            id="password-input"
            v-model="$v.user.password.$model"
            :placeholder="translate.password"
            :state="$v.user.password.$error ? false : null"
          ></b-form-input>
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { login } from "@/mixins/validation.js";
import { mapActions } from "vuex";
export default {
  name: "SignIn",
  mixins: [login],
  data() {
    return {
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
      userData: {},
    };
  },
  methods: {
    ...mapActions("user", ["login"]),
    routeBack() {
      this.$router.push("/");
    },
    submitModal() {
      this.$v.$touch();
      this.userData = {
        email: this.$v.user.email.$model,
        password: this.$v.user.password.$model,
      };
      this.login(JSON.stringify(this.userData));
    },
  },
};
</script>

<style></style>
