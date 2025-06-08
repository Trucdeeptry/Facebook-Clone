import supabase from "../composables/supabase";
export default {
  namespaced: true,
  state() {
    return {};
  },
  mutations: {},
  getters: {
    getCurrentDateTime() {
      const now = new Date();

      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0"); // Tháng bắt đầu từ 0
      const day = String(now.getDate()).padStart(2, "0");

      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    },
  },
  actions: {
    async getFriends(_, email) {
      if (!email) return;
      const { data, error } = await supabase
        .from("profiles") // hoặc 'users' tùy theo tên bảng của bạn
        .select("friends")
        .eq("email", email);
      if (error) {
        console.log("fail to get friends");
      } else {
        return data;
      }
    },

    
  },
};
