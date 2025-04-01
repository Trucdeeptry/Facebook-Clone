<template>
  <!-- LIST COMMENT -->
  <section class="relative">
    <div
      v-for="comment in formatCommentsTime(props.commentsProp)"
      :key="comment._id"
      class="flex space-x-2"
    >
      <img
        :src="comment.author_info.avatar"
        alt="Profile picture"
        class="w-9 h-9 rounded-full object-cover"
      />
      <div>
        <div class="inline-flex flex-col">
          <div
            class="bg-gray-100 inline-flex dark:bg-dark-third flex-col p-2 rounded-2xl text-sm"
          >
            <router-link :to="u" class="hover:underline font-semibold">{{
              comment.author_info.info.firstName +
              " " +
              comment.author_info.info.surName
            }}</router-link>

            <span class="max-w-96"
              ><span
                class="font-bold hover:underline cursor-pointer"
                v-if="authorOfReplies"
                >{{
                  authorOfReplies.info.firstName +
                  " " +
                  authorOfReplies.info.surName
                }}</span
              >{{ " " + comment.comment }}</span
            >
          </div>
          <div
            class="p-2 min-w-52 relative text-xs text-gray-500 inline-flex gap-3 dark:text-dark-txt"
          >
            <span> {{ comment.formatedTime }}</span>
            <span class="font-semibold cursor-pointer hover:underline"
              >Like</span
            >
            <span class="font-semibold cursor-pointer hover:underline"
              >Reply</span
            >
            <div
              v-if="comment.liked_by?.length > 0"
              class="absolute right-2 flex items-center gap-1"
            >
              <span>{{ comment.liked_by?.length }}</span>
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
            </div>
          </div>
        </div>
        <!-- REPLY COMMENT -->
        <comment
          :commentsProp="comment.replies"
          :authorOfReplies="comment.author_info"
        ></comment>
        <!-- END REPLY COMMENT -->
      </div>
    </div>
  </section>

  <!-- END LIST COMMENT -->
</template>

<script setup>
import { defineProps, ref } from "vue";
import { formatTime } from "../../composables/dateHanlde";
const props = defineProps(["commentsProp", "authorOfReplies"]);
// add formatTime, change original time (in db) to standard time for render
function formatCommentsTime(comments) {
  const result = comments.map((comment) => ({
    ...comment,
    replies: formatCommentsTime(comment.replies),
    formatedTime: formatTime(comment.created_at),
  }));
  return result;
}
// show comments box
const commentShow = ref(false);
</script>
