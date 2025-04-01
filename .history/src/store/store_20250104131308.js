import { createStore } from "vuex";
import auth from "./auth";
import { isLoading  } from "./setLoading";
const store = createStore({
    modules: {
        auth,
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
