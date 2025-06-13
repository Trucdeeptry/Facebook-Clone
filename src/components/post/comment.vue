<template>
  <!-- LIST COMMENT -->
  <section class="relative">
    <div v-for="comment in formatCommentsTime(comments)" :key="comment.id" class="flex space-x-2">
      <img :src="comment.user.avatar" alt="Profile picture" class="w-9 h-9 rounded-full object-cover" />
      <div>
        <div class="inline-flex flex-col">
          <div class="bg-gray-100 inline-flex dark:bg-dark-third flex-col p-2 rounded-2xl text-sm">
            <router-link :to="`user/${comment.user_id}`" class="hover:underline font-semibold">{{
              comment.user.firstname +
              " " +
              comment.user.surname
            }}</router-link>

            <span class="max-w-96">
              <router-link :to="`user/${authorOfReplies.user_id}`" class="font-bold hover:underline cursor-pointer"
                v-if="authorOfReplies">{{
                  authorOfReplies.user.firstname +
                  " " +
                  authorOfReplies.user.surname
                }}</router-link>
              {{ " " + comment.text }}</span>
          </div>
          <div
            class="px-2 pb-3 min-w-52 relative items-center  text-xs text-gray-500 inline-flex gap-3 dark:text-dark-txt">
            <span> {{ comment.formatedTime }}</span>
            <react_toggle @updateLikes="commentUpdate" :userId="user.user_id" :targetId="comment.id"
              :likes="comment.likes" type="comment"></react_toggle>
            <span class="font-semibold cursor-pointer hover:underline">Reply</span>
            <react_icon :object="comment"></react_icon>
          </div>
        </div>
        <!-- REPLY COMMENT -->
        <comment :commentsProp="comment.replies" :authorOfReplies="comment"></comment>
        <!-- END REPLY COMMENT -->
      </div>
    </div>
  </section>

  <!-- END LIST COMMENT -->
</template>

<script setup>
import react_icon from "./react_icon.vue";
import { defineProps, ref, inject } from "vue";
import react_toggle from "./react_toggle.vue";
import { formatTime } from "../../composables/dateHanlde";
const props = defineProps(["commentsProp", "authorOfReplies"]);
const comments = ref(props.commentsProp);
function formatCommentsTime(comments) {
  const result = comments.map(comment => ({
    ...comment,
    replies: formatCommentsTime(comment.replies),
    formatedTime: formatTime(comment.created_at),
  }))
  return result
}
const user = inject("user");
function commentUpdate(info) {
  const { likes, targetId } = info
  const updatedComments = comments.value.map(comment => {
    if (comment.id === targetId) {
      return {
        ...comment,
        likes
      }
    }
    return comment
  })
  comments.value = updatedComments

}
</script>
