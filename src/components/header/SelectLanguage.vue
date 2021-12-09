<template>
  <div class="language-changer">
    <b-form-select v-model="$i18n.locale" :options="languages"></b-form-select>
  </div>
</template>

<script>
export default {
  name: "SelectLanguage",
  data() {
    return {
      languages: Object.keys(this.$i18n.messages),
    };
  },
};
</script>
