import axiosInstance from "./setLoading";
export default {
  namespaced: true,
  state() {
    return {};
  },
  mutations: {},
  getters: {},
  actions: {
    async getFriends(_, email) {
      try {
        if (!email) return;
        const response = await axiosInstance.post(
          "http://localhost:3000/users/friends-list",
          {
            email,
          }
        );
        const { friends } = response.data;
        return friends;
      } catch (error) {
        console.log("failed to get friends ", error);

        return false;
      }
    },
    async getPosts(_,)
  },
};
