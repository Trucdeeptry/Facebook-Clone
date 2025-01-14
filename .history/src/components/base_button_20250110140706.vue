<template>
  <button
    type="button"
    class="p-2 hover:opacity-80 px-5 font-bold rounded-lg"
    :class="{bg}"
    @click="$router.push(push)"
  >
    Back to login
  </button>
</template>

<script>
import { defineProps } from 'vue';
const props = defineProps(['push', 'bg', 'content'])
</script>