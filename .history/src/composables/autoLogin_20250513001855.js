import { ref, provide, onBeforeMount } from "vue";
import { useStore } from "vuex";
export function loginUser() {
  const store = useStore();
  const isLoadingUser = ref(true);
  const userInfo = ref(null);
  provide("user", userInfo);
  onBeforeMount(async () => {
    try {
      // Tự động đăng nhập
      const data = store.dispatch("auth/autoLogin");
      if (token) {
        userInfo.value = await store.dispatch("auth/getInfo", data.user.email);
        // chuyển mảng chứa 1 userInfo thành object user đó
        userInfo.value = userInfo.value[0];
        console.log(
      }
    } catch (error) {
      console.log(error);
    } finally {
      isLoadingUser.value = false;
    }
  });

  return {
    userInfo,
    isLoadingUser,
  };
}
