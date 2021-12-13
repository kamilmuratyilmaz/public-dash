<template>
  <div id="user-settings">
    <h1>THIS IS USER SETTINGS</h1>
    <b-card>
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
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          :label="translate.label.name"
          label-for="name-input"
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
          :label="translate.label.password"
          label-for="password-input"
        >
          <b-form-input
            id="password-input"
            v-model="form.password"
            :placeholder="translate.password"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4">
          <b-form-select
            v-model="form.authorization"
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
export default {
  name: "UserSettings",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        authorization: "",
      },
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
  methods: {
    cancelRouter() {
      this.$router.push("/");
    },
  },
  watch: {
    form() {
      console.log(this.form);
    },
  },
};
</script>

<style></style>
