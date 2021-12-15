import Vue from "vue";
import Vuex from "vuex";

import simpleGet from "./modules/simpleGet";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    simpleGet,
    user,
  },
});
