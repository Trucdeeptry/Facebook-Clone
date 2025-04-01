import { ref, provide, onBeforeMount } from "vue";
import { useStore } from "vuex";
import jwtDecode from "jwt-decode";
export function loginUser() {
  const store = useStore();
  const isLoadingUser = ref(false);
  const userInfo = ref(null);

  provide("user", userInfo);

  onBeforeMount(async () => {
    try {
      // 🔄 Tự động đăng nhập
      store.dispatch("auth/autoLogin");

      // 🛠️ Lấy token và giải mã
      const token = store.getters["auth/getUserInfo"];
      if (token) {
        const decoded = jwtDecode(token);
        userInfo.value = await store.dispatch("auth/getInfo", decoded.email);
      }

      isLoadingUser.value = true;
    } catch (error) {
      console.log(error);
    }
  });

  return {
    userInfo,
    isLoadingUser,
  };
}
