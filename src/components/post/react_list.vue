<template>
  <div @click="hanlderClose"
    class="flex justify-center items-center fixed w-screen h-screen bg-black/75 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
    <div @click.stop
      class="scroll-container overflow-y-scroll relative min-w-1/3 p-3 h-[28rem] rounded-xl bg-white dark:bg-dark-second">
      <ul class="font-bold text-lg text-md dark:text-primary-txt flex">
        <div>
          <li @click="handleActive('All')" :class="activeEmotion === 'All' ? 'text-blue-600' : ''"
            class="hover:bg-gray-100 dark:hover:bg-dark-third cursor-pointer p-4 rounded-xl">
            All
          </li>
          <div v-if="activeEmotion == 'All'" class="h-1 w-full bg-blue-600 rounded-lg"></div>
        </div>
        <div v-for="react in reactsSort" :key="react.react">
          <li v-if="react.userId?.length > 0" @click="handleActive(react.react)"
            :class="activeEmotion === react.react ? 'text-blue-600' : ''"
            class="flex justify-center items-center gap-1 hover:bg-gray-100 dark:hover:bg-dark-third cursor-pointer p-4 rounded-xl">
            <img :src="iconMap[react.react]" class="w-5" alt="react">


            {{ formatCount(react.userId?.length) }}
          </li>
          <div v-if="activeEmotion == react.react" class="h-1 w-full bg-blue-600 rounded-lg"></div>
        </div>
      </ul>
      <i class="fa-solid top-5 right-2 hover:opacity-50 cursor-pointer fa-circle-xmark text-4xl absolute"
        style="color: #adadad" @click="hanlderClose"></i>
      <div class="flex justify-start gap-3 mt-3 flex-col">
        <loading_spinner v-if="isLoadingUser"></loading_spinner>
        <div v-else class="gap-3 flex-col flex" v-for="(user, index) in getReact" :key="index">
          <div class="flex justify-between items-center w-full" v-for="userInfo in user.userData" :key="userInfo.id">
            <div class="flex items-center gap-4 relative group cursor-pointer">
              <img :src="userInfo.avatar" class="w-10 h-10 rounded-full object-cover" alt="User avatar" />
              <span class="text-base text-black font-bold dark:text-primary-txt group-hover:underline">
                {{
                  userInfo.firstname + " " + userInfo.surname
                }}</span>
              <div
                class="absolute flex justify-center items-center top-5 left-7 bg-white dark:bg-dark-second w-6 h-6 rounded-2xl">

                <img :src="iconMap[user.react]" alt="user react">
              </div>
            </div>
            <button
              class="p-2 text-sm px-3 text-black font-semibold dark:text-black cursor-pointer bg-primary-txt rounded-xl hover:opacity-80">
              <i class="fa-solid fa-user-plus"></i>
              Add friend
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import loading_spinner from "../loading/loading_spinner.vue";
import { defineProps, defineEmits, ref, watch, reactive } from "vue";
import { useStore } from "vuex";
const store = useStore();
const props = defineProps(["reacts"]);
const emit = defineEmits(["closeEmotions"]);

const hanlderClose = () => {
  // set activePost = null to close overlay
  emit("closeEmotions");
};
// hanlde UI

const iconMap = {
  like: "/reactions/like.png",
  love: "/reactions/love.png",
  haha: "/reactions/haha.png",
  wow: "/reactions/wow.png",
  sad: "/reactions/sad.png",
  angry: "/reactions/angry.png",
};
const formatCount = (count) => {
  return count >= 1000 ? (count / 1000).toFixed(1) + "K" : count;
};

// hanlde toggle active
const activeEmotion = ref("All");
const handleActive = (emotion) => {
  activeEmotion.value = emotion;
};
// hanlde data
function hanldeReactData(reactList) {
  const reactUsers = reactList.reduce((acc, react) => {
    acc[react.react] = (acc[react.react] || []).concat(react.user_id);
    return acc;
  }, {});

  return [
    { react: "like", userId: reactUsers.like },
    { react: "love", userId: reactUsers.love },
    { react: "haha", userId: reactUsers.haha },
    { react: "wow", userId: reactUsers.wow },
    { react: "sad", userId: reactUsers.sad },
    { react: "angry", userId: reactUsers.angry },
  ];
}

// sort react data

const reactsSort = hanldeReactData(props.reacts).sort(
  (a, b) => (b.userId ? b.userId.length : 0) - (a.userId ? a.userId.length : 0)
);

// load user
// declare varible save user info to avoid load user many times
const allReact = ref([])
const getReact = ref()
async function getUsers(userId) {
  const user = await store.dispatch("auth/getInfobyId", userId);
  return user;
}
const isLoadingUser = ref(false);
// watch activeEmotion to load user
watch(
  activeEmotion,
  async (newVal) => {
    if (allReact.value.length === 0) {
      isLoadingUser.value = true;
      // Bỏ những react count = 0
      const filterReact = reactsSort.filter((react) =>
        Array.isArray(react.userId)
      );

      // Lấy thông tin user
      allReact.value = await Promise.all(
        filterReact.map(async (react) => {
          if (react.userId.length > 0) {

            const userData = await Promise.all(
              react.userId.map(id => getUsers(id))
            )

            return {
              userData: userData,
              react: react.react,
            };
          }
        })
      );
    }
    // đã có all react chỉ cần lọc ra react mong muốn
    getReact.value = allReact.value.filter(reactObject => {
      if (newVal == 'All') {
        return reactObject
      }
      if (reactObject.react == newVal) {
        return reactObject
      }
    })
    isLoadingUser.value = false;
  },
  { immediate: true }
);
</script>
