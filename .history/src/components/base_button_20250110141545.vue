<template>
  <button
    type="button"
    class="p-2 hover:opacity-80 px-5 font-bold rounded-lg"
    :class="{ [bg]: true }"
    @click="$router.push(push)"
  >
    {{ content }}
  </button>
</template>

<script se>
import { defineProps } from "vue";
defineProps({
  push: {
    type: String,
    required: true,
  },
  bg: {
    type: String,
    default: "bg-blue-500",
  },
  content: {
    type: String,
    required: true,
  },
});
</script>
