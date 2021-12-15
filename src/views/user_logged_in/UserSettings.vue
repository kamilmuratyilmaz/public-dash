<template>
  <div id="user-settings">
    <UserEdit class="mt-5" />
  </div>
</template>

<script>
export default {
  name: "UserSettings",
  components: {
    UserEdit: () => import("@/components/user_settings/UserEdit"),
  },
  methods: {
    setLanguage() {
      this.commit("simpleGet", ["SET_LANGUAGE"]);
    },
  },
};
</script>

<style></style>
