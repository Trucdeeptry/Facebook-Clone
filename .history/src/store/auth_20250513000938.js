import supabase from "../composables/supabase";
import Cookies from "js-cookie";
import axiosInstance from "./setLoading";
export default {
  namespaced: true,
  state() {
    return {};
  },
  mutations: {
    addRecentUser(_, userEmail) {
      let recentUsers = JSON.parse(localStorage.getItem("recentUsers")) || [];
      const isExist = recentUsers.some((email) => email === userEmail);
      if (!isExist) {
        recentUsers.push(userEmail);
        if (recentUsers.length > 5) {
          recentUsers.shift();
        }
        localStorage.setItem("recentUsers", JSON.stringify(recentUsers));
      }
    },
  },
  getters: {
    getRecentUsers() {
      return JSON.parse(localStorage.getItem("recentUsers")) || [];
    },
    getLoading(state) {
      return state.isLoading;
    },
    isAuthenticated() {},
  },
  actions: {
    async logOut() {
      try {
        await supabase.auth.signOut();
        return true;
      } catch (error) {
        console.log("Failed to log out: ", error);
        return false;
      }
    },
    async LoginAuthentication(context, payload) {
      try {
        const { email, password, isSave } = payload;
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) {
          console.error("Login failed:", error.message);
          return false;
        }

        if (data && isSave) {
          context.commit("addRecentUser", data.user.email);

          return true;
        }

        return false;
      } catch (err) {
        console.error("Unexpected error during login:", err);
        return false;
      }
    },
    async signUpAction(_, payload) {
      try {
        const { email, password, info } = payload;
        const { exists } = axiosInstance.post(
          `${import.meta.env.VITE_API_URL}/functions/v1/email_checker`,
          {
            email,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
            },
          }
        );
        if (exists) return;
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) return;
        if (data) {
          console.log(data);
          const { CreateData, CreateError } = await supabase.rpc(
            "create_profiles",
            {
              ...info,
              email,
              user_id: data.id,
            }
          );
          if (CreateError) console.error(CreateError);
          else console.log(CreateData);
        }
      } catch (error) {
        return error;
      }
    },
    async autoLogin() {
      const supabaseCookies = Cookies.get("supabase.auth.token");
      const loginSession = JSON.parse(supabaseCookies);
      if (loginSession) {
        const { access_token, refresh_token } = loginSession;
        const { data, error } = await supabase.auth.setSession({
          access_token,
          refresh_token,
        });
        if (error) {
          console.error("Lỗi khi khôi phục session:", error);
        } else {
          console.log("Đăng nhập lại thành công:", data);
          return data
        }
      }
    },
    async getInfo(_, emails) {
      if (!emails) return;

      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("firstname, surname, avatar, email")
          .in("email", emails);

        if (error) return;
        console.log(data);
        return data;
      } catch (error) {
        console.log("Unexpected error during getUser", error);
      }
    },
  },
};
