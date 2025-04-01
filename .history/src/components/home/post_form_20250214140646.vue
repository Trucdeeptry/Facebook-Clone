<template>
  <div class="px-4 mt-4 shadow rounded-lg bg-white dark:bg-dark-second">
    <div
      class="p-2 border-b border-gray-300 dark:border-dark-third flex space-x-4 items-center"
    >
      <img
        :src="user.avatar"
        alt="Profile picture"
        class="w-9 h-9 rounded-full object-cover"
      />
      <input
        type="text"
        :placeholder="`What's on your mind, Tuat?` "
        class="flex-1 bg-gray-100 cursor-text  dark:text-dark-txt rounded-full flex items-center py-2 justify-start pl-4 dark:bg-dark-third text-lg"
      />
    </div>
    <div class="p-2 flex">
      <div
        class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-red-500"
      >
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v4/yr/r/c0dWho49-X3.png?_nc_eui2=AeGyuqIRlRJx3v7sFA36FXgbueRic5Ym8Wm55GJzlibxaWEAPerXGueHyyMMGrRbq-5ErQWx8Q8nmwAnbOa7gLuF"
          alt=""
        />
        <span
          class="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt"
          >Live video</span
        >
      </div>
      <div
        class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-green-500"
      >
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v4/y7/r/Ivw7nhRtXyo.png?_nc_eui2=AeGm7W70kVHwGi8X9PrD-eFWkBVQC4m7dx6QFVALibt3HlMs4_pqRAe1xV61m-ceuWzZ2Tg9ZAdMkmUL3Hu2lz8J"
          alt=""
        />
        <span
          class="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt"
          >Photo/video</span
        >
      </div>
      <div
        class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-yellow-500"
      >
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v4/yd/r/Y4mYLVOhTwq.png?_nc_eui2=AeHdZW7-e9L4XZ1I4EhHXN7rfPQ6N5_OUfV89Do3n85R9aREhKahfT_SVHB85U9E_bdX5MhLavebmjBWZwN5WqAe"
          alt=""
        />
        <span
          class="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt"
          >Felling/activity</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";
const user = inject("user");
</script>
