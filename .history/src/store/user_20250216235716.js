import axiosInstance from "./setLoading";
export default {
  namespaced: true,
  state() {
    return {};
  },
  mutations: {},
  getters: {},
  actions: {
    async getProfileById(_, id) {
      try {
        if (!id) return;
        const response = await axiosInstance.post(
          "",
          {
            id,
          }
        );
        const { info } = response.data;
        return info;
      } catch (error) {
        console.log("failed to get info ", error);
        return false;
      }
    },
  },
};
