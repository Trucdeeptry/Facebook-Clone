<template>
  <card title="Verify status">
    <template #body>
      <div>
        <p v-if="message">{{ message }}</p>
        <p v-else>Some thing when wrong please try again later</p>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-center">
        <baseButton class="bg-blue-500 text-white" push="/login">
          Back to login</baseButton
        >
      </div>
    </template>
  </card>
</template>

<script setup>
import baseButton from "../components/base_button.vue";
import { onMounted, ref, defineProps } from "vue";
import { useStore } from "vuex";
import card from "../components/card.vue";
const props = defineProps(["token"]);
const store = useStore();
async function callVerifyAction(token) {
  try {
    // Gọi verify
    const verifyAction = await store.dispatch("auth/verifyAction", {
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
  if (props.token) {
    try {
      message.value = await callVerifyAction(props.token);
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("email and token not found");
  }
});
</script>
