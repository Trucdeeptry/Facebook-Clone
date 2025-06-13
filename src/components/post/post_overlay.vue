<template>
  <div @click="hanlderClose"
    class="flex justify-center pb-6 pt-10 z-30 items-center bg-black/75 w-screen h-screen fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <div @click.stop 
      class="h-full overflow-scroll overflow-x-hidden scroll-container shadow rounded-lg bg-white lg:w-1/2 md:w-2/3 w-full dark:bg-dark-second">
      <div
        class="fixed top-10  lg:w-1/2 md:w-2/3 w-full py-3 bg-white dark:bg-dark-second z-10 border-b-1 rounded-t-lg flex justify-center">
        <p class="font-bold text-2xl dark:text-primary-txt text-center">
          {{ props.title }}
        </p>
        <i class="fa-solid hover:opacity-50 cursor-pointer fa-circle-xmark text-4xl absolute right-5"
          style="color: #adadad" @click="hanlderClose"></i>
      </div>
      <post class="pt-10 " :isOverlay="false" :postsProp="[props.postInfo]" :isComment="true"></post>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import post from "./post.vue";
const props = defineProps(["title", "postInfo"]);
const emit = defineEmits(["closeOverlay"]);

const hanlderClose = () => {
  emit("closeOverlay");
};
</script>
