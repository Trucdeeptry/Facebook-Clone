<template>
  <div
    @click="toggleEmotions(post._id)"
    class="flex flex-row-reverse items-center hover:underline cursor-pointer"
    v-if="(postEmotion = getPostEmotion(post.liked_by))"
  >
    <span class="ml-2 text-gray-500 dark:text-dark-txt">
      {{ postEmotion.count }}</span
    >
    <div v-for="emotion in postEmotion.type" :key="emotion">
      <i
        class="-mr-0.5"
        :class="iconMap[emotion]"
        :style="{ color: iconColorMap[emotion] }"
      ></i>
    </div>
  </div>
  <like_list
    @closeEmotions="toggleEmotions(null)"
    v-if="activeEmotion == post._id"
    :reacts="post.liked_by"
  ></like_list>
</template>

<script setup>
import { ref, defineProps } from "vue";
import like_list from "./like_list.vue";
const props = defineProps([""]);
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
const activeEmotion = ref(null);
function toggleEmotions(postId) {
  activeEmotion.value = postId;
}
function getPostEmotion(likedList) {
  const reacts = likedList.map((react) => react.type);
  const count = reacts.length;
  const uniqueReact = [...new Set(reacts)];
  return {
    type: uniqueReact,
    count,
  };
}
</script>
