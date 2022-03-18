import axios from "axios";
import i18n from "@/plugins/i18n";

export default {
  namespaced: true,
  state: {
    userMail: "",
    token: null,
  },
  mutations: {
    SET_USER(state, userMail) {
      state.userMail = userMail;
    },
    SET_LOGIN_STATUS(state, token) {
      state.token = token;
    },
  },
  actions: {
    async register({ commit }, userData) {
      try {
        const res = await axios.post("/user/register", userData, {
          headers: { "Content-Type": "application/json" },
        });
        console.log(JSON.stringify(res.data));
        userData = JSON.parse(userData);
        commit("SET_USER", userData.mail);
        this._vm.$bvToast.toast(i18n.t("toaster.register_message"), {
          title: `${i18n.t("toaster.title")} ${userData.username}`,
          toaster: "b-toaster-top-center",
          variant: "primary",
          solid: true,
        });
      } catch (err) {
        let error = Object.values(err.response.data);
        alert(error);
      }
    },
    async login({ commit }, userData) {
      try {
        const res = await axios.post("/user/login", userData, {
          headers: { "Content-Type": "application/json" },
        });
        console.log(res.data);
        userData = JSON.parse(userData);
        commit("SET_USER", userData.email);
        commit("SET_LOGIN_STATUS", res.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {},
  modules: {},
};
