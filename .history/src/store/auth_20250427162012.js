import axiosInstance from "./setLoading";
import supabase from "../composables/supabase";
import Cookies from "js-cookie";
export default {
  namespaced: true,
  state() {
    return {
      signupInfo: {},
    };
  },
  mutations: {
    setUser(_, access_token) {
      Cookies.set("access_token", access_token, {
        expires: 30,
        secure: true,
        sameSite: "Strict",
      });
    },
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
    setSignup(state, payload) {
      state.signupInfo = payload;
    },
  },
  getters: {
    isAuthenticated() {
      return Cookies.get('access_token')
    },
    getRecentUsers() {
      return JSON.parse(localStorage.getItem("recentUsers")) || [];
    },
    getLoading(state) {
      return state.isLoading;
    },
    getSignup(state) {
      return state.signupInfo;
    },
    getUserInfo(state) {
      return state.userInfo;
    },
  },
  actions: {
    pushSignupInfo(context, payload) {
      try {
        context.commit("setSignup", payload);

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    logOut(context) {
      try {
        localStorage.removeItem("userInfo");
        context.commit("setUser", {});
        return true;
      } catch (error) {
        console.log("Failed to log out: ", error);
        return false;
      }
    },
    async LoginAuthentication(context, payload) {
      const { email, password, isSave } = payload;
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (data) {
        context.commit("setUser", data.access_token);
        if (isSave) {
          context.commit("addRecentUser", data.user.email);
        }
        return true;
      }
      if (error) {
        console.log("Login failed:", error);
        return false;
      }
    },
    async signUpAction(_, payload) {
      try {
        const { email, password, info, type } = payload;
        const response = await axiosInstance.post(
          `http://localhost:3000/users/reg`,
          {
            email,
            password,
            info,
            type,
          }
        );
        const { status } = response.data;
        if (status == "success") {
          return true;
        }
      } catch (error) {
        return error.response.data.message;
      }
    },
    async sendEmail(_, payload) {
      try {
        const response = await axiosInstance.post(
          `http://localhost:3000/email/send-verification`,
          {
            email: payload.email,
            message: payload.message,
          }
        );
        if (response.status == 200) {
          return true;
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    async changePassword(_, payload) {
      try {
        const response = await axiosInstance.post(
          `http://localhost:3000/users/changepass`,
          {
            email: payload.email,
            newPassword: payload.newPassword,
          }
        );
        if (response.status == 200) {
          return true;
        }
        return false;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    async verifyAction(_, payload) {
      try {
        const response = await axiosInstance.get(
          `http://localhost:3000/email/verify?token=${payload.token}`
        );
        const { message, status } = response.data;

        return {
          message,
          status,
        };
      } catch (error) {
        return error.response.data;
      }
    },
    autoLogin(context) {
      try {
        const token = JSON.parse(localStorage.getItem("token"));
        if (!token) return false;
        if (Object.keys(token).length == 0) return false;

        const userInfo = jwtDecode(token);
        // Kiểm tra thời gian hết hạn của token
        const expiration = userInfo.exp * 1000;
        const now = Date.now();
        const timeUntilExpiration = expiration - now;
        if (timeUntilExpiration > 0) {
          // Nếu token chưa hết hạn thì set lại thời gian hết hạn
          setTimeout(() => {
            context.commit("logOut");
          }, timeUntilExpiration);
          context.commit("setUser", token);
          return true;
        }
        // Nếu token đã hết hạn thì xóa token và thông tin user
        localStorage.removeItem("userInfo");
        return false;
      } catch (error) {
        console.log("Failed to auto login: ", error);
        localStorage.removeItem("userInfo");
        return false;
      }
    },
    async getInfo() {
      const { data: { user } } = await supabase.auth.getUser()
      if(user){
        console.log(user)
        con
        return user
      }
      else{
        console.log('get info failed')
      }

  },
};
