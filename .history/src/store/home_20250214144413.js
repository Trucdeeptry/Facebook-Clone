import axiosInstance from "./setLoading";
export default {
  namespaced: true,
  state() {
    return {};
  },
  mutations: {},
  getters: {},
  actions: {
    getFriends(_, email) {
      try {
        if (!email) return;
      } catch (error) {
        console.log('failed to get friends');
        
        return false
      }
    },
  },
};
