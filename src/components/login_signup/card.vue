<template>
  <div class="header bg-white shadow-lg w-full p-4">
    <router-link to="/home"><img class="w-36" src="/img/home/demo-logo.png" alt="" /></router-link>
  </div>
  <div class="content bg-[#e9ebee] py-32">
    <div class="card shadow-md rounded-lg bg-white m-auto w-[33rem]">
      <h1 class="p-6 border-b-2 text-xl font-bold">{{ title }}</h1>
      <div class="border-b-2 px-6 py-4">
        <slot name="body"></slot>
      </div>
      <div class="px-6 py-4">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["title"]);
</script>
