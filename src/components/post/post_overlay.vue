<template>
  <div @click="hanlderClose"
    class="flex justify-center pb-6 pt-20 z-10 items-center bg-black/75 w-screen h-screen fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <div @click.stop
      class="h-full overflow-scroll scroll-container shadow rounded-lg bg-white w-1/2 dark:bg-dark-second">
      <div
        class="fixed top-18 w-1/2 py-3 bg-white dark:bg-dark-second z-10 border-b-1 rounded-t-lg flex justify-center">
        <p class="font-bold text-2xl dark:text-primary-txt text-center">
          {{ props.title }}
        </p>
        <i class="fa-solid hover:opacity-50 cursor-pointer fa-circle-xmark text-4xl absolute right-5"
          style="color: #adadad" @click="hanlderClose"></i>
      </div>
      <post class="pt-10" :isOverlay="false" :postsProp="[props.postInfo]" :isComment="true"></post>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import post from "./post.vue";
const props = defineProps(["title", "postInfo"]);
const emit = defineEmits(["closeOverlay"]);
console.log("postInfo", props.postInfo);

const hanlderClose = () => {
  emit("closeOverlay");
};
</script>
