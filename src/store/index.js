import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selected: null,
  },
  mutations: {
    SET_SELECTED_FACTORY(state, factory) {
      state.selected.push(factory);
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
