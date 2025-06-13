<template>
  <section>
    <loading_post v-if="posts === null"></loading_post>

    <h1 v-else-if="posts.length == 0" class="text-center font-bold text-2xl mt-10">
      Nothing Here! You haven't information
      <br>
      If you're employer, please go to /login with email "phantruc438@gmail.com" and default password that have the
      information of the post
    </h1>
    <div v-for="post in posts" :key="post.id"
      class="shadow bg-white dark:bg-dark-second dark:text-primary-txt mt-4 rounded-lg">
      <!-- POST AUTHOR -->
      <div class="flex items-center justify-between px-4 py-2">

        <div class="flex space-x-2 items-center">
          <div class="relative">
            <a href="#">
              <img :src="post.user.avatar" alt="Profile picture" class="object-cover w-8 h-8 rounded-full" />
              <span class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span></a>
          </div>
          <div>
            <div class="font-semibold">
              <router-link :to="`/user/${post.user.user_id}`" class="hover:!underline">{{
                post.user.firstname +
                " " +
                post.user.surname
              }}</router-link>
            </div>
            <div class="flex gap-1 items-center">
              <span class="text-sm text-gray-500" v-if="post.is_ad">Sponsor</span>
              <span class="text-sm text-gray-500" v-else>{{ post.formatedTime }}</span>
              <span>·</span>

              <i class="fa-solid fa-earth-americas text-gray-500"></i>
            </div>
          </div>
        </div>
        <div
          class="w-8 h-8 grid place-items-center text-xl text-gray-500 hover:bg-gray-200 dark:text-dark-txt dark:hover:bg-dark-third rounded-full cursor-pointer">

          <i class="bx bx-dots-horizontal-rounded"></i>
        </div>
      </div>
      <!-- END POST AUTHOR -->

      <!-- POST CONTENT -->
      <div class="px-4 py-2">
        <p> {{ post.text }}</p>
        <div class="flex gap-1 flex-wrap mt-3">
          <p class="font-bold hover:underline cursor-pointer" v-for="hashtag in post.hashtags" :key="hashtag">{{ hashtag
          }}</p>

        </div>
      </div>
      <!-- END POST CONTENT -->

      <!-- POST IMAGE -->
      <div v-if="post.image && post.image.length" class="grid gap-2" :class="{
        'grid-cols-1': post.image.length === 1,
        'grid-cols-2': post.image.length > 1
      }">

        <template v-for="(img, index) in post.image.slice(0, 4)" :key="img">
          <div class="relative w-full max-h-96  sm:h-full overflow-hidden">
            <img :src="img" alt="Post image" class="w-full cursor-pointer h-full object-cover" />

            <!-- Overlay nếu là ảnh cuối và còn ảnh khác -->
            <div v-if="index === 3 && post.image.length > 4"
              class="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-2xl font-bold">
              +{{ post.image.length - 4 }}
            </div>
          </div>
        </template>
      </div>
      <!-- END POST IMAGE -->

      <!-- POST REACT -->
      <div class="px-4 py-2">
        <div class="flex justify-between items-center">
          <react_icon :key="post.id + post.likes.length" :object="{ id: post.id, likes: post.likes }"></react_icon>
          <div class="text-gray-500  dark:text-dark-txt flex items-center gap-3">
            <span class="cursor-pointer hover:underline" @click="toggleCommentOverlay(post.id)">
              <span class="mr-1">{{ countComment(post.comments) }}</span>
              <i class="fa-solid fa-comment"></i></span>
            <span>{{ post.share.length }} <i class="fa-solid fa-share"></i></span>
          </div>
        </div>
      </div>
      <!-- END POST REACT -->

      <!-- POST ACTION -->
      <div class="py-2 px-4">
        <div class="border border-gray-200 dark:border-dark-third border-l-0 border-r-0 py-1">
          <div class="flex space-x-2">
            <react_toggle @updateLikes="postUpdate" :userId="user.user_id" :targetId="post.id" :likes="post.likes"
              type="post">
            </react_toggle>
            <div @click="toggleCommentOverlay(post.id)"
              class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
              <i class="fa-regular fa-comment"></i>
              <span class="text-sm font-semibold">Comment</span>
            </div>
            <div
              class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
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
      <overlay :title="post.user.surname + `'s` + ' Post'" :postInfo="post" @closeOverlay="toggleCommentOverlay(null)"
        v-if="isOverlay && activePost === post.id"></overlay>
      <comment_form @updateComment="commentUpdate" v-if="isComment" :user="user" :postId="post.id"></comment_form>
    </div>
  </section>
</template>

<script setup>
import overlay from "./post_overlay.vue";
import comment from "./comment.vue";
import loading_post from "../home/loading_post.vue";
import { formatTime } from "../../composables/dateHanlde";
import { defineProps, inject, ref, watch, reactive } from "vue";
import react_icon from "./react_icon.vue";
import react_toggle from "./react_toggle.vue";
import comment_form from "./comment_form.vue";
const props = defineProps({
  isOverlay: {
    type: Boolean,
    default: false,
  },
  isComment: {
    type: Boolean,
    default: false,
  },
  postsProp: {
    type: Array,
    default: () => null,
  },
});
const posts = ref(null)
watch(
  () => props.postsProp,
  (newVal) => {
    if (newVal) {
      posts.value = newVal.map(post => ({
        ...post,
        formatedTime: formatTime(post.created_at)
      }))
    }
  },
  { immediate: true }
)

const user = inject("user");


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
function toggleCommentOverlay(postId) {
  activePost.value = postId;
}
function postUpdate(info) {
  const { likes, targetId } = info
  const updatedPosts = posts.value.map(post => {
    if (post.id === targetId) {
      return {
        ...post,
        likes
      }
    }
    return post
  })
  posts.value = updatedPosts
}

function commentUpdate(info) {
  const { comment, postId } = info
  if (!comment || !postId) {
    console.log('missing info for update list comment');
    return
  }
  const newComment = {
    ...comment,
    user
  }
  const index = posts.value.findIndex(p => p.id == postId)
  if (index !== -1) {
    posts.value[index].comments.push(newComment)
  }
}
</script>
