<template>
  <div class="logout" v-if="user == 'login'">
    <NavbarLoggedIn />
  </div>

  <div class="login" v-else>
    <Navbar />
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
