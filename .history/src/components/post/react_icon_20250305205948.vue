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
</template>

<script setup></script>
