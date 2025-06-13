import supabase from "../composables/supabase";
export default {
  namespaced: true,
  state() {
    return {
      postsByContext: {
        postsHome: null,
        postsProfile: null,
      },
    };
  },
  mutations: {
    setPosts(state, { posts, key }) {
      if (!posts) return;
      state.postsByContext[key] = posts;
    },
  },
  getters: {
    getPosts: (state) => (key) => {
      if (!state.postsByContext[key]) return null;
      return [...state.postsByContext[key]].sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
    },
  },
  actions: {
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
              new_ad,
            }),
          }
        );
        const { result } = await response.json();
        return result;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    async getSentiment(_, text) {
      if (!text) return;
      try {
        const response = await fetch(
          "https://api-inference.huggingface.co/models/j-hartmann/emotion-english-distilroberta-base",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${
                import.meta.env.VITE_HUGGINGFACE_API_KEY
              }`,
            },
            body: JSON.stringify({
              inputs: text,
            }),
          }
        );
        const result = await response.json();
        const topEmotion = result.reduce((max, curr) =>
          curr.score > max.score ? curr : max
        );
        return topEmotion[0].label;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    async addPost(context, post) {
      if (!post) return;
      const sentiment = await context.dispatch("getSentiment", post.text);

      const hashtagsArray = [];
      if (post.hashtags.length > 0) {
        const hashtagsArray = post.hashtags
          .split(" ")
          .filter((tag) => tag !== "");
      }
      const { data, error } = await supabase.rpc("add_post", {
        hashtags: hashtagsArray,
        image: post.image,
        text: post.text,
        user_id: post.user_id,
        sentiment: sentiment,
      });

      if (error) return;
      return data;
    },
    async getPostById(_, post_ids) {
      let { data, error } = await supabase.rpc("get_posts_by_ids", {
        post_ids: [post_ids],
      });
      if (error) console.error(error);
      else return data[0];
    },
    async getPosts(context, input_user_id) {
      const { data, error } = await supabase.functions.invoke("fpgrowth", {
        body: { input_user_id },
      });
      if (error) console.error(error);
      else {
        context.commit("setPosts", {
          posts: data.posts,
          key: "postsHome",
        });
      }
    },
    async getUserPosts(context, input_user_id) {
      let { data, error } = await supabase.rpc("user_post", {
        input_user_id,
      });
      if (error) console.error(error);
      else {
        context.commit("setPosts", {
          posts: data,
          key: "postsProfile",
        });
      }
    },

    async uploadImage(_, payload) {
      const { userId, postId, file } = payload;
      if (!userId || !postId || !file) {
        console.log("missing info");
        return;
      }

      const filePath = `post_images/${userId}/${postId}/${Date.now()}_${
        file.name
      }`;
      const { data, error } = await supabase.storage
        .from("images")
        .upload(filePath, file);

      if (error) {
        console.error(`Error uploading ${file.name}:`, error.message);
      }

      const { data: publicData } = supabase.storage
        .from("images")
        .getPublicUrl(filePath);
      return publicData.publicUrl;
    },

    async updateImage(_, payload) {
      try {
        const { imageUrls, postId } = payload;
        const { data, error, status } = await supabase
          .from("posts")
          .update({ image: imageUrls })
          .eq("id", postId);
        if (data.length === 0) {
          console.warn(
            "⚠️ Không có bản ghi nào được cập nhật. Có thể sai postId:",
            postId
          );
        }
        return response;
      } catch (error) {
        console.log(error);
        return;
      }
    },

    async toggleReact(_, payload) {
      try {
        const { targetId, reaction, type } = payload;
        if (!targetId || !reaction) {
          console.log("missing info:", targetId, reaction);
          return;
        }
        const session = await supabase.auth.getSession();
        const access_token = session.data.session.access_token;
        const body =
          type === "post"
            ? { postId: targetId, reaction }
            : { commentId: targetId, reaction };
        const functionName =
          type === "post" ? "handle-user-reaction" : "comment-user-react";
        const { data, error } = await supabase.functions.invoke(functionName, {
          body,
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
        if (error) console.log(error);
        console.log(data);
      } catch (error) {
        console.log(error);
        return;
      }
    },
  },
};
