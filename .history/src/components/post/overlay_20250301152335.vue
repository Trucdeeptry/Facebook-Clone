<template>
  <div
    class="flex justify-center pb-6 pt-20 items-center z-10 bg-black/50 w-screen h-screen fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  >
    <div
      class="h-full overflow-scroll scroll-container  shadow rounded-lg bg-white w-1/2 dark:bg-dark-second p-6"
    >
      <p class="font-bold fixed w-1/2 text-2xl dark:text-primary-txt text-center">
        {{ props.title }}
      </p>
      <post class="" :postsProp="[props.postInfo]" :isComment="true"></post>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import post from "./post.vue";
const props = defineProps(["title", "postInfo"]);
</script>
