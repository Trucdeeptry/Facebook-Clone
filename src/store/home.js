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

    async getPosts(_, input_user_id) {
      const { data, error } = await supabase.functions.invoke("fpgrowth", {
        body: { input_user_id },
      });
      if (error) console.error(error);
      else return data.posts;
    },
    async getSuggestHashTags(_, hashtags) {
      const { data, error } = await supabase.functions.invoke("GetSuggestion", {
        body: {
          hashtags,
        },
      });
      if (error) console.error(error);
      else return data.suggestions;
    },
    async getPredictReact(_, new_ad) {
      if (!new_ad) return;
      try {
        const response = await fetch(
          "https://regression-hashtag.onrender.com/predict",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              new_ad
            }),
          }
        );
        const  {result} = await response.json();        
        return result;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
  },
};
