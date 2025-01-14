import { createRouter, createWebHistory } from "vue-router";
import home from "./views/home.vue";
import login from "./views/login.vue";
import signup from "./views/signup.vue";
import store from "./store/store";
import user from "./views/user.vue";
import verify from "./views/verify.vue";
import verifyStatus from "./views/verifyStatus.vue";
import notFound from "./views/notFound.vue";
import forgotFind from "./views/forgotFind.vue";
import forgotRecover from "./views/forgotRecover.vue";
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
        const user = JSON.parse(localStorage.getItem("signUpInfo"))
        if(!user){
          next('/notFound')
        }
      }
    },
    {
      path: "/verify-status",
      component: verifyStatus,
      name: "verifyStatus",
      props: (route) => ({
        email: route.query.email,
        token: route.query.token,
      }),
      beforeEnter: (to, from, next) => {
        const { email, token } = to.query;
        if (email && token) {
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
      component: forgotFind,
      name: "forgotFind",
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
