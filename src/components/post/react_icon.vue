<template>
  <div>
    <div @click="toggleEmotions(object.id)"
      class="hover:bg-gray-500/20 py-1 px-2 rounded-xl flex flex-row-reverse items-center cursor-pointer" v-if="
        (objectEmotion = getPostEmotion(object.likes)) &&
        objectEmotion.count > 0
      ">
      <span class="ml-2 text-black dark:text-dark-txt">
        {{ objectEmotion.count }}</span>
      <div v-for="emotion in objectEmotion.react" :key="emotion">

        <i class="-mr-0.5" :class="iconMap[emotion]"></i>
      </div>
    </div>
    <react_list @closeEmotions="toggleEmotions(null)" v-if="activeEmotion == object.id" :reacts="object.likes">
    </react_list>

  </div>
</template>

<script setup>
import { ref, defineProps, watch } from "vue";
import react_list from "./react_list.vue";
const props = defineProps(["object"]);

const iconMap = {
  like: "fa-solid fa-thumbs-up text-[#146eeb]",
  love: "fa-solid fa-heart text-[#ed384f]",
  haha: "fa-solid fa-laugh-squint text-[#FFD43B]",
  wow: "fa-solid fa-face-surprise text-[#FFD43B]",
  sad: "fa-solid fa-face-sad-tear text-[#FFD43B]",
  angry: "fa-solid fa-face-angry text-[#ff7b00]",
};

const activeEmotion = ref(null);
function toggleEmotions(postId) {
  activeEmotion.value = postId;
}
function getPostEmotion(likedList) {
  const reacts = likedList.map((react) => react.react);
  const count = reacts.length;
  const uniqueReact = [...new Set(reacts)];
  return {
    react: uniqueReact,
    count,
  };
}
</script>
