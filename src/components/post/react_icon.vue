<template>
  <div>
    <div @click="toggleEmotions(object.id)"
      class="hover:bg-gray-500/20 py-1 justify-between px-2 rounded-xl flex flex-row-reverse items-center cursor-pointer" v-if="
        (objectEmotion = getPostEmotion(object.likes)) &&
        objectEmotion.count > 0
      ">
      <span class="ml-2 text-black dark:text-dark-txt">
        {{ objectEmotion.count }}</span>
      <div v-for="emotion in objectEmotion.react" class="-mr-1.5" :key="emotion">
        <img class="w-5" :src="iconMap[emotion]" alt="react">
      </div>
    </div>
    <react_list @closeEmotions="toggleEmotions(null)" v-if="activeEmotion == object.id" :reacts="object.likes">
    </react_list>

  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import react_list from "./react_list.vue";
const props = defineProps(["object"]);

const iconMap = {
  like: "/reactions/like.png",
  love: "/reactions/love.png",
  haha: "/reactions/haha.png",
  wow: "/reactions/wow.png",
  sad: "/reactions/sad.png",
  angry: "/reactions/angry.png",
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
