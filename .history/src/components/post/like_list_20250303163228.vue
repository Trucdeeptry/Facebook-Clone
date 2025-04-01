<template>
  <div
    class="flex justify-center items-center fixed w-screen h-screen bg-black/75 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
  >
    <div class="w-1/3 p-7 h-[28rem] rounded-xl bg-white dark:bg-dark-second">
      <ul class="font-bold dark:text-primary-txt flex gap-5">
        <li>All</li>
        <li v-for="react in reactsSort" :key="react.type">
            {{ react.type }}: {{ react.count }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["reacts"]);
const reactsSort = props.reacts.sort((a, b) => b.count - a.count);
const iconMap = {
    like: 'fa-solid fa-thumbs-up',
    heart: 'fa-solid fa-heart',
    haha: 'fa-solid fa-laugh-squint',
    wow: 'fa-solid fa-surprise',
    sad: 'fa-solid fa-sad-tear',
    angry: 'fa-solid fa-angry',
    care: 'fa-solid fa-heart',
}
const iconColorMap = {
    like: '#146eeb'
    like: 'fa-solid fa-thumbs-up',
    heart: 'fa-solid fa-heart',
    haha: 'fa-solid fa-laugh-squint',
    wow: 'fa-solid fa-surprise',
    sad: 'fa-solid fa-sad-tear',
    angry: 'fa-solid fa-angry',
    care: 'fa-solid fa-heart',
}
</script>
