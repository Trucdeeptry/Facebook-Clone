<template>
  <div
    class="flex justify-center pb-6 pt-20 z-10 items-center bg-black/50 w-screen h-screen fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  >
    <div
      class="h-full overflow-scroll scroll-container shadow rounded-lg bg-white w-1/2 dark:bg-dark-second"
    >
      <div
        class="fixed top-18 w-1/2 py-5 bg-white dark:bg-dark-second  border-b-1 rounded-t-lg flex justify-center"
      >
        <p class="font-bold text-2xl dark:text-primary-txt text-center">
          {{ props.title }}
        </p>
        <i
          class="fa-solid hover:opacity-50 cursor-pointer fa-circle-xmark text-4xl absolute right-5"
          style="color: #adadad"
          @click="hanlderClose"
        ></i>
      </div>
      <post
        class="pt-14"
        :postsProp="[props.postInfo]"
        :isComment="true"
      ></post>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import post from "./post.vue";
const props = defineProps(["title", "postInfo"]);
const emit = defineEmits(["closeOverlay"]);
const hanlderClose = () => {
  // set activePost = null to close overlay
  emit("closeOverlay");
};
</script>
