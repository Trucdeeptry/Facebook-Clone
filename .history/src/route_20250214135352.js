import { createRouter, createWebHistory } from "vue-router";
import { jwtDecode } from "jwt-decode";
import home from "./views/home.vue";
import login from "./views/auth/login.vue";
import signup from "./views/auth/signup.vue";
import store from "./store/store";
import user from "./views/user.vue";
import verify from "./views/auth/verify.vue";
import verifyStatus from "./views/auth/verifyStatus.vue";
import notFound from "./views/notFound.vue";
import forgotFind from "./views/auth/forgotFind.vue";
import forgotRecover from "./views/auth/forgotRecover.vue";
import changePass from "./views/auth/changePass.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "home" },
    {
      path: "/home",
      component: home,
      name: "home",
      meta: { requiresAuth: true },
    },
    { path: "/login", component: login, name: "login" },
    { path: "/signup", component: signup, name: "signup" },
    {
      path: "/user",
      component: user,
      name: "user",
    },
    {
      path: "/verify",
      component: verify,
      name: "verify",
      beforeEnter: (to, from, next) => {
        const user = JSON.parse(localStorage.getItem("signUpInfo"));
        if (!user) {
          next("/notFound");
        } else {
          next();
        }
      },
    },
    {
      path: "/verify-status",
      component: verifyStatus,
      name: "verifyStatus",
      props: (route) => ({
        token: route.query.token,
      }),
      beforeEnter: (to, from, next) => {
        const { token } = to.query;
        if (token) {
          next();
        } else {
          next("/verify");
        }
      },
    },
    {
      path: "/forgot-find",
      component: forgotFind,
      name: "forgotFind",
    },
    {
      path: "/forgot-recover",
      component: forgotRecover,
      name: "forgotRecover",
    },
    {
      path: "/forgot-changepass",
      component: changePass,
      name: "changePass",
      props: (route) => ({
        token: route.query.token,
      }),
      beforeEnter: (to, from, next) => {
        const { token } = to.query;
        try {
          if (token) {
            const decoded = jwtDecode(token);
            const currentTime = Math.floor(Date.now() / 1000);
            if (decoded.exp < currentTime) {
              next("/notFound");
            } else {
              next();
            }
          }
        } catch {
          next("/notFound");
        }
      },
    },
    { path: "/:catchAll(.*)", component: notFound },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters["auth/isAuthenticated"]) {
    next("/login");
  } else {
    next();
  }
});

export default router;
