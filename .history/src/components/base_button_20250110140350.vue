<template>
  <button
    type="button"
    class="p-2 hover:opacity-80 px-5 font-bold rounded-lg bg-gray-300"
    @click="$router.push('/login')"
  >
    Back to login
  </button>
</template>

<script>
import { defineProps } from 'vue';
</script>