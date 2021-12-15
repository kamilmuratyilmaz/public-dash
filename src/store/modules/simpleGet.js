export default {
  namespaced: true,
  state: {
    selected: null,
  },
  mutations: {
    SET_SELECTED_FACTORY(state, factory) {
      state.selected = factory;
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
