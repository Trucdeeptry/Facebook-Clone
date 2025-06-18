import supabase from "../composables/supabase";
import Cookies from "js-cookie";
import router from "../route";
import axios from "axios";
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
    async isAuthenticated() {
      const { data, error } = await supabase.auth.getUser();

      if (error || !data) {
        return false;
      } else {
        return true;
      }
    },
    async getUserInfo() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      return user;
    },
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
          alert(error.message);
          return;
        }
        if (data && isSave) {
          router.push("/home");
          context.commit("addRecentUser", data.user.email);
        }
      } catch (err) {
        console.error("Unexpected error during login:", err);
      }
    },
    async signUpAction(_, payload) {
      try {
        const { email, password, info } = payload;
        const response = await axios.post(
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
        const exists = response.data.exists;
        if (exists) {
          alert("Email already exists");
          return;
        }
        const { data: SignUpData, error: SignupError } =
          await supabase.auth.signUp({
            email,
            password,
            options: {
              emailRedirectTo: `${window.location.origin}/verify-status`,
            },
          });
        if (SignupError) {
          alert("Sign up failed: ", SignupError);
          return;
        }

        const data = {
          ...info,
          email,
          user_id: SignUpData.user.id,
        };
        const { data: CreateData, error: CreateError } = await supabase.rpc(
          "create_profiles",
          {
            data,
          }
        );
        if (CreateError) {
          console.error(CreateError);
          alert(CreateError.message);
          return;
        }

        router.push("/verify");
        localStorage.setItem("signUpInfo", email);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async autoLogin() {
      console.log("auto");

      const supabaseCookies = Cookies.get("supabase.auth.token");
      if (!supabaseCookies) return;
      const loginSession = JSON.parse(supabaseCookies);
      if (!loginSession) return;
      const { access_token, refresh_token } = loginSession;
      const { data, error } = await supabase.auth.setSession({
        access_token,
        refresh_token,
      });
      if (error) {
        console.error("Lỗi khi khôi phục session:", error);
      } else {
        // xóa signUp info khi đã đăng ký thành công
        localStorage.removeItem("signUpInfo");
        return data;
      }
    },
    async sendEmail(_, email) {
      const domain = window.location.origin;
      console.log(domain);
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${domain}/forgot-changepass`,
      });
      if (error) {
        console.error("Error resending verification email:", error.message);
        return false;
      } else {
        return true;
      }
    },
    async getInfobyId(_, id) {
      if (!id) return;
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("user_id, firstname, surname, avatar, email")
          .eq("user_id", id);

        if (error) {
          console.log("Fail to get infoid data:", error);
          return false;
        } else {
          return data[0];
        }
      } catch (error) {
        console.log("Unexpected error during getUser", error);
      }
    },
    async getInfo(_, emails) {
      if (!emails) return;
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("user_id, firstname, surname, avatar, email")
          .in("email", emails);

        if (error) {
          console.log("Fail to get data:", error);
          return false;
        } else {
          return data;
        }
      } catch (error) {
        console.log("Unexpected error during getUser", error);
      }
    },
    async changePassword(_, payload) {
      const { email, newPassword, access_token, refresh_token } = payload;
      if (!access_token || !refresh_token || !email || !newPassword) return;

      const { data, error } = await supabase.auth.setSession({
        access_token,
        refresh_token,
      });
      if (error) {
        console.log(error);
        return;
      }
      const { data: updateData, error: updateError } =
        await supabase.auth.updateUser({
          password: newPassword,
        });

      if (updateError) {
        console.error("Update Error:", updateError.message);
      }

      if (updateData) {
        return true;
      }
    },
  },
};
