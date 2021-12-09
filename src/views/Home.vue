<template>
  <div class="logout" v-if="user == 'login'">
    <NavbarLoggedIn />
  </div>

  <div class="login" v-else>
    <Navbar />
    <b-img-lazy
      center
      class="mt-5"
      src="@/assets/homepage_renewable.jpeg"
      fluid
      alt="Responsive image"
    ></b-img-lazy>
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
      user: "login",
    };
  },
};
</script>
