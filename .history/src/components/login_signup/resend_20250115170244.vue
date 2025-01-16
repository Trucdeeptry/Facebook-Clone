<template>
  <a
    href="#"
    @click="handleSend(props.second)"
    class="text-md text-blue-500 hover:underline"
    :class="{
      'text-gray-400 cursor-default hover:no-underline': time != 0,
    }"
    >Resend email {{ time == 0 ? "" : `(${time})` }}</a
  >
</template>

<script setup>
import { defineProps, ref, tore } from "vue";
import { useStore } from "vuex";
const store = useStore()
const props = defineProps(["second", "info", "trigger"]);
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
  time.value = "Sending...";
  // Khi gửi xong sẽ setTime
  const sendAction = await store.dispatch("auth/sendEmail", props.info);
  if (sendAction) {
    setTime(number);
  } else {
    alert("Send email failed, please try again later");
  }
}
</script>
