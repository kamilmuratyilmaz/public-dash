export default {
  namespaced: true,
  state: {
    selected: null,
    language: null,
  },
  mutations: {
    SET_SELECTED_FACTORY(state, factory) {
      state.selected = factory;
    },
    SET_LANGUAGE(state) {
      state.language = this.$i18n.locale;
      console.log(state.language);
    },
  },
  actions: {
    getFactory({ commit }, factory) {
      commit("SET_SELECTED_FACTORY", [factory]);
    },
  },
  getters: {},
  modules: {},
};
