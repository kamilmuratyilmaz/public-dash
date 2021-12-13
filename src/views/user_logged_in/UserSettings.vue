<template>
  <div id="user-settings">
    <h1>THIS IS USER SETTINGS</h1>
    <UserEdit />
  </div>
</template>

<script>
import UserEdit from "@/components/user_settings/UserEdit";
export default {
  name: "UserSettings",
  components: {
    UserEdit,
  },
};
</script>

<style></style>
