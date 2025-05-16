import axios from "axios";
import supabase from "../composables/supabase";
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
        let { data, error } = await supabase.rpc("get_profile_byid", {
          input_user_id: id,
        });
        if (error) console.error(error);
        else return data;
      } catch (error) {
        console.log("failed to get info ", error);
        return false;
      }
    },
    async updateProfile(_, info) {
      try {
        let { data, error } = await supabase.rpc("update_profile", info);
        if (error) console.error(error);
        else return data;
      } catch (error) {
        console.log("failed to update profile ", error);
        return false;
      }
    },
    async getUserPosts(_, input_user_id) {
      let { data, error } = await supabase.rpc("user_post", {
        input_user_id,
      });
      if (error) console.error(error);
      else return data;
    },
  },
};
