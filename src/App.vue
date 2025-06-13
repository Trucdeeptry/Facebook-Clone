<template>
  <router-view v-if="isReady" :key="$route.fullPath"></router-view>
</template>

<script setup>
import { loginUser } from "./composables/autoLogin";
import { watch, ref } from "vue";
const isReady = ref(false);
const { userInfo, isLoadingUser } = loginUser();

watch(isLoadingUser, async (loading) => {

  if (!loading) {
    isReady.value = true
  }
});
</script>
