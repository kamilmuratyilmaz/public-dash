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

        <b-form-group id="input-group-3" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            v-model="$v.user.checked.$model"
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
    };
  },
  methods: {
    ...mapActions("user", ["login"]),
    routeBack() {
      setTimeout(() => this.$router.push("/"), 2500);
    },
    submitModal() {
      this.$v.$touch();
      this.login;
      this.$bvToast.toast(this.$t("toaster.login_message"), {
        title: `${this.$t("toaster.title")} ${this.$v.user.email.$model}`,
        toaster: "b-toaster-top-center",
        variant: "primary",
        solid: true,
      });
    },
  },
};
</script>

<style></style>
