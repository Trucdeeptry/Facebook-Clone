<template>
  <div
    class="flex justify-center items-center z-10 bg-black/50 w-screen h-screen fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  >
    <div class="shadow rounded-lg bg-white w-1/2 dark:bg-dark-second p-6">
      <p class="font-bold text-2xl dark:text-primary-txt text-center">
        {{ props.title }}
      </p>
      <post :postsProp="postInfo"></post>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import post from "./post.vue";
const props = defineProps(["title", "postInfo"]);
console.log(props.postInfo);
</script>
