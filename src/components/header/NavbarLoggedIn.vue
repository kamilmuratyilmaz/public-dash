<template>
  <div id="nav-login">
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand :to="{ path: '/user-name/:dashboard' }">
        {{ userMail }}</b-navbar-brand
      >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-col class="mr-4 ml-4">
              <SelectLanguage />
            </b-col>
          </b-nav-form>
          <b-nav-form>
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
            <b-button
              class="mx-2 my-sm-0"
              @click="buttonFunctions(`user-logout`)"
              >{{ $t("user.logout") }}</b-button
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
import { mapState, mapMutations } from "vuex";
export default {
  name: "NavbarLoggedIn",
  components: {
    SelectLanguage,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("user", ["userMail"]),
  },
  created() {
    if (this.$route.path !== "/user-name/:dashboard")
      this.$router.push("/user-name/:dashboard");
  },
  methods: {
    ...mapMutations("user", ["SET_LOGIN_STATUS"]),
    buttonFunctions(val) {
      switch (val) {
        case "dashboard":
          this.$router.push({
            name: "Dashboard",
            params: { id: ":dashboard" },
          });
          break;
        case "settings":
          this.$router.push({
            name: "UserSettings",
            params: { id: ":settings" },
          });
          break;
        case "user-logout":
          {
            this.$router.push("/");
            this.SET_LOGIN_STATUS(null);
          }
          break;
      }
    },
  },
};
</script>

<style></style>
