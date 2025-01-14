<template>
  <button
    type="button"
    class="p-2 hover:opacity-80 px-5 font-bold rounded-lg"
    :class="{[props.bg]: true}"
    @click="$router.push(props.push)"
  >
    {{ props.content }}
  </button>
</template>

<script>
import { defineProps } from 'vue';
const props = defineProps(['push', 'bg', 'content'])
</script>