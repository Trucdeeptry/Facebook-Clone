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
import { defineProps, ref, watch, defineEmits, toRef } from "vue";
import { useStore } from "vuex";
const store = useStore();
const emit = defineEmits(["update:trigger"]);
const props = defineProps(["second", "info", "run"]);
const time = ref(0);
const runRef = toRef(props, "run");
watch(runRef, (newVal) => {
  if (newVal) {
    setTime(props.second);
    emit("update:trigger", false);
  }
});
function setTime(number) {
  // nếu còn đang đếm ngược thì ko được set nữa
  if (time.value > 0) return;
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
  if (time.value > 0 || time.value) return;
  
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
