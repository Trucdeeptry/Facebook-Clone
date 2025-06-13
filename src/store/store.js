import { createStore } from "vuex";
import auth from "./auth";
import home from "./home";
import user from "./user";
import post from "./post";
import comment from './comment'
const store = createStore({
  modules: {
    auth,
    home,
    user,
    post,
    comment
  },
  state() {},
  mutations: {},
  getters: {},
  actions: {},
});

export default store;
