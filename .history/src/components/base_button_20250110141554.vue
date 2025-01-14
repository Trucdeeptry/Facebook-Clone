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

<script setup>
import { defineProps } from "vue";
defineProps(["push", "bg", "content"]);
</script>
