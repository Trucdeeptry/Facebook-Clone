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
        <div class="flex flex-col gap-3">
          <resend
            second="60"
            :info="info"
            :run="triggerTime"
            @update:trigger="triggerTime = $event"
            @click="isSent = true"
          ></resend>

          <b
            class="cursor-pointer text-blue-500 hover:underline text-md"
            @click="$router.push('/login')"
          >
            Log in with password
          </b>
        </div>

        <div class="flex gap-3 items-center">
          <!-- <baseButton tailwind="bg-gray-200"> Try another way </baseButton> -->
          <baseButton
            @click="
              sendEmailRecover();
            "
            :class="[
              isSent
                ? 'bg-gray-200 text-gray-500 cursor-default hover:opacity-100'
                : 'text-white bg-blue-500',
            ]"
          >
            <loading-spinner v-if="isLoading"></loading-spinner>
            <p v-else>
              <span v-if="isSent">Please check your email</span>
              <span v-else>Continue</span>
            </p>
          </baseButton>
        </div>
      </div>
    </template>
  </card>
  <baseFooter></baseFooter>
</template>

<script setup>
import resend from "../components/login_signup/resend.vue";
import baseButton from "../components/base_button.vue";
import card from "../components/card.vue";
import baseFooter from "../components/login_signup/footer.vue";
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();

const triggerTime = ref(false);
const user = JSON.parse(localStorage.getItem("forgotInfo"))[0];
const isSent = ref(false);
const info = {
  email: user.email,
  message: "To complete your recovery password",
};

// send email
async function sendEmailRecover() {
  if (!isSent.value) {
    const isSendemailSuccess = await store.dispatch("auth/sendEmail", info);
    if (isSendemailSuccess) {
      isSent.value = true;
    } else {
      console.log("Send email failed");
    }
  }
}
const isLoading = computed(() => store.state.isLoading);
onMounted(() => {
  // theo dõi storage, nếu người dùng đã xác nhận thì chuyển hướng, ko cho resend mail nữa
  window.addEventListener("storage", (event) => {
    if (event.key == "forgotInfo" && event.newValue == null) {
      alert("Password changed successfully");
      router.push("/login");
    }
  });
});
</script>
