<template>
  <div class="flex flex-col gap-1 justify-center items-center h-screen">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/1024px-2023_Facebook_icon.svg.png"
      alt="logo"
      width="150"
      height="150"
    />
    <loading_spinner></loading_spinner>
  </div>
</template>

<script setup>
import loading_spinner from "../components/loading/loading_spinner.vue";
</script>
