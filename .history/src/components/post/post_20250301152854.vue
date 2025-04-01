<template>
  <section>
    <loading_post v-if="!props.postsProp.length > 0"></loading_post>
    <div
      v-else
      v-for="post in posts"
      :key="post._id"
      class="shadow bg-white  dark:bg-dark-second dark:text-primary-txt mt-4 rounded-lg"
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
              <a href="#" class="hover:!underline">{{
                post.author_info.info.firstName +
                " " +
                post.author_info.info.surName
              }}</a>
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
          <div class="flex flex-row-reverse items-center">
            <span
              class="ml-2 text-gray-500 dark:text-dark-txt hover:underline mr-2 cursor-pointer"
              >{{ post.liked_by.length }}</span
            >
            <span
              class="rounded-full grid place-items-center text-2xl -ml-1 text-red-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                id="like"
                class="scale-125"
              >
                <path
                  fill="url(#a)"
                  d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Z"
                ></path>
                <path
                  fill="#fff"
                  d="M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725.1.163.132.36.089.546-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666ZM3.6 7h.8a.6.6 0 0 1 .6.6v3.8a.6.6 0 0 1-.6.6h-.8a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6Z"
                ></path>
                <defs>
                  <linearGradient
                    id="a"
                    x1="8"
                    x2="8"
                    y2="16"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#18AFFF"></stop>
                    <stop offset="1" stop-color="#0062DF"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>
          <div class="text-gray-500 dark:text-dark-txt flex items-center gap-3">
            <span>
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
        v-if="isOverlay"
      ></overlay>
      <!-- COMMENT FORM -->
      <div class="py-2 px-4 fixed bottom-0">
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
    </div>
  </section>
</template>

<script setup>
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
