<template>
  <div id="user-edit">
    <b-card
      id="user-edit-card"
      style="
        display: block;
        margin-left: auto;
        margin-right: auto;
        max-width: 70%;
      "
      bg-variant="info"
      text-variant="white"
    >
      <!-- Email -->
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
          <b-alert :show="$v.user.email.$error" class="alert-email"
            >Email is not valid</b-alert
          >
        </b-form-group>
        <!-- Name -->
        <b-form-group
          id="input-group-2"
          :label="translate.label.name"
          label-for="name-input"
        >
          <b-form-input
            id="name-input"
            v-model="$v.user.name.$model"
            :placeholder="translate.name"
            :state="$v.user.name.$error ? false : null"
          ></b-form-input>
          <b-alert :show="$v.user.name.$error" class="alert-name"
            >Name is not valid</b-alert
          >
        </b-form-group>
        <!-- Password -->
        <b-form-group
          id="input-group-3"
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
        <!-- Role -->
        <b-form-group id="input-group-4">
          <b-form-select
            v-model="$v.user.role.$model"
            :options="options"
            size="sm"
            class="mt-0"
          >
          </b-form-select>
        </b-form-group>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import { register } from "@/mixins/validation.js";
export default {
  name: "UserEdit",
  mixins: [register],
  data() {
    return {
      modal: this.$route.meta.modal,
      translate: {
        title: this.$t("modal.title_register"),
        email: this.$t("modal.email"),
        name: this.$t("modal.name"),
        password: this.$t("modal.password"),
        label: {
          email: this.$t("modal.label.email"),
          name: this.$t("modal.label.name"),
          password: this.$t("modal.label.password"),
        },
      },
      options: ["User", "Admin"],
    };
  },
  methods: {},
};
</script>

<style></style>
