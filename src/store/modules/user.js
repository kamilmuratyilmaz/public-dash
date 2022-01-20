import axios from "axios";

export default {
  namespaced: true,
  state: {
    userData: {},
    apiURL: process.env.VUE_APP_SERVER_URL,
  },
  mutations: {
    SET_REGISTERED_USER(state, userData) {
      state.userData = userData;
    },
  },
  actions: {
    register({ state }, userData) {
      return axios
        .post(`${state.apiURL}/user/register`, userData)
        .then((res) => {
          this.$app.$bvToast.toast("Registeration Successful!", {
            toaster: "b-toaster-buttom-center",
          });
          res = userData;
          console.log(res);
          return res.data;
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
    },
  },
  getters: {},
  modules: {},
};
