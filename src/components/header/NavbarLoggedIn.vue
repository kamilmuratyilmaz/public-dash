<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand href="/">UserName</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-col class="mr-4">
            <SelectLanguage />
          </b-col>
          <b-button class="mx-2 my-sm-0" @click="buttonFunctions(`dashboard`)">{{
            // eslint-disable-next-line prettier/prettier
            $t("dashboard")
          }}</b-button>
          <b-button class="mx-2 my-sm-0" @click="buttonFunctions(`options`)">{{
            $t("user.options")
          }}</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>

    <router-view></router-view>
  </div>
</template>

<script>
import SelectLanguage from "./SelectLanguage";
export default {
  name: "NavbarLoggedIn",
  components: {
    SelectLanguage,
  },
  data() {
    return {};
  },
  methods: {
    buttonFunctions(val) {
      if (val == "dashboard") {
        this.$router.push({
          name: "Dashboard",
          params: { id: "dashboard" },
        });
      } else if (val == "options") {
        this.$router.push({
          name: "UserSettings",
          params: { id: "settings" },
        });
      }
    },
  },
};
</script>

<style></style>
