<template>
  <div
    @click="hanlderClose"
    class="flex justify-center items-center fixed w-screen h-screen bg-black/75 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
  >
    <div
      @click.stop
      class="relative min-w-1/3 p-3 h-[28rem] rounded-xl bg-white dark:bg-dark-second"
    >
      <ul class="font-bold text-md dark:text-primary-txt flex">
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
            v-if="react.count > 0"
            @click="handleActive(react.type)"
            :class="activeEmotion === react.type ? 'text-blue-600' : ''"
            class="flex justify-center items-center gap-1 hover:bg-gray-100 dark:hover:bg-dark-third cursor-pointer p-4 rounded-xl"
          >
            <i
              :class="iconMap[react.type]"
              :style="{ color: iconColorMap[react.type] }"
            ></i>

            {{ formatCount(react.count) }}
          </li>
          <div
            v-if="activeEmotion == react.type"
            class="h-1 w-full bg-blue-600 rounded-lg"
          ></div>
        </div>
      </ul>
      <i
        class="fa-solid top-2 right-2 hover:opacity-50 cursor-pointer fa-circle-xmark text-xl absolute"
        style="color: #adadad"
        @click="hanlderClose"
      ></i>
      <div class="flex justify-start gap-3 mt-3 flex-col">
        <div class="flex items-center gap-3" v-for="user in users[activeEmotion]" :key="user._id">
          <img
            :src="user.avatar"
            class="w-10 h-10 rounded-full object-cover"
            alt="User avatar"
          />
          <span class="font-bold dark:text-primary-txt"> {{ user.info.firstName + " " + user.info.surName }}</span>
          <i></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch, onMounted, reactive } from "vue";
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
  const reactCounts = reactList.reduce((acc, react) => {
    acc[react.type] = (acc[react.type] || 0) + 1;
    return acc;
  }, {});
  const reactUsers = reactList.reduce((acc, react) => {
    acc[react.type] = (acc[react.type] || []).concat(react.user_id);
    return acc;
  }, {});
  return [
    { type: "like", count: reactCounts.like || 0, userId: reactUsers.like },
    { type: "heart", count: reactCounts.heart || 0, userId: reactUsers.heart },
    { type: "haha", count: reactCounts.haha || 0, userId: reactUsers.haha },
    { type: "wow", count: reactCounts.wow || 0, userId: reactUsers.wow },
    { type: "sad", count: reactCounts.sad || 0, userId: reactUsers.sad },
    { type: "angry", count: reactCounts.angry || 0, userId: reactUsers.angry },
  ];
}
const reactsSort = hanldeReactData(props.reacts).sort(
  (a, b) => b.count - a.count
);
// load user
const users = reactive({
  like: [],
  heart: [],
  haha: [],
  wow: [],
  sad: [],
  angry: [],
});
async function getUsers(userId) {
  const user = await store.dispatch("auth/getInfo", userId);
  return user;
}
console.log(reactsSort);

watch(activeEmotion, async (newVal) => {
  if (newVal !== "All") {
    if (users[newVal].length === 0) {
      const userId = reactsSort.filter((react) => react.type === newVal)[0]
        .userId;
      users[newVal] = await getUsers(userId);
    }
  }
  console.log(users);
});
onMounted(async () => {});
</script>
