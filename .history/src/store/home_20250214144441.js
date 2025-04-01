import axiosInstance from "./setLoading";
export default {
  namespaced: true,
  state() {
    return {};
  },
  mutations: {},
  getters: {},
  actions: {
    asw getFriends(_, email) {
      try {
        if (!email) return;
        const response = 
      } catch (error) {
        console.log('failed to get friends ', error);
        
        return false
      }
    },
  },
};
