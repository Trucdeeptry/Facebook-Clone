<template>
    <div class="bg-black/50 w-screen h-screen fixed">
        <div
          class=" shadow rounded-lg bg-white w-1/2 dark:bg-dark-second  p-6"
        >
          <p class="font-bold text-2xl dark:text-primary-txt text-center">
            {{ props.title }}
          </p>
        </div>

    </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["title", 'postInfo']);
console.log(props.postInfo);

</script>
