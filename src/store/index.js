import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    selected: [],
  },
  mutations: {
    SET_SELECTED_FACTORY(state, factory) {
      state.selected = factory;
    },
  },
  actions: {
    getFactory({ commit }, factory) {
      commit("SET_SELECTED_FACTORY", factory);
    },
  },
  getters: {},
  modules: {},
});
