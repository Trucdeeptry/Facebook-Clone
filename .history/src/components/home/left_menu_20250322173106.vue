<template>
  <div
    class="w-1/5 !pt-12 h-full hidden xl:flex flex-col fixed top-0 left-0 text-sm scroll-container"
  >
    <ul class="p-4 text-white">
      <li>
        <router-link
        to=`/user/${}`
          href="#"
          class="flex items-center text-black space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-primary-txt dark:hover:bg-dark-third"
        >
          <img
          :src="user.avatar"
            alt="Profile picture"
            class="w-8 h-8 rounded-full object-cover"
          />
          <span class="font-semibold">{{ user.info.firstName + " " + user.info.surName}}</span>
        </router-link>
      </li>
      <li>
        <a
          href="#"
          class="flex items-center text-black space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-primary-txt dark:hover:bg-dark-third"
        >
          <img
            src="/img/home/friends.png"
            alt="Profile picture"
            class="w-8 h-8 rounded-full"
          />
          <span class="font-semibold">Friends</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          class="flex items-center text-black space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-primary-txt dark:hover:bg-dark-third"
        >
          <img
            src="/img/home/page.png"
            alt="Profile picture"
            class="w-8 h-8 rounded-full"
          />
          <span class="font-semibold">Pages</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          class="flex items-center text-black space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-primary-txt dark:hover:bg-dark-third"
        >
          <img
            src="/img/home/memory.png"
            alt="Profile picture"
            class="w-8 h-8 rounded-full"
          />
          <span class="font-semibold">Memories</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          class="flex items-center text-black space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-primary-txt dark:hover:bg-dark-third"
        >
          <img
            src="/img/home/group.png"
            alt="Profile picture"
            class="w-8 h-8 rounded-full"
          />
          <span class="font-semibold">Groups</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          class="flex items-center text-black space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-primary-txt dark:hover:bg-dark-third"
        >
          <span
            class="w-8 h-8 rounded-full grid place-items-center bg-gray-300 dark:bg-dark-second"
          >
            <i class="bx bx-chevron-down"></i>
          </span>
          <span class="font-semibold">See more</span>
        </a>
      </li>
      <li class="border-b border-gray-200 dark:border-dark-third mt-6"></li>
    </ul>
    <div class="flex justify-between items-center px-4 h-4 group">
      <span class="font-semibold !text-second-txt text-lg dark:text-dark-txt"
        >Your shortcuts</span
      >
      <span
        class="text-blue-500 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third p-2 rounded-md hidden group-hover:inline-block"
        >Edit</span
      >
    </div>
    <ul class="p-4">
      <li>
        <a
          href="#"
          class="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-primary-txt dark:hover:bg-dark-third"
        >
          <img
            src="/img/home/group-img-1.jpg"
            alt="Profile picture"
            class="w-8 h-8 rounded-lg"
          />
          <span class="font-semibold"
            >Cộng đồng Front-end(HTML/CSS/JS) Việt Nam</span
          >
        </a>
      </li>
      <li>
        <a
          href="#"
          class="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-primary-txt dark:hover:bg-dark-third"
        >
          <img
            src="/img/home/group-img-2.jpg"
            alt="Profile picture"
            class="w-8 h-8 rounded-lg"
          />
          <span class="font-semibold">CNPM08_UIT_Group học tập</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          class="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-primary-txt dark:hover:bg-dark-third"
        >
          <img
            src="/img/home/group-img-3.jpg"
            alt="Profile picture"
            class="w-8 h-8 rounded-lg"
          />
          <span class="font-semibold">Cộng đồng UI/UX Design vietnam</span>
        </a>
      </li>

      <li>
        <a
          href="#"
          class="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-primary-txt dark:hover:bg-dark-third"
        >
          <img
            src="/img/home/group-img-4.jpg"
            alt="Profile picture"
            class="w-8 h-8 rounded-lg"
          />
          <span class="font-semibold">Nihon Koi</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          class="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-primary-txt dark:hover:bg-dark-third"
        >
          <span
            class="w-8 h-8 rounded-full grid place-items-center bg-gray-300 dark:bg-dark-second"
          >
            <i class="bx bx-chevron-down"></i>
          </span>
          <span class="font-semibold">See more</span>
        </a>
      </li>
    </ul>
    <div class="mt-auto p-6 text-sm text-gray-500 dark:text-primary-txt">
      <a href="#">Privacy</a>
      <span>.</span>
      <a href="#">Terms</a>
      <span>.</span>
      <a href="#">Advertising</a>
      <span>.</span>
      <a href="#">Cookies</a>
      <span>.</span>
      <a href="#">Ad choices</a>
      <span>.</span>
      <a href="#">More</a>
      <span>.</span>
      <span>Facebook © 2021</span>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";
const user = inject("user");



</script>
<style>
.scroll-container {
  overflow: scroll;
  overflow-x: hidden;
}

/* Thanh cuộn (scrollbar) */
.scroll-container::-webkit-scrollbar {
  width: 8px;
  /* Bỏ thuộc tính position: fixed vì nó không áp dụng cho pseudo-element này */
}

/* Thanh cuộn thumb mặc định (ẩn bằng cách sử dụng màu nền trong suốt) */
.scroll-container::-webkit-scrollbar-thumb {
  background-color: transparent;
  border-radius: 9999px;
}

/* Khi hover hoặc focus, chuyển sang màu nền mong muốn */
.scroll-container:hover::-webkit-scrollbar-thumb,
.scroll-container:focus-within::-webkit-scrollbar-thumb {
  background-color: #d1d5db; /* bg-gray-300 */
}

/* Track của thanh cuộn */
.scroll-container::-webkit-scrollbar-track {
  background-color: #f3f4f6; /* bg-gray-100 */
}

/* Chế độ dark mode */
@media (prefers-color-scheme: dark) {
  .scroll-container::-webkit-scrollbar-track {
    background-color: transparent; /* bg-neutral-700 */
  }
  .scroll-container::-webkit-scrollbar-thumb {
    /* Mặc định trong dark mode */
    background-color: transparent;
  }
  .scroll-container:hover::-webkit-scrollbar-thumb,
  .scroll-container:focus-within::-webkit-scrollbar-thumb {
    background-color: #6b7280; /* bg-neutral-500 */
  }
}
</style>
