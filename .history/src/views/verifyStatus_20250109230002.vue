<template>
  <card title="Verify status">
    <template #body>
      <p v-if="message">{{ message }}</p>
      <loading_spinner v-else></loading_spinner>
    </template>
    <template #footer>
      <div class="py-5 flex justify-center">
        <button
          type="button"
          class="p-2 text-white hover:opacity-80 px-5 font-bold rounded-lg bg-blue-500"
          @click="$router.push('/login')"
        >
          Back to login
        </button>
      </div>
    </template>
  </card>
</template>

<script setup>
import loading_spinner from "../components/loading/loading_spinner.vue";
import { onBeforeMount, ref, defineProps } from "vue";
import { useStore } from "vuex";
import card from "../components/card.vue";
const props = defineProps(["email", "token"]);
const store = useStore();
async function callVerifyAction(email, token) {
  try {
    // Gọi verify
    const verifyAction = await store.dispatch("auth/verifyAction", {
      email,
      token,
    });
    // Nếu verify thành công gọi sign up
    if (verifyAction.status == "success") {
      const userInfo = JSON.parse(localStorage.getItem("signUpInfo"));
      const signup = await store.dispatch("auth/signUpAction", userInfo);
      if (signup) {
        // sign up thành công thì gửi message thành công
        localStorage.removeItem("signUpInfo");
        return verifyAction.message;
      }
    }
    // Nếu không gửi message thất bại
    localStorage.removeItem("signUpInfo");
    return verifyAction.message;
  } catch (error) {
    console.log(error);
  }
}
let message = ref("");
const isLoading = computed(() => store.state.isLoading);

onBeforeMount(async () => {
  if (email && token) {
    try {
      message.value = await callVerifyAction(email, token);
    } catch (error) {
      console.log(error);
    }
  }

  console.log("email and token not found");
});
</script>
