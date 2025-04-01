<template>
  <loadingPage v-if="isLoadingUser && isLoadingProfile"></loadingPage>
  <div v-else>
    <header_nav></header_nav>
    <div class="w-full min-h-[100vh] pb-20 bg-[#F1F2F5] dark:bg-dark-main">
      <div class="w-full bg-white dark:bg-dark-second">
        <div class="max-w-[1100px] pt-[56px] mx-auto pb-1">
          <img
            class="rounded-b-xl w-full h-96 object-cover"
            src="/img/home/feed-image-1.png"
          />
          <div
            id="ProfileInfo"
            class="flex md:flex-row flex-col py-4 items-center justify-between px-4"
          >
            <div
              class="flex md:flex-row flex-col gap-4 md:-mt-6 -mt-16 items-center"
            >
              <div class="relative">
                <img
                  class="rounded-full w-[165px] h-[165px] border-white border-4 object-cover"
                  :src="userProfile.avatar"
                />
                <button
                  class="absolute right-0 top-[100px] bg-gray-200 hover:bg-gray-300 p-1.5 rounded-full cursor-pointer"
                >
                  <i class="fa-solid fa-camera text-[25px]"></i>
                </button>
              </div>
              <div class="md:mt-4 text-center md:text-left -mt-3">
                <div class="text-[28px] dark:text-white font-extrabold pt-1">
                  {{
                    userProfile.info?.firstName +
                    " " +
                    userProfile.info?.surName
                  }}
                </div>
                <div
                  class="text-[17px] font-bold text-gray-600 dark:text-gray-300 mb-1.5 text-center md:text-left"
                >
                  {{ userProfile.friends?.length }} friends
                </div>
                <div
                  v-if="userProfile.friend?.length > 0"
                  class="flex md:justify-start justify-center md:-ml-1"
                >
                  <img
                    v-for="friend in friendsInfo.slice(0, 8)"
                    :key="friend.email"
                    class="rounded-full object-cover -ml-2 z-[10] w-[40px] h-[40px] border-white border-2"
                    :src="friend.avatar"
                  />
                </div>
              </div>
            </div>

            <div
              class="flex justify-center dark:bg-dark-button-bg dark:text-white dark:hover:bg-dark-hover w-7/12 md:w-[160px] items-baseline md:my-0 my-4 bg-gray-200 hover:bg-gray-300 rounded-lg cursor-pointer"
            >
              <button
                class="flex justify-around cursor-pointer items-center w-full px-5 py-2 font-bold"
              >
                <i class="fa-solid fa-pen"></i>
                <span> Edit profile</span>
              </button>
            </div>
          </div>

          <div
            class="flex dark:text-dark-txt items-centerw-full border-t h-[50px] py-[4px]"
          >
            <button class="w-[85px]">
              <div
                class="flex items-center text-[15px] justify-center h-[45px] text-blue-500 hover:bg-[#F2F2F2] dark:hover:bg-dark-third w-full font-bold rounded-lg cursor-pointer"
              >
                Posts
              </div>
              <div class="border-b-4 border-b-blue-400 rounded-md"></div>
            </button>
            <button
              class="flex items-center text-[15px] justify-center h-[48px] p-1 hover:bg-[#F2F2F2] dark:hover:bg-dark-third w-[85px] font-bold rounded-lg mx-1 cursor-pointer"
            >
              About
            </button>
            <button
              class="flex items-center text-[15px] justify-center h-[48px] p-1 hover:bg-[#F2F2F2] dark:hover:bg-dark-third w-[85px] font-bold rounded-lg mx-1 cursor-pointer"
            >
              Friends
            </button>
            <button
              class="flex items-center text-[15px] justify-center h-[48px] p-1 hover:bg-[#F2F2F2] dark:hover:bg-dark-third w-[85px] font-bold rounded-lg mx-1 cursor-pointer"
            >
              Videos
            </button>
            <button
              class="flex items-center text-[15px] justify-center h-[48px] p-1 hover:bg-[#F2F2F2] dark:hover:bg-dark-third w-[85px] font-bold rounded-lg mx-1 cursor-pointer"
            >
              Photos
            </button>
            <button
              class="flex items-center text-[15px] justify-center h-[48px] p-1 hover:bg-[#F2F2F2] dark:hover:bg-dark-third w-[85px] font-bold rounded-lg mx-1 cursor-pointer"
            >
              Check-ins
            </button>
          </div>
        </div>
      </div>

      <div
        class="flex-cols md:flex w-full max-w-[1100px] justify-between md:px-0 px-2 mx-auto"
      >
        <div
          id="LeftSection"
          class="md:sticky h-fit -top-[100%] w-full md:w-5/12 mr-4"
        >
          <user_card title="Intro">
            <div class="text-sm">
              <div class="pb-5">
                <button
                  v-if="!userProfile.bio"
                  class="w-full bg-gray-200 dark:bg-dark-third dark:hover:bg-dark-hover cursor-pointer hover:bg-gray-300 rounded-lg p-2 font-bold"
                >
                  Add bio
                </button>
                <div v-else>
                  <p class="text-center font-normal py-3">
                    {{ userProfile.bio }}
                  </p>
                  <button
                    class="w-full bg-gray-200 dark:bg-dark-third dark:hover:bg-dark-hover cursor-pointer hover:bg-gray-300 rounded-lg p-2 font-bold"
                  >
                    Edit bio
                  </button>
                </div>
              </div>
              <div class="pb-5">
                <button
                  class="w-full bg-gray-200 dark:bg-dark-third dark:hover:bg-dark-hover cursor-pointer hover:bg-gray-300 rounded-lg p-2 font-bold"
                >
                  Edit details
                </button>
              </div>
              <div class="pb-5">
                <button
                  class="w-full bg-gray-200 dark:bg-dark-third dark:hover:bg-dark-hover cursor-pointer hover:bg-gray-300 rounded-lg p-2 font-bold"
                >
                  Add hobbies
                </button>
              </div>
              <div>
                <button
                  class="w-full bg-gray-200 dark:bg-dark-third dark:hover:bg-dark-hover cursor-pointer hover:bg-gray-300 rounded-lg p-2 font-bold"
                >
                  Add feature
                </button>
              </div>
            </div>
          </user_card>

          <user_card title="Photos">
            <div class="py-2 grid gap-1 grid-cols-3 cursor-pointer">
              <img
                v-for="img in userPostImg"
                :key="img"
                :src="img"
                alt="user photos"
                class="w-34 h-34 object-cover hover:opacity-85"
              />
            </div>
          </user_card>
          <user_card title="Friends">
            <div>
              <p class="text-[18px] font-normal">
                {{ friendsInfo.length }} friends
              </p>
              <div
                v-if="friendsInfo.length > 0"
                class="grid grid-cols-3 cursor-pointer gap-3 py-2"
              >
                <div
                  v-for="friend in friendsInfo.slice(0, 9)"
                  class="w-32 h-32 mb-8 group"
                  :key="friend.email"
                >
                  <img
                    :src="friend.avatar"
                    alt="friends avt"
                    class="w-full rounded-lg h-full object-cover group-hover:opacity-85"
                  />
                  <p class="text-sm font-bold">
                    {{ friend.info.firstName + " " + friend.info.surName }}
                  </p>
                </div>
              </div>
            </div>
          </user_card>
        </div>
        <div id="PostsSection" class="w-ful md:w-7/12 overflow-auto">
          <post_form></post_form>
          <post
            :isOverlay="true"
            v-if="userProfile.postsWithComments"
            :postsProp="userProfile.postsWithComments"
          ></post>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import user_card from "../components/user/user_card.vue";
import header_nav from "../components/home/header_nav.vue";
import post_form from "../components/post/post_form.vue";
import loadingPage from "./loadingPage.vue";
import post from "../components/post/post.vue";
import { ref, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { loginUser } from "../composables/autoLogin";
const { isLoadingUser } = loginUser();

const store = useStore();
const route = useRoute();

const userId = route.params.id;
const userProfile = ref([]);
const userPostImg = ref([]);
const friendsInfo = ref([]);
const isLoadingProfile = ref(true);

onBeforeMount(async () => {
  try {
    userProfile.value = await store.dispatch("user/getProfileById", userId);
    userPostImg.value = userProfile.value.postsWithComments.map(
      (post) => post.image
    );
    if (userProfile.value.friends > 0) {
      friendsInfo.value = await store.dispatch(
        "auth/getInfo",
        userProfile.value.friends
      );
    }
  } catch (error) {
    console.log(error);
  } finally {
    isLoadingProfile.value = false;
  }
});
</script>
