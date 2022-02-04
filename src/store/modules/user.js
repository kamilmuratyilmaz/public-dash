import axios from "axios";
import i18n from "@/plugins/i18n";

export default {
  namespaced: true,
  state: {
    userData: {},
  },
  mutations: {
    SET_REGISTERED_USER(state, userData) {
      state.userData = userData;
    },
  },
  actions: {
    async register({ commit }, userData) {
      try {
        const res = await axios.post("/user/register", userData);
        console.log(res);
        commit("SET_REGISTERED_USER", res);
        this._vm.$bvToast.toast(i18n.t("toaster.register_message"), {
          title: `${i18n.t("toaster.title")} ${userData.username}`,
          toaster: "b-toaster-top-center",
          variant: "primary",
          solid: true,
        });
      } catch (err) {
        console.log(err.response);
        console.log(err);
      }
    },
  },
  getters: {},
  modules: {},
};
