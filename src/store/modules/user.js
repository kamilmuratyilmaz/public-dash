import axios from "axios";

export default {
  namespaced: true,
  state: {
    userData: {},
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  },
  mutations: {
    SET_REGISTERED_USER(state, userData) {
      state.userData = userData;
    },
  },
  actions: {
    register({ state }, userData) {
      return axios
        .post("user/register", Object.values(userData), {
          headers: { ...state.headers },
        })
        .then((res) => {
          this.$app.$bvToast.toast("Registeration Successful!", {
            toaster: "b-toaster-buttom-center",
          });
          console.log(res.data);
          return res.data;
        })
        .catch((err) => {
          console.log(err.request);
          return err;
        });
    },
  },
  getters: {},
  modules: {},
};
