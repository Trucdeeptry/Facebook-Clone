<template>
  <div class="bg-white dark:bg-dark-second dark:text-white p-3 mt-4 rounded-lg shadow-lg">
    <div class="font-extrabold pb-2 text-xl">
      <h1>{{ title }}</h1>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps(["title"]);
</script>
