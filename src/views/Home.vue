<template>
  <div class="login" v-if="isLogin == true">
    <NavbarLoggedIn />
  </div>

  <div class="logout" v-else>
    <Navbar />
    <b-container fluid>
      <b-row>
        <b-col class="mt-5">
          <h1>{{ $t("head") }}</h1>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-img-lazy
            rounded
            center
            class="mt-5"
            src="@/assets/homepage_renewable.jpeg"
            fluid
            alt="homepage_renewable"
          ></b-img-lazy>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from "../components/header/Navbar";
import NavbarLoggedIn from "../components/header/NavbarLoggedIn";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Navbar,
    NavbarLoggedIn,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("user", ["token"]),
    isLogin() {
      return this.token == null ? false : true;
    },
  },
};
</script>
