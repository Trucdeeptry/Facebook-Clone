<template>
  <div
    class="flex justify-center items-center fixed w-screen h-screen bg-black/75 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
  >
    <div
      class="min-w-1/3 p-3 h-[28rem] rounded-xl bg-white dark:bg-dark-second"
    >
      <ul class="font-bold text-md dark:text-primary-txt flex">
        <div>
          <li
            :class="activeEmotion === 'All' ? 'text-blue-600' : ''"
            class="hover:bg-gray-100 dark:hover:bg-dark-third cursor-pointer p-4 rounded-xl"
          >
            All
          </li>
          <div
            v-if="activeEmotion == 'All'"
            class="h-1 w-full bg-blue-600 round"
          ></div>
        </div>
        <div v-for="react in reactsSort" :key="react.type">
          <li
            class="flex justify-center items-center gap-1 hover:bg-gray-100 dark:hover:bg-dark-third cursor-pointer p-4 rounded-xl"
          >
            <i
              :class="iconMap[react.type]"
              :style="{ color: iconColorMap[react.type] }"
            ></i>

            {{ formatCount(react.count) }}
          </li>
          <div
            v-if="activeEmotion == react.type"
            class="h-1 w-full bg-blue-600 round"
          ></div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
const props = defineProps(["reacts"]);
const reactsSort = props.reacts.sort((a, b) => b.count - a.count);
const iconMap = {
  like: "fa-solid fa-thumbs-up",
  heart: "fa-solid fa-heart",
  haha: "fa-solid fa-laugh-squint",
  wow: "fa-solid fa-face-surprise",
  sad: "fa-solid fa-face-sad-tear",
  angry: "fa-solid fa-face-angry",
};
const iconColorMap = {
  like: "#146eeb",
  heart: "#ed384f",
  haha: "#FFD43B",
  wow: "#FFD43B",
  sad: "#FFD43B",
  angry: "#ff7b00",
};
const formatCount = (count) => {
  return count >= 1000 ? (count / 1000).toFixed(1) + "K" : count;
};

// hanlde active
const activeEmotion = ref("All");
</script>
