import { createStore } from "vuex";
import auth from "./auth";
import home from "./home";
import user from "./user";
import { isLoading  } from "./setLoading";
const store = createStore({
    modules: {
        auth,
        home,
        user
    },
    state() {
        return {
            isLoading
        };
    },
    mutations: {},
    getters: {},
    actions: {},
});

export default store;
