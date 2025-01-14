<template>
  <card title="Verify status">
    <template #body>
      {{ message }}
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
import { onBeforeMount, ref, defineProps } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import card from "../components/card.vue";
const props = define
const route = useRoute();
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
    // Nếu kherông gửi message thất bại
    localStorage.removeItem("signUpInfo");
    return verifyAction.message;
  } catch (error) {
    console.log(error);
  }
}
let message = ref("");
onBeforeMount(async () => {
  const { email, token } = route.params;
  if(email && token)
    message.value = await callVerifyAction(email, token);
  console.log('email and token not found');
  
});
</script>
