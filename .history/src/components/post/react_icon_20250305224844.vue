<template>
  <div
    @click="toggleEmotions(object._id)"
    class="hover:bg-gray-200/70 p-1 px-2 rounded-xl flex flex-row-reverse items-center hover:underline cursor-pointer"
    v-if="
      (objectEmotion = getPostEmotion(object.liked_by)) &&
      objectEmotion.count > 0
    "
  >
    <span class="ml-2 text-gray-500 dark:text-dark-txt">
      {{ objectEmotion.count }}</span
    >
    <div v-for="emotion in objectEmotion.type" :key="emotion">
      <i
        class="-mr-0.5"
        :class="iconMap[emotion]"
        :style="{ color: iconColorMap[emotion] }"
      ></i>
    </div>
  </div>
  <react_list
    @closeEmotions="toggleEmotions(null)"
    v-if="activeEmotion == object._id"
    :reacts="object.liked_by"
  ></react_list>
</template>

<script setup>
import { ref, defineProps } from "vue";
import react_list from "./react_list.vue";
const props = defineProps(["object"]);

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
