<template>
  <div>
    <card title="Verify your email">
      <template #body>
        <div class="main text-lg">
          <p>Please check your emails for a message with your verify url.</p>
          <p>
            We sent your code to: <b>{{ signupInfo?.email }}</b>
          </p>
        </div>
      </template>
      <template #footer>
        <div class="content_footer flex justify-between items-center">
          <!-- <a
            href="#"
            @click="handleSend(second)"
            class="text-md text-blue-500 hover:underline"
            :class="{
              'text-gray-400 cursor-default hover:no-underline': time != 0,
            }"
            >Resend email {{ time == 0 ? "" : `(${time})` }}</a
          > -->
          <resend second="60" :info="signupInfo"></resend>
          <div class="button-group text-md flex items-center gap-3">
            <baseButton class="bg-blue-500 text-white" push="/login">
              Back to login</baseButton
            >
          </div>
        </div>
      </template>
    </card>
    <baseFooter></baseFooter>
  </div>
</template>

<script setup>
import resend from "../components/login_signup/resend.vue";
import baseButton from "../components/base_button.vue";
import card from "../components/card.vue";
import baseFooter from "../components/login_signup/footer.vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
// declare tools
const router = useRouter();

// hanlde verify
const signupInfo = ref({});

onMounted(() => {
  // theo dõi storage, nếu người dùng đã xác nhận thì chuyển hướng, ko cho resend mail nữa
  window.addEventListener("storage", (event) => {
    if (event.key == "signUpInfo" && event.newValue == null) {
      alert("Register successfully");
      router.push("/login");
    }
  });
  signupInfo.value = JSON.parse(localStorage.getItem("signUpInfo"));
});
</script>
