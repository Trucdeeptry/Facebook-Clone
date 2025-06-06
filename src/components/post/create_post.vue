<template>
  <!-- create post -->
  <div v-if="isModalOpen" id="CreatePostOverlay" class="fixed z-50 top-0 left-0 w-full h-full bg-black/70">
    <div class="grid h-screen place-items-center p-4">
      <div class="dark:bg-dark-main bg-white w-full max-w-[600px] mx-auto shadow-xl rounded-xl">
        <div class="flex items-center relative my-3.5 mx-1">
          <div class="text-[22px] text-black dark:text-primary-txt font-bold w-full text-center">
            Create post
          </div>
          <div @click="emit('closePost')"
            class="absolute right-3 rounded-full p-1.5 px-2.5 bg-gray-200 hover:bg-gray-300 cursor-pointer">
            <i class="fa-solid fa-xmark text-[27px]"></i>
          </div>
        </div>

        <div class="border-t border-t-gray-500">
          <div class="p-4">
            <div class="flex relative items-center justify-between">
              <div class="flex items-center">
                <img class="rounded-full ml-1 min-w-[45px] max-h-[45px] object-cover" :src="user.avatar" />
                <div class="ml-4">
                  <div class="font-bold dark:text-primary-txt">
                    {{ user.firstname + " " + user.surname }}
                  </div>
                  <div
                    class="flex cursor-pointer items-center gap-1 w-[100px] dark:text-primary-txt dark:bg-dark-third bg-gray-200 p-1 px-2 rounded-lg">
                    <i class="fa-solid fa-earth-americas"></i>
                    <span class="font-bold pl-1.5 text-[13px]">Public</span>
                    <i class="fa-solid fa-caret-down"></i>
                  </div>
                </div>

              </div>
              <i @click="openMagic"
                class="dark:text-white cursor-pointer text-xl hover:opacity-60 fa-solid fa-wand-magic-sparkles"></i>
              <div v-show="isOpenMagic" class="absolute right-0 top-12 w-[90%] max-w-md mx-auto md:right-10 z-50">
                <!-- Card container -->
                <div
                  class="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl dark:shadow-xl border border-gray-100 dark:border-gray-700 p-6 transform transition-all duration-300 hover:shadow-3xl dark:hover:shadow-2xl">
                  <!-- Header with icon -->
                  <div class="flex items-center mb-4">
                    <div class="bg-blue-500 dark:bg-blue-600 rounded-full p-2 mr-3">
                      <i class="fas fa-hashtag text-white text-sm"></i>
                    </div>
                    <h2 class="text-lg font-bold text-gray-800 dark:text-gray-100">
                      Gợi ý Hashtag
                    </h2>
                  </div>

                  <!-- Suggested hashtags -->
                  <div class="mb-5">
                    <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      {{
                        hashtags.length > 0
                          ? 'Gợi ý Hashtag mở rộng chủ đề, tăng tương tác'
                          : 'Bạn chưa có hashtag'
                      }}
                    </p>
                    <loading_spinner v-if="isLoadingHashtags"></loading_spinner>
                    <div v-else class="flex flex-wrap gap-2">
                      <span :key="hashtag" v-for="hashtag in suggestedHashtags"
                        class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-700 transition-colors cursor-pointer">
                        {{ hashtag }}
                      </span>
                    </div>
                  </div>

                  <!-- Interaction Prediction -->
                  <div v-if="!isLoadingPredict">
                    <div v-if="predictNumber">
                      <div
                        class="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                        <h3 class="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3 flex items-center">
                          <i class="fas fa-chart-line mr-2 text-green-500"></i>
                          Dự đoán tương tác
                        </h3>

                        <div class="space-y-3">
                          <div class="flex items-center justify-between">
                            <div class="flex items-center">
                              <div class="bg-red-100 dark:bg-red-800 rounded-full p-1.5 mr-3">
                                <i class="fas fa-heart text-red-500 text-xs"></i>
                              </div>
                              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Likes
                              </span>
                            </div>
                            <span class="text-lg font-bold text-red-500 mr-2">
                              {{ predictNumber.likes }}
                            </span>
                          </div>

                          <div class="flex items-center justify-between">
                            <div class="flex items-center">
                              <div class="bg-blue-100 dark:bg-blue-800 rounded-full p-1.5 mr-3">
                                <i class="fas fa-comment text-blue-500 text-xs"></i>
                              </div>
                              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Comments
                              </span>
                            </div>
                            <span class="text-lg font-bold text-blue-500 mr-2">
                              {{ predictNumber.comment }}
                            </span>
                          </div>

                          <div class="flex items-center justify-between">
                            <div class="flex items-center">
                              <div class="bg-green-100 dark:bg-green-800 rounded-full p-1.5 mr-3">
                                <i class="fas fa-share text-green-500 text-xs"></i>
                              </div>
                              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Shares
                              </span>
                            </div>
                            <span class="text-lg font-bold text-green-500 mr-2">
                              {{ predictNumber.shares }}
                            </span>
                          </div>
                        </div>
                      </div>

                      <button @click="applyHashtags"
                        class="w-full cursor-pointer mt-4 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 text-white font-semibold py-2.5 px-4 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        <i class="fas fa-magic mr-2"></i>
                        Áp dụng hashtag
                      </button>
                    </div>
                  </div>
                  <loading_spinner v-else></loading_spinner>
                </div>
              </div>

            </div>


            <div class="max-h-[350px] overflow-auto">
              <textarea class="w-full outline-none dark:text-primary-txt border-0 p-2 mt-4 focus:ring-0 text-[22px]"
                placeholder="What's on your mind?" cols="30" rows="3" v-model="textContent"></textarea>
              <input type="text" v-model="hashtags" placeholder="What's your topic?"
                class="border dark:text-primary-txt rounded-xl w-full px-3 py-2">
            </div>

            <div class="border-1 rounded-xl dark:border-gray-500 mt-4 p-1 shadow-sm flex items-center justify-between">
              <div class="font-bold p-4 text-sm dark:text-primary-txt">
                Add to your post
              </div>
              <div class="flex items-center">
                <button class="hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full p-2 cursor-pointer w-11 h-11">
                  <i class="fa-regular fa-face-laugh text-[24px]" style="color: #ffd43b"></i>
                </button>
                <button class="hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full p-2 cursor-pointer w-11 h-11">
                  <i class="fa-solid fa-photo-film text-[24px]" style="color: #63e6be"></i>
                </button>
                <button class="hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full p-2 cursor-pointer w-11 h-11">
                  <i class="fa-solid fa-user-tag text-[24px]" style="color: #74c0fc"></i>
                </button>
                <button class="hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full p-2 cursor-pointer w-11 h-11">
                  <i class="fa-solid fa-ellipsis text-[24px] dark:text-white"></i>
                </button>
              </div>
            </div>

            <!-- <div v-if="error">
              <div
                class="w-full bg-red-100 text-red-700 rounded-lg mt-3 text-center"
              >
                <div class="p-0.5">error</div>
              </div>
            </div> -->

            <button @click="createPost" :disabled="!textContent || isPostCreating"
              class="w-full cursor-pointer bg-blue-500 disabled:cursor-not-allowed disabled:bg-gray-500 hover:bg-blue-600 text-white font-extrabold p-1.5 mt-3 rounded-lg">
              {{ isPostCreating ? 'Posting...' : 'Post' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end create post -->
</template>

<script setup>
import { defineProps, defineEmits, inject, ref } from "vue";
import { useStore } from "vuex";
import loading_spinner from "../loading/loading_spinner.vue";
const props = defineProps({
  isModalOpen: Boolean,
  keyOfPost: {
    type: String,
    default: 'postsHome'
  }
});
const store = useStore();
const user = inject("user");
const emit = defineEmits(["closePost", "updatePostList"]);
const textContent = ref('')
const hashtags = ref([])
const isOpenMagic = ref(false);
const suggestedHashtags = ref([]);
const isLoadingHashtags = ref(false);
const isLoadingPredict = ref(false);
const predictNumber = ref({})
const isPostCreating = ref(false);
async function getSuggestedHashtags(hashtags) {
  isLoadingHashtags.value = true;

  suggestedHashtags.value = await store.dispatch("post/getSuggestHashTags", hashtags);
  isLoadingHashtags.value = false;
}
async function getPredict() {
  isLoadingPredict.value = true
  try {
    const hashtagsArray = hashtags.value.split(' ').filter(tag => tag.startsWith('#'));
    await getSuggestedHashtags(hashtagsArray);


    const new_ad = {
      text: textContent.value,
      hashtags: suggestedHashtags.value,
      created_at: store.getters['home/getCurrentDateTime']
    }
    predictNumber.value = await store.dispatch("post/getPredictReact", new_ad)
    console.log(predictNumber.value.likes);

  } catch (error) {
    console.log(error);

  } finally {
    isLoadingPredict.value = false
  }
}
const savedHashtag = ref('')
async function openMagic() {
  isOpenMagic.value = !isOpenMagic.value;
  if (!isOpenMagic)
    return
  if (savedHashtag.value == hashtags.value)
    return
  if (hashtags.length === 0)
    return;
  console.log('get');

  await getPredict()
  savedHashtag.value = hashtags.value
}
function applyHashtags() {
  hashtags.value = suggestedHashtags.value.join(' ');
  isOpenMagic.value = false;
}
async function createPost() {
  isPostCreating.value = true;
  if (!textContent.value.trim()) {
    return;
  }

  const post = {
    text: textContent.value,
    hashtags: hashtags.value,
    user_id: user.value.user_id,
    image: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg'
  };
  await store.dispatch("post/addPost", post)
    .then((data) => {
      textContent.value = '';
      hashtags.value = [];
      emit('closePost');
      updatePost(data.id);
    })
    .catch(error => {
      console.error("Error creating post:", error);
    });


  isPostCreating.value = false;
}
async function updatePost(postId) {
  const posts = store.getters["post/getPosts"](props.keyOfPost);
  const post = await store.dispatch('post/getPostById', postId)
  posts.unshift(post);
  store.commit("post/setPosts", {
    posts,
    key: props.keyOfPost
  });
}
</script>
