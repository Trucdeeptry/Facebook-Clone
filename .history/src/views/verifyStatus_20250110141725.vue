<template>
  <card title="Verify status">
    <template #body>
      <div class="p-6">
        <p v-if="message">{{ message }}</p>
        <p v-else>Some thing when wrong please try again later</p>
      </div>
    </template>
    <template #footer>
      <div class="py-5 flex justify-center">
        <baseButton
          tailwind="bg-blue-500 text-white"
          push="/login"
          content="Back to login"
        ></baseButton>
        <base
      </div>
    </template>
  </card>
</template>

<script setup>
import baseButton from "../components/base_button.vue";
import { onMounted, ref, defineProps } from "vue";
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
      if (signup == true) {
        // sign up thành công thì gửi message thành công
        localStorage.removeItem("signUpInfo");
        return verifyAction.message;
      } else {
        return signup;
      }
    }
    // Nếu không gửi message thất bại
    localStorage.removeItem("signUpInfo");
    return verifyAction.message;
  } catch (error) {
    console.log(error.data);
  }
}
let message = ref("");
onMounted(async () => {
  if (props.email && props.token) {
    try {
      message.value = await callVerifyAction(props.email, props.token);
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("email and token not found");
  }
});
</script>
