import { createStore } from "vuex";
import auth from "./auth";
import home from "./home";
import user from "./user";
import post from "./post";
const store = createStore({
  modules: {
    auth,
    home,
    user,
    post,
  },
  state() {},
  mutations: {},
  getters: {},
  actions: {},
});

export default store;
