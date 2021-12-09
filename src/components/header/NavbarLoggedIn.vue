<template>
  <b-navbar type="dark" variant="dark">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-form>
        <SelectLanguage />
        <b-button class="mx-2 my-sm-0">{{ $t("user.sign_in") }}</b-button>
        <b-button class="mx-2 my-sm-0">{{ $t("user.register") }}</b-button>
      </b-nav-form>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import SelectLanguage from "./SelectLanguage";
export default {
  name: "NavbarLoggedIn",
  components: {
    SelectLanguage,
  },
};
</script>

<style></style>
