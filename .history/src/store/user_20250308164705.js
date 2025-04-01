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
        const response = await axiosInstance.get(
          `http://localhost:3000/users/profile?id=${id}`
        );
        const { userInfo } = response.data;
        console.log(response);

        return data;
      } catch (error) {
        console.log("failed to get info ", error);
        return false;
      }
    },
    async updateProfile(_, info) {
      try {
        const response = await axiosInstance.post(
          `http://localhost:3000/users/change-info`,
          info
        );
        const { data } = response;
        return data;
      } catch (error) {
        console.log("failed to update profile ", error);
        return false;
      }
    },
  },
};
