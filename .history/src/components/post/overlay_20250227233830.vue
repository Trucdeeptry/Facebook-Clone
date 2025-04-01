<template>
    <div class="fixed shadow bg-white w-1/2  dark:bg-dark-second  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6">
        <p class="font-bold text-2xl text-center">{{ props.title }}</p>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';
    const props = defineProps(['title'])
</script>