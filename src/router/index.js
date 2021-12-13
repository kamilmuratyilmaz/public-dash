import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "user/:id",
        name: "SignIn",
        component: () => import("../components/modals/SignIn.vue"),
        meta: {
          modal: true,
        },
      },
      {
        path: "user/:id",
        name: "Register",
        component: () => import("../components/modals/Register.vue"),
        meta: {
          modal: true,
        },
      },
      {
        path: "user-name/:id",
        name: "Dashboard",
        component: () => import("../views/user_logged_in/Dashboard.vue"),
        children: [
          {
            path: "",
            name: "EditTable",
            props: {
              default: true,
              sidebar: (route) => ({ query: route.query.edit }),
            },
            component: () => import("../components/modals/EditTable.vue"),
          },
        ],
      },
      {
        path: "user-name/:id",
        name: "UserSettings",
        component: () => import("../views/user_logged_in/UserSettings.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
