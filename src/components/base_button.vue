<template>
  <button
    class="p-2 hover:opacity-80 px-5 font-bold rounded-lg"
    @click="push && $router.push(push)"
    :type="type"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  type: {
    type: String,
    default: "button",
  },
  push: {
    type: String,
    default: null,
  },
});
</script>
