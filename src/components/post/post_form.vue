<template>
  <!-- post form -->
  <div class="px-4 shadow rounded-lg bg-white dark:bg-dark-second">
    <div class="p-2 border-b border-gray-300 dark:border-dark-third flex space-x-4 items-center">
      <img :src="user.avatar" alt="Profile picture" class="w-9 h-9 rounded-full object-cover" />
      <input type="text" :placeholder="`What's on your mind, ${user.surname}?`" readonly @click="isModalOpen = true"
        class="flex-1 dark:hover:bg-dark-hover  cursor-pointer hover:bg-gray-200 bg-gray-100 dark:text-primary-txt rounded-full flex items-center py-2 justify-start pl-4 dark:bg-dark-third text-lg" />
    </div>
    <div class="p-2 flex">
      <div
        class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-red-500">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v4/yr/r/c0dWho49-X3.png?_nc_eui2=AeGyuqIRlRJx3v7sFA36FXgbueRic5Ym8Wm55GJzlibxaWEAPerXGueHyyMMGrRbq-5ErQWx8Q8nmwAnbOa7gLuF"
          alt="" />
        <span class="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">Live video</span>
      </div>
      <div
        class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-green-500">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v4/y7/r/Ivw7nhRtXyo.png?_nc_eui2=AeGm7W70kVHwGi8X9PrD-eFWkBVQC4m7dx6QFVALibt3HlMs4_pqRAe1xV61m-ceuWzZ2Tg9ZAdMkmUL3Hu2lz8J"
          alt="" />
        <span class="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">Photo/video</span>
      </div>
      <div
        class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-yellow-500">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v4/yd/r/Y4mYLVOhTwq.png?_nc_eui2=AeHdZW7-e9L4XZ1I4EhHXN7rfPQ6N5_OUfV89Do3n85R9aREhKahfT_SVHB85U9E_bdX5MhLavebmjBWZwN5WqAe"
          alt="" />
        <span class="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">Felling/activity</span>
      </div>
    </div>
    <create_post @closePost="closePost" :keyOfPost="props.keyOfPost" :isModalOpen="isModalOpen" ></create_post>
  </div>
  <!-- end post form -->
</template>

<script setup>
import create_post from "./create_post.vue";
import { ref, inject, defineProps } from "vue";
const user = inject("user");
const props = defineProps(["keyOfPost"]);
const isModalOpen = ref(false);
const closePost = () => {
  isModalOpen.value = false;
};

</script>
