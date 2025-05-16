import supabase from "../composables/supabase";
export default {
  namespaced: true,
  state() {
    return {};
  },
  mutations: {},
  getters: {},
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
    
    async getPosts(_, input_user_id) {
      const { data, error } = await supabase.functions.invoke("fpgrowth", {
        body: { input_user_id },
      });
      if (error) console.error(error);
      else return data.posts;
    },
  },
};
