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
            <router-link
              :to="`user/${comment.user_id}`"
              class="hover:underline font-semibold"
              >{{
                comment.author_info.info.firstName +
                " " +
                comment.author_info.info.surName
              }}</router-link
            >

            <span class="max-w-96">
              <router-link
                :to="`user/${authorOfReplies.user_id}`"
                class="font-bold hover:underline cursor-pointer"
                v-if="authorOfReplies"
                >{{
                  authorOfReplies.author_info.info.firstName +
                  " " +
                  authorOfReplies.author_info.info.surName
                }}</router-link>
              {{ " " + comment.comment }}</span
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
            <react_icon :object="comment"></react_icon>
          </div>
        </div>
        <!-- REPLY COMMENT -->
        <comment
          :commentsProp="comment.replies"
          :authorOfReplies="comment"
        ></comment>
        <!-- END REPLY COMMENT -->
      </div>
    </div>
  </section>

  <!-- END LIST COMMENT -->
</template>

<script setup>
import react_icon from "./react_icon.vue";
import { defineProps } from "vue";
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
</script>
