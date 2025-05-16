import { createStore } from "vuex";
import auth from "./auth";
import home from "./home";
import user from "./user";
const store = createStore({
  modules: {
    auth,
    home,
    user,
  },
  state() {},
  mutations: {},
  getters: {},
  actions: {},
});

export default store;
