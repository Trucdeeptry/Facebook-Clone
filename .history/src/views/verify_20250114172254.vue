<template>
  <div>
    <card title="Verify your email">
      <template #body>
        <div class="main text-lg">
          <p>Please check your emails for a message with your verify url.</p>
          <p>
            We sent your code to: <b>{{ userInfo?.email }}</b>
          </p>
        </div>
      </template>
      <template #footer>
        <div class="content_footer flex justify-between items-center">
          <a
            href="#"
            @click="handleSend(second)"
            class="text-md text-blue-500 hover:underline"
            :class="{
              'text-gray-400 cursor-default hover:no-underline': time > 0,
            }"
            >Send again {{ time == 0 ? "" : `(${time})` }}</a
          >
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
import baseButton from "../components/base_button.vue";
import card from "../components/card.vue";
import baseFooter from "../components/login_signup/footer.vue";
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const userInfo = computed(() => {
  store.getters("auth/getSignup");
});
const second = 60;
const time = ref(0);
function setTime(number) {
  time.value = number;
  const timeId = setInterval(() => {
    if (time.value > 0) {
      time.value--;
    } else {
      clearInterval(timeId);
    }
  }, 1000);
}
async function handleSend(number) {
  if (time.value > 0) return;
  // khoá nút send ngay khi bấm, nếu không sẽ bị bấm vào nhiều lần
  time.value = second;
  // Khi gửi xong sẽ setTime
  const sendAction = await store.dispatch("auth/sendEmail", userInfo);
  if (sendAction) {
    setTime(number);
  } else {
    alert("Send email failed, please try again later");
  }
}
</script>
