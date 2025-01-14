import { createRouter, createWebHistory } from "vue-router";
import home from "./views/home.vue";
import login from "./views/login.vue";
import signup from "./views/signup.vue";
import store from "./store/store";
import user from "./views/user.vue";
import verify from "./views/verify.vue"
import verifyStatus from "./views/verifyStatus.vue";
import notFound from "./views/notFound.vue";
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
    },  
    {
      path: "/verify-status/",
      component: verifyStatus,
      name: "verifyStatus",
      props: route => ({
        email: route.query.email,
        token: route.query.token
      }),
      beforeEnter: (to, from, next) => {
        const {email, token } = from.query
        if(email && token){
          next()
        }else{
          
        }
      }
    },  
    { path: '/:catchAll(.*)', component: notFound,
     
    }
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
