import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import simpleGet from "./modules/simpleGet";
import user from "./modules/user";

Vue.use(Vuex);

axios.defaults.baseURL = process.env.VUE_APP_SERVER_URL;

export default new Vuex.Store({
  modules: {
    simpleGet,
    user,
  },
});
