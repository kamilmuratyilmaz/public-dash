<template>
  <div id="nav-login">
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand :to="{ path: '/user-name/dashboard' }"
        >UserName</b-navbar-brand
      >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-col class="mr-4 ml-4">
              <SelectLanguage />
            </b-col>
            <b-button
              class="mx-2 my-sm-0"
              @click="buttonFunctions(`dashboard`)"
              >{{ $t("dashboard") }}</b-button
            >
            <b-button
              class="mx-2 my-sm-0"
              @click="buttonFunctions(`settings`)"
              >{{ $t("user.settings") }}</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
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
      } else if (val == "settings") {
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
