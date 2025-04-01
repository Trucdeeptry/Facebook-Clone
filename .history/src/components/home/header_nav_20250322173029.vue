<template>
  <div
    class="bg-white dark:bg-dark-second h-max md:h-14 w-full border-[#e5e7eb] shadow flex flex-col md:flex-row items-center justify-center md:justify-between fixed top-0 z-10 border-b dark:border-dark-third"
  >
    <!-- LEFT NAV -->
    <div class="flex z-[1] items-center justify-between gap-2 px-4 py-2">
      <rout href="#" class="inline-block">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/1024px-2023_Facebook_icon.svg.png"
          height="40"
          width="40"
          class="md:w-20 lg:w-10"
        />
      </rout>
      <div class="flex items-center justify-between space-x-1">
        <div
          class="relative bg-gray-100 dark:bg-dark-third px-2 py-2 w-8 h-8 sm:w-11 sm:h-11 lg:h-10 lg:w-10 xl:w-max xl:pl-3 xl:pr-8 rounded-full flex items-center justify-center cursor-pointer"
        >
          <i
            class="bx -mb-1 bx-search-alt-2 text-xl xl:mr-2 dark:text-dark-txt"
          ></i>
          <input
            type="text"
            placeholder="Search Facebook"
            class="outline-none bg-transparent hidden xl:inline-block dark:text-primary-txt"
          />
        </div>
        <div
          class="text-2xl grid place-items-center md:hidden bg-gray-200 dark:bg-dark-third rounded-full w-8 h-8 cursor-pointer hover:bg-gray-300 dark:text-dark-txt"
        >
          <i class="bx bxl-messenger"></i>
        </div>
        <div
          class="text-2xl grid place-items-center md:hidden bg-gray-200 dark:bg-dark-third rounded-full w-8 h-8 cursor-pointer hover:bg-gray-300 dark:text-dark-txt"
          id="dark-mode-toggle-mb"
        >
          <i class="bx bxs-moon"></i>
        </div>
      </div>
    </div>
    <!-- END LEFT NAV -->

    <!-- MAIN NAV -->
    <ul class="flex w-full lg:w-max items-center justify-center !mt-1">
      <li
        class="w-1/5 md:w-max text-center border-primary-button-background border-b-4"
      >
        <a
          href="#"
          class="w-full text-3xl py-3 px-3 xl:px-12 cursor-pointer text-center inline-block text-primary-button-background -mb-1"
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
            class="text-primary-button-background"
          >
            <path
              d="M9.464 1.286C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977zM10.5 13A1.5 1.5 0 0 0 9 14.5V21h6v-6.5a1.5 1.5 0 0 0-1.5-1.5h-3z"
            ></path>
          </svg>
        </a>
      </li>
      <li class="w-1/5 md:w-max text-center">
        <a
          href="#"
          class="w-full text-3xl py-3 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt relative"
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
            class="xfx01vb x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
            style="--color: var(--secondary-icon)"
          >
            <path
              d="M12.496 5a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-9 2.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0zM5.5 15a5 5 0 0 0-5 5 3 3 0 0 0 3 3h8.006a3 3 0 0 0 3-3 5 5 0 0 0-5-5H5.5zm-3 5a3 3 0 0 1 3-3h4.006a3 3 0 0 1 3 3 1 1 0 0 1-1 1H3.5a1 1 0 0 1-1-1zm12-9.5a5.04 5.04 0 0 0-.37.014 1 1 0 0 0 .146 1.994c.074-.005.149-.008.224-.008h4.006a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-3.398a1 1 0 1 0 0 2h3.398a3 3 0 0 0 3-3 5 5 0 0 0-5-5H14.5z"
            ></path>
          </svg>
        </a>
      </li>
      <li class="w-1/5 md:w-max text-center">
        <a
          href="#"
          class="w-full text-3xl py-3 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt relative"
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
            class="xfx01vb x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
            style="--color: var(--secondary-icon)"
          >
            <path
              d="M10.996 8.132A1 1 0 0 0 9.5 9v4a1 1 0 0 0 1.496.868l3.5-2a1 1 0 0 0 0-1.736l-3.5-2z"
            ></path>
            <path
              d="M14.573 2H9.427c-1.824 0-3.293 0-4.45.155-1.2.162-2.21.507-3.013 1.31C1.162 4.266.817 5.277.655 6.477.5 7.634.5 9.103.5 10.927v.146c0 1.824 0 3.293.155 4.45.162 1.2.507 2.21 1.31 3.012.802.803 1.813 1.148 3.013 1.31C6.134 20 7.603 20 9.427 20h5.146c1.824 0 3.293 0 4.45-.155 1.2-.162 2.21-.507 3.012-1.31.803-.802 1.148-1.813 1.31-3.013.155-1.156.155-2.625.155-4.449v-.146c0-1.824 0-3.293-.155-4.45-.162-1.2-.507-2.21-1.31-3.013-.802-.802-1.813-1.147-3.013-1.309C17.866 2 16.397 2 14.573 2zM3.38 4.879c.369-.37.887-.61 1.865-.741C6.251 4.002 7.586 4 9.5 4h5c1.914 0 3.249.002 4.256.138.978.131 1.496.372 1.865.74.37.37.61.888.742 1.866.135 1.007.137 2.342.137 4.256 0 1.914-.002 3.249-.137 4.256-.132.978-.373 1.496-.742 1.865-.369.37-.887.61-1.865.742-1.007.135-2.342.137-4.256.137h-5c-1.914 0-3.249-.002-4.256-.137-.978-.132-1.496-.373-1.865-.742-.37-.369-.61-.887-.741-1.865C2.502 14.249 2.5 12.914 2.5 11c0-1.914.002-3.249.138-4.256.131-.978.372-1.496.74-1.865zM8 21.5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8z"
            ></path>
          </svg>
        </a>
      </li>
      <li class="w-1/5 md:w-max text-center">
        <a
          href="#"
          class="w-full text-3xl py-3 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt relative"
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
            class="xfx01vb x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
            style="--color: var(--secondary-icon)"
          >
            <path
              d="M1.588 3.227A3.125 3.125 0 0 1 4.58 1h14.84c1.38 0 2.597.905 2.993 2.227l.816 2.719a6.47 6.47 0 0 1 .272 1.854A5.183 5.183 0 0 1 22 11.455v4.615c0 1.355 0 2.471-.119 3.355-.125.928-.396 1.747-1.053 2.403-.656.657-1.475.928-2.403 1.053-.884.12-2 .119-3.354.119H8.929c-1.354 0-2.47 0-3.354-.119-.928-.125-1.747-.396-2.403-1.053-.657-.656-.929-1.475-1.053-2.403-.12-.884-.119-2-.119-3.354V11.5l.001-.045A5.184 5.184 0 0 1 .5 7.8c0-.628.092-1.252.272-1.854l.816-2.719zM10 21h4v-3.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V21zm6-.002c.918-.005 1.608-.025 2.159-.099.706-.095 1.033-.262 1.255-.485.223-.222.39-.55.485-1.255.099-.735.101-1.716.101-3.159v-3.284a5.195 5.195 0 0 1-1.7.284 5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 12 13a5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 5.7 13a5.2 5.2 0 0 1-1.7-.284V16c0 1.442.002 2.424.1 3.159.096.706.263 1.033.486 1.255.222.223.55.39 1.255.485.551.074 1.24.094 2.159.1V17.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5v3.498zM4.581 3c-.497 0-.935.326-1.078.802l-.815 2.72A4.45 4.45 0 0 0 2.5 7.8a3.2 3.2 0 0 0 5.6 2.117 1 1 0 0 1 1.5 0A3.19 3.19 0 0 0 12 11a3.19 3.19 0 0 0 2.4-1.083 1 1 0 0 1 1.5 0A3.2 3.2 0 0 0 21.5 7.8c0-.434-.063-.865-.188-1.28l-.816-2.72A1.125 1.125 0 0 0 19.42 3H4.58z"
            ></path>
          </svg>
        </a>
      </li>

      <!-- <li class="w-1/5 md:w-max text-center hidden md:inline-block">
          <a
            href="#"
            class="w-full text-3xl py-3 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt relative"
          >
            <i class="bx bx-layout"></i>
            <span
              class="text-xs absolute top-0 right-1/4 bg-red-500 text-white font-semibold rounded-full px-1 text-center"
              >9+</span
            >
          </a>
        </li> -->
      <li class="w-1/5 md:w-max text-center inline-block md:hidden">
        <a
          href="#"
          class="w-full text-3xl py-3 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt relative"
        >
          <i class="bx bx-menu"></i>
        </a>
      </li>
    </ul>
    <!-- END MAIN NAV -->

    <!-- RIGHT NAV -->
    <ul class="hidden md:flex mx-4 items-center justify-center">
      <li>
        <div
          class="text-2xl hidden xl:grid place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-2 cursor-pointer hover:bg-gray-300 relative"
        >
          <i class="bx bx-plus"></i>
        </div>
      </li>
      <li>
        <div
          class="text-2xl grid place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-2 cursor-pointer hover:bg-gray-300 relative"
          id="dark-mode-toggle"
          @click="toggleDark"
        >
          <i class="bx bxs-moon"></i>
        </div>
      </li>
      <li>
        <div
          class="text-2xl hidden xl:grid place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-2 cursor-pointer hover:bg-gray-300 relative"
        >
          <i class="bx bxl-messenger"></i>
        </div>
      </li>
      <li>
        <div
          class="text-2xl grid place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-2 cursor-pointer hover:bg-gray-300 relative"
        >
          <i class="bx bxs-bell"></i>
          <span
            class="text-xs absolute top-0 right-0 bg-red-500 text-white font-semibold rounded-full px-1 text-center"
            >9</span
          >
        </div>
      </li>

      <li class="h-full hidden xl:flex">
        <a
          href="#"
          class="inline-flex items-center justify-center p-1 rounded-full hover:bg-gray-200 dark:hover:bg-dark-third mx-1"
        >
          <img
          :src="user.avatar"
            alt="Profile picture"
            class="rounded-full h-9 w-9 object-cover"
          />
        </a>
      </li>
    </ul>
    <!-- END RIGHT NAV -->
  </div>
</template>

<script setup>
import { inject } from "vue";
function toggleDark() {
  document.documentElement.classList.toggle("dark");
}
const user = inject("user");
</script>
