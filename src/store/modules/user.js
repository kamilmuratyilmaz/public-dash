import axios from "axios";

export default {
  namespaced: true,
  state: {
    user: null,
    serverURL: process.env.SERVER_USER_REQ_URL,
  },
  mutations: {
    SET_REGISTERED_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    register({ state }, user) {
      return axios.post(`${state.serverURL}/register`, user).then((res) => {
        this.$app.$bvToast.toast("Registeration Successful!", {
          toaster: "b-toaster-buttom-center",
        });
        return res;
      });
    },
  },
  getters: {},
  modules: {},
};
