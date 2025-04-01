<template>
  <loading_spinner v-if="!isFriendsSuccess"></loading_spinner>
  <div
    v-else
    class="w-1/5 pt-16 h-full hidden xl:block px-4 fixed top-0 right-0 scroll-container"
  >
    <div class="h-full">
      <div class="flex justify-between items-center px-4 pt-4">
        <span class="font-semibold text-gray-500 text-lg dark:text-dark-txt"
          >Firend requests</span
        >
        <span
          class="text-blue-500 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third p-2 rounded-md"
          >See All</span
        >
      </div>
      <div class="p-2">
        <a
          href="#"
          class="flex items-center space-x-2 p-2 hover:bg-gray-200 dark:hover:bg-dark-third rounded-lg transition-all"
        >
          <img
            src="/img/home/avt.jpg"
            alt="Profile picture"
            class="w-16 h-16 rounded-full"
          />
          <div class="flex-1 h-full">
            <div class="dark:text-dark-txt">
              <span class="font-semibold">Sakura Hinata</span>
              <span class="float-right">6d</span>
            </div>
            <div class="flex space-x-2 mt-2">
              <div
                class="bg-blue-500 cursor-pointer p-2 text-center font-semibold text-white rounded-lg"
              >
                Confirm
              </div>
              <div
                class="bg-gray-300 cursor-pointer p-2 text-center font-semibold text-black rounded-lg"
              >
                Delete
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="border-b border-gray-200 dark:border-dark-third mt-6"></div>
      <!-- CONTACTS -->
      <div
        class="flex justify-between items-center px-4 pt-4 text-gray-500 dark:text-dark-txt"
      >
        <span class="font-semibold text-lg">Contacts</span>
        <div class="flex space-x-1">
          <div
            class="w-8 h-8 grid place-items-center text-xl hover:bg-gray-200 dark:hover:bg-dark-third rounded-full cursor-pointer"
          >
            <i class="bx bx-search-alt-2"></i>
          </div>
          <div
            class="w-8 h-8 grid place-items-center text-xl hover:bg-gray-200 dark:hover:bg-dark-third rounded-full cursor-pointer"
          >
            <i class="bx bx-dots-horizontal-rounded"></i>
          </div>
        </div>
      </div>
      <ul class="p-2">
        <li v-for="friend in friendInfos" :key="friend.email">
          <div
            class="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer"
          >
            <div class="relative">
              <img
                :src="friend.avatar"
                alt="Friends profile picture"
                class="rounded-full object-cover w-14"
              />
              <span
                class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"
              ></span>
            </div>
            <div>
              <span class="font-semibold">{{ friend.info.firstName + " " + friend.info.surName }}</span>
            </div>
          </div>
        </li>
      </ul>
      <!-- END CONTACTS -->
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { onMounted, inject, ref } from "vue";
import loading_spinner from "../loading/loading_spinner.vue";
const store = useStore();
// load friend
const user = inject("user");
const isFriendsSuccess = ref(false);
const friendEmails = ref(null);
const friendInfos = ref(null);
onMounted(async () => {
  // get friends
  try {
    friendEmails.value = await store.dispatch(
      "home/getFriends",
      user.value.email
    );
    friendInfos.value = await store.dispatch(
      "auth/getInfo",
      friendEmails.value
    );
    isFriendsSuccess.value = true;
  } catch (error) {
    console.log("failed to fetch friends");
    isFriendsSuccess.value = false;
  }
});
</script>
