<template>
  <div class="logout" v-if="isLogin == 'login'">
    <NavbarLoggedIn />
  </div>

  <div class="login" v-else>
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

export default {
  name: "Home",
  components: {
    Navbar,
    NavbarLoggedIn,
  },
  data() {
    return {
      isLogin: "login",
    };
  },
};
</script>
