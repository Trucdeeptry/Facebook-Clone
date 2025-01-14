<template>
  <button
    type="button"
    class="p-2 hover:opacity-80 px-5 font-bold rounded-lg"
    :class="{ [tailwind]: true }"
    @click="push && $router.push(push)"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
defineProps(["push", "tailwind"]);
const router = useRouter();
// function hanldePush() {
//   if (push) {
//     router.push(push);
//   }
// }
</script>
