import axiosInstance from "./setLoading";
export default {
  namespaced: true,
  state() {
    return {
      userInfo: {}
    };
  },
  mutations: {
    addUserInfoState(state, payload) {
      state.userInfo = payload
    }
  },
  getters: {
    getUserInfo(state){
      return state.userInfo
    }
  },
  actions: {
    async getProfileById(_, id) {
      try {
        if (!id) return;
        const response = await axiosInstance.get(
          `http://localhost:3000/users/profile?id=${id}`
        );
        const { data } = response.data;
        return data;
      } catch (error) {
        console.log("failed to get info ", error);
        return false;
      }
    },
    addUserInfoo(context, payload){
      con
    }
  },
};
