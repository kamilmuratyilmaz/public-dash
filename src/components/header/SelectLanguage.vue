<template>
  <div class="language-changer">
    <b-nav-item-dropdown>
      <template #button-content>
        <b-img :src="require(`@/assets/${langGet}.svg`)"></b-img>
        <span> {{ langGet.toUpperCase() }} </span>
      </template>
      <b-dropdown-item-button
        v-for="lang in languages"
        :key="lang"
        @click="langSet(lang)"
      >
        <b-img :src="require(`@/assets/${lang}.svg`)" width="40%"></b-img>
        {{ lang.toUpperCase() }}
      </b-dropdown-item-button>
    </b-nav-item-dropdown>
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
  computed: {
    langGet() {
      return this.$i18n.locale;
    },
  },
  methods: {
    langSet(lang) {
      this.$i18n.locale = lang;
      return lang;
    },
  },
};
</script>
