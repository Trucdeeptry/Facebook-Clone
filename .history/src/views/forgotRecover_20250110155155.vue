<template>
  <card
    title="We'll send you a code to your email address
      "
  >
    <template #body>
      <div class="flex justify-between">
        <p class="w-2/4">
          We can send a login code to: <b>{{ user.email }}</b>
        </p>
        <div class="flex-grow flex flex-col items-center justify-center">
          <img
            :src="user.avatar"
            alt="avt"
            class="object-cover rounded-full w-20 h-20"
          />
          <div class="text-center w-full">
            <b class="block w-full">{{
              user.info.firstName + " " + user.info.surName
            }}</b>
            <p class="text-sm text-gray-500">TSocial user</p>
            <a
              href="#"
              @click="$router.push('/forgot-find')"
              class="text-blue-500 text-sm hover:underline"
              >Not you?</a
            >
          </div>
        </div>
      </div>
    </template>

    <template #footer>
      <div class="flex items-center justify-between">
        <b
          class="cursor-pointer text-blue-500 hover:underline text-md"
          @click="$router.push('/login')"
        >
          Log in with password
        </b>
        <div class="flex gap-3">
          <!-- <baseButton tailwind="bg-gray-200"> Try another way </baseButton> -->
          <baseButton
            @click="sendEmailRecover(user.email)"
            :tailwind="'text-white bg-blue-500':isSent"
            >Continue
          </baseButton>
        </div>
      </div>
    </template>
  </card>
  <baseFooter></baseFooter>
</template>

<script setup>
import baseButton from "../components/base_button.vue";
import card from "../components/card.vue";
import baseFooter from "../components/login_signup/footer.vue";
import { ref } from "vue";
const user = JSON.parse(sessionStorage.getItem("forgotInfo"))[0];
const isSent = ref(false)
// send email
async function sendEmailRecover(email) {
  const isSendemailSuccess = await store.dispatch("auth/sendEmail", {
    email: email,
    message: "To complete your recovery password",
  });
  if (isSendemailSuccess) {
    route.push(`/verify`);
  } else {
    console.log("Send email failed");
  }
}
</script>
