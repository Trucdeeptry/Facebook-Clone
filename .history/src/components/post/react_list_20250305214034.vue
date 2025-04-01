<template>
  <div
    @click="hanlderClose"
    class="flex justify-center items-center fixed w-screen h-screen bg-black/75 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
  >
    <div
      @click.stop
      class="scroll-container overflow-y-scroll relative min-w-1/3 p-3 h-[28rem] rounded-xl bg-white dark:bg-dark-second"
    >
      <ul class="font-bold text-lg text-md dark:text-primary-txt flex">
        <div>
          <li
            @click="handleActive('All')"
            :class="activeEmotion === 'All' ? 'text-blue-600' : ''"
            class="hover:bg-gray-100 dark:hover:bg-dark-third cursor-pointer p-4 rounded-xl"
          >
            All
          </li>
          <div
            v-if="activeEmotion == 'All'"
            class="h-1 w-full bg-blue-600 rounded-lg"
          ></div>
        </div>
        <div v-for="react in reactsSort" :key="react.type">
          <li
            v-if="react.userId?.length > 0"
            @click="handleActive(react.type)"
            :class="activeEmotion === react.type ? 'text-blue-600' : ''"
            class="flex justify-center items-center gap-1 hover:bg-gray-100 dark:hover:bg-dark-third cursor-pointer p-4 rounded-xl"
          >
            <i
              :class="iconMap[react.type]"
              :style="{ color: iconColorMap[react.type] }"
            ></i>

            {{ formatCount(react.userId?.length) }}
          </li>
          <div
            v-if="activeEmotion == react.type"
            class="h-1 w-full bg-blue-600 rounded-lg"
          ></div>
        </div>
      </ul>
      <i
        class="fa-solid top-5 right-2 hover:opacity-50 cursor-pointer fa-circle-xmark text-4xl absolute"
        style="color: #adadad"
        @click="hanlderClose"
      ></i>
      <div class="flex justify-start gap-3 mt-3 flex-col">
        <div
          class="gap-3 flex-col flex"
          v-for="(user, index) in users[activeEmotion]"
          :key="index"
        >
          <div
            class="flex justify-between items-center w-full"
            v-for="userInfo in user.userData"
            :key="userInfo._id"
          >
            <div class="flex items-center gap-4 relative">
              <img
                :src="userInfo.avatar"
                class="w-10 h-10 rounded-full object-cover"
                alt="User avatar"
              />
              <span
                class="text-base text-black font-bold dark:text-primary-txt hover:underline cursor-pointer"
              >
                {{
                  userInfo.info.firstName + " " + userInfo.info.surName
                }}</span
              >
              <div
                class="absolute flex justify-center items-center top-5 left-7 bg-white dark:bg-dark-second w-6 h-6 rounded-2xl"
              >
                <i
                  :class="iconMap[user.type]"
                  :style="{ color: iconColorMap[user.type] }"
                ></i>
              </div>
            </div>
            <button
              class="p-2 text-sm px-3 text-black font-semibold dark:text-black cursor-pointer bg-primary-txt rounded-xl hover:opacity-80"
            >
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
    acc[react.type] = (acc[react.type] || []).concat(react.user_id);
    return acc;
  }, {});
  return [
    { type: "like", userId: reactUsers.like },
    { type: "heart", userId: reactUsers.heart },
    { type: "haha", userId: reactUsers.haha },
    { type: "wow", userId: reactUsers.wow },
    { type: "sad", userId: reactUsers.sad },
    { type: "angry", userId: reactUsers.angry },
  ];
}
const reactsSort = hanldeReactData(props.reacts).sort(
  (a, b) => b.count - a.count
);
// load user
// declare varible save user info to avoid load user many times
const users = reactive({
  like: [],
  heart: [],
  haha: [],
  wow: [],
  sad: [],
  angry: [],
  All: [],
});
async function getUsers(userId) {
  const user = await store.dispatch("auth/getInfo", userId);
  return user;
}

// watch activeEmotion to load user
watch(
  activeEmotion,
  async (newVal) => {
    if (users[newVal].length === 0) {
      if (newVal !== "All") {
        // Lấy userId của react type
        const userId = reactsSort.filter((react) => react.type === newVal)[0]
          .userId;
        const userData = await getUsers(userId);
        // Swich to array to show in UI
        users[newVal] = [
          {
            userData,
            type: newVal,
          },
        ];
      } else {
        // Bỏ những react count = 0
        const filterReact = reactsSort.filter((react) =>
          Array.isArray(react.userId)
        );

        // Lấy thông tin user
        users[newVal] = await Promise.all(
          filterReact.map(async (react) => {
            if (react.userId.length > 0) {
              const userData = await getUsers(react.userId);
              return {
                userData: userData,
                type: react.type,
              };
            }
          })
        );
      }
    }
  },
  { immediate: true }
);
</script>
