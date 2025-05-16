import { createRouter, createWebHistory } from "vue-router";
import { jwtDecode } from "jwt-decode";
import supabase from "./composables/supabase";
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
      path: "/user/:id",
      component: user,
      name: "user",
      meta: { requiresAuth: true },
    },
    {
      path: "/verify",
      component: verify,
      name: "verify",
      beforeEnter: (to, from, next) => {
        const email = localStorage.getItem("signUpInfo");
        try {
          if (email) {
            next();
          } else {
            next("/notFound");
          }
        } catch {
          next("/notFound");
        }
      },
    },
    {
      path: "/verify-status",
      component: verifyStatus,
      name: "verifyStatus",
      props: (route) => {
        const hash = route.hash;
        const params = new URLSearchParams(hash.slice(1));
        const accessToken = params.get("access_token");
        if (accessToken) {
          return {
            success: true,
            accessToken,
            error: null,
            errorCode: null,
            errorDescription: null,
          };
        }
        return {
          success: false,
          error: params.get("error"),
          errorCode: params.get("error_code"),
          errorDescription: params.get("error_description"),
        };
      },
      beforeEnter: (to, from, next) => {
        const hash = to.hash;
        const params = new URLSearchParams(hash.slice(1));
        try {
          if (params) {
            next();
          } else {
            next("/notFound");
          }
        } catch {
          next("/notFound");
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
router.beforeEach(async (to, from, next) => {
  const isAuth = await store.getters["auth/isAuthenticated"];
  if (to.meta.requiresAuth && !isAuth) {
    next("/login");
  } else {
    next();
  }
});

export default router;
