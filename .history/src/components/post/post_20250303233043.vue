<template>
  <section>
    <loading_post v-if="!props.postsProp.length > 0"></loading_post>
    <div
      v-else
      v-for="post in posts"
      :key="post._id"
      class="shadow bg-white dark:bg-dark-second dark:text-primary-txt mt-4 rounded-lg"
    >
      <!-- POST AUTHOR -->
      <div class="flex items-center justify-between px-4 py-2">
        <div class="flex space-x-2 items-center">
          <div class="relative">
            <a href="#">
              <img
                :src="post.author_info.avatar"
                alt="Profile picture"
                class="object-cover w-8 h-8 rounded-full" />
              <span
                class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"
              ></span
            ></a>
          </div>
          <div>
            <div class="font-semibold">
              <router-link
                :to="`user/${post.user_id}`"
                class="hover:!underline"
                >{{
                  post.author_info.info.firstName +
                  " " +
                  post.author_info.info.surName
                }}</router-link
              >
            </div>
            <div class="flex gap-1 items-center">
              <span class="text-sm text-gray-500">{{ post.formatedTime }}</span>
              <span>·</span>
              <i class="fa-solid fa-earth-americas text-gray-500"></i>
            </div>
          </div>
        </div>
        <div
          class="w-8 h-8 grid place-items-center text-xl text-gray-500 hover:bg-gray-200 dark:text-dark-txt dark:hover:bg-dark-third rounded-full cursor-pointer"
        >
          <i class="bx bx-dots-horizontal-rounded"></i>
        </div>
      </div>
      <!-- END POST AUTHOR -->

      <!-- POST CONTENT -->
      <div class="px-4 py-2">
        {{ post.content }}
      </div>
      <!-- END POST CONTENT -->

      <!-- POST IMAGE -->
      <div class="py-2">
        <img
          :src="post.image"
          class="w-full max-h-[600px] object-cover"
          alt="Post image"
        />
      </div>
      <!-- END POST IMAGE -->

      <!-- POST REACT -->
      <div class="px-4 py-2">
        <div class="flex items-center justify-between">
          <div
            @click="toggleEmotions(post._id)"
            class="flex flex-row-reverse items-center"
          >
            <div
              v-for="react in post."
              :key="react.type"
            >
              <div
                v-if="react.count > 0"
                class="ml-2 text-gray-500 dark:text-dark-txt hover:underline mr-2 cursor-pointer"
              >
              <span>{{ react.count }}</span>
                <i
                  :class="iconMap[react.type]"
                  :style="{ color: iconColorMap[react.type] }"
                ></i>
              </div>
            </div>
          </div>
          <div class="text-gray-500 dark:text-dark-txt flex items-center gap-3">
            <span
              class="cursor-pointer hover:underline"
              @click="toggleOverlay(post._id)"
            >
              <span class="mr-1">{{ countComment(post.comments) }}</span>
              <i class="fa-solid fa-comment"></i
            ></span>
            <span>66 <i class="fa-solid fa-share"></i></span>
          </div>
        </div>
      </div>
      <!-- END POST REACT -->

      <!-- POST ACTION -->
      <div class="py-2 px-4">
        <div
          class="border border-gray-200 dark:border-dark-third border-l-0 border-r-0 py-1"
        >
          <div class="flex space-x-2">
            <div
              class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt"
            >
              <i class="fa-regular fa-thumbs-up"></i>
              <span class="text-sm font-semibold">Like</span>
            </div>
            <div
              @click="toggleOverlay(post._id)"
              class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt"
            >
              <i class="fa-regular fa-comment"></i>
              <span class="text-sm font-semibold">Comment</span>
            </div>
            <div
              class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt"
            >
              <i class="bx bx-share bx-flip-horizontal"></i>
              <span class="text-sm font-semibold">Share</span>
            </div>
          </div>
        </div>
      </div>
      <!-- END POST ACTION -->
      <div class="p-2 overflow-hidden" v-if="isComment">
        <comment :commentsProp="post.comments"></comment>
      </div>
      <overlay
        :title="post.author_info.info.surName + `'s` + ' Post'"
        :postInfo="post"
        @closeOverlay="toggleOverlay(null)"
        v-if="isOverlay && activePost === post._id"
      ></overlay>
      <!-- COMMENT FORM -->
      <div
        v-if="isComment"
        class="py-2 pb-3 px-4 sticky z-10 -bottom-1 bg-white dark:bg-dark-second w-full"
      >
        <div class="flex space-x-2">
          <img
            :src="user.avatar"
            alt="Profile picture"
            class="w-9 h-9 rounded-full object-cover"
          />
          <div
            class="flex-1 flex bg-gray-100 dark:bg-dark-third rounded-full items-center justify-between px-3"
          >
            <input
              type="text"
              placeholder="Write a comment..."
              class="outline-none bg-transparent flex-1"
            />
            <div class="flex space-x-0 items-center justify-center">
              <span
                class="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl"
                ><i class="bx bx-smile"></i
              ></span>
              <span
                class="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl"
                ><i class="bx bx-camera"></i
              ></span>
              <span
                class="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl"
                ><i class="bx bxs-file-gif"></i
              ></span>
              <span
                class="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl"
                ><i class="bx bx-happy-heart-eyes"></i
              ></span>
            </div>
          </div>
        </div>
      </div>
      <!-- END COMMENT FORM -->
      <like_list
        @closeEmotions="toggleEmotions(null)"
        v-if="activeEmotion == post._id"
        :reacts="data"
      ></like_list>
    </div>
  </section>
</template>

<script setup>
import like_list from "./like_list.vue";
import overlay from "./overlay.vue";
import comment from "./comment.vue";
import loading_post from "../home/loading_post.vue";
import { useStore } from "vuex";
import { formatTime } from "../../composables/dateHanlde";
import { defineProps, inject, onBeforeMount, ref } from "vue";
const store = useStore();

const props = defineProps({
  postsProp: {
    type: Array,
    default: () => [],
  },
  isOverlay: {
    type: Boolean,
    default: false,
  },
  isComment: {
    type: Boolean,
    default: false,
  },
});
const user = inject("user");
const posts = ref([]);
const isLoadingPosts = ref(true);
// Count comment and replies by recursion
function countComment(comments) {
  let count = comments?.length;
  for (const comment of comments) {
    if (comment.replies?.length > 0) {
      count += countComment(comment.replies);
    }
  }
  return count;
}
// Hanlde overlay post
const activePost = ref(null);
function toggleOverlay(postId) {
  activePost.value = postId;
}
// hanlde emotions list
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
// dummy data
const data = [
  { type: "like", count: 10 },
  { type: "heart", count: 12 },
  { type: "haha", count: 20 },
  { type: "sad", count: 1 },
  { type: "wow", count: 0 },
  { type: "angry", count: 10 },
];
const activeEmotion = ref(null);
function toggleEmotions(postId) {
  activeEmotion.value = postId;
}
// function hanldeReactData(reactList) {
//   const reactCounts = reactList.reduce((acc, react) => {
//     acc[react.type] = (acc[react.type] || 0) + 1;
//     return acc;
//   }, {});
//   return [
//     { type: "like", count: reactCounts.like || 0 },
//     { type: "heart", count: reactCounts.heart || 0 },
//     { type: "haha", count: reactCounts.haha || 0 },
//     { type: "wow", count: reactCounts.wow || 0 },
//     { type: "sad", count: reactCounts.sad || 0 },
//     { type: "angry", count: reactCounts.angry || 0 },
//   ];
// }
onBeforeMount(async () => {
  try {
    posts.value = props.postsProp.map((post) => {
      return {
        ...post,
        formatedTime: formatTime(post.created_at),
      };
    });
  } catch (error) {
    console.log(error);
  } finally {
    isLoadingPosts.value = false;
    console.log(posts.value);
  }
});
</script>
