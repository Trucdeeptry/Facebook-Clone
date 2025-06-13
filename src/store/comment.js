import supabase from "../composables/supabase";
export default {
  namespaced: true,
  state() {
    return {};
  },
  mutations: {},
  getters: {},
  actions: {
    async sendComment(_, payload) {
      try {
        const { userId, postId, message } = payload;
        if (!userId || !postId || !message) {
          console.log("missing info for comment:", userId, postId, message);
          return;
        }
        const { data, error } = await supabase.rpc("add_comment", {
          text: message,
          postid: postId,
          userid: userId,
        });
        if (error) {
          console.log(error);
          return;
        }
        return data;
      } catch (error) {
        console.log(error);
        return;
      }
    },
  },
};
