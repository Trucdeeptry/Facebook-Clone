<template>
  <header
    class="bg-white dark:bg-gray-900 h-max md:h-16 w-full border-b border-gray-200 dark:border-gray-800 shadow-sm fixed top-0 z-50 transition-colors duration-200">
    <div class="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between h-full px-4">
      <!-- LEFT SECTION: Logo & Search -->
      <div class="flex items-center justify-between w-full md:w-auto py-2 md:py-0 gap-4">
        <!-- Logo -->
        <router-link to="/home" class="flex items-center">
          <img src="/img/home/demo-logo.png" alt="Logo" class="h-10 w-auto object-contain" />
        </router-link>

        <!-- Search Bar -->
        <div class="relative flex-1 md:flex-none ">
          <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search class="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input type="text" placeholder="Search Social"
              class="w-full py-2 pl-10 pr-4 bg-gray-100 dark:bg-gray-800 border-none rounded-full text-sm text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200" />
          </div>
        </div>

        <!-- Mobile Action Buttons -->
        <div class="flex md:hidden items-center gap-2">
          <button
            class="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200">
            <MessageCircle class="w-5 h-5" />
          </button>
          <button
            class="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
            @click="toggleDark">
            <Moon class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- MIDDLE SECTION: Main Navigation -->
      <div class="flex w-full md:w-auto justify-center border-b md:border-0 border-gray-200 dark:border-gray-800">
        <ul class="flex w-full md:w-auto items-center justify-between md:justify-center">
          <!-- Home -->
          <li class="relative flex-1 md:flex-none">
            <a href="#"
              class="flex flex-col items-center justify-center py-2 md:py-3 px-3 md:px-6 lg:px-10 text-blue-600 dark:text-blue-400 transition-colors duration-200 relative">
              <Home class="w-6 h-6" />
              <span
                class="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 dark:bg-blue-400 rounded-t-full transition-all duration-200"></span>
            </a>
          </li>

          <!-- Friends -->
          <li class="relative flex-1 md:flex-none">
            <a href="#"
              class="flex flex-col items-center justify-center py-2 md:py-3 px-3 md:px-6 lg:px-10 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 relative">
              <Users class="w-6 h-6" />
              <span
                class="absolute bottom-0 left-0 right-0 h-1 bg-transparent rounded-t-full transition-all duration-200"></span>
            </a>
          </li>

          <!-- Videos -->
          <li class="relative flex-1 md:flex-none">
            <a href="#"
              class="flex flex-col items-center justify-center py-2 md:py-3 px-3 md:px-6 lg:px-10 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 relative">
              <Play class="w-6 h-6" />
              <span
                class="absolute bottom-0 left-0 right-0 h-1 bg-transparent rounded-t-full transition-all duration-200"></span>
            </a>
          </li>

          <!-- Marketplace -->
          <li class="relative flex-1 md:flex-none">
            <a href="#"
              class="flex flex-col items-center justify-center py-2 md:py-3 px-3 md:px-6 lg:px-10 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 relative">
              <Store class="w-6 h-6" />
              <span
                class="absolute bottom-0 left-0 right-0 h-1 bg-transparent rounded-t-full transition-all duration-200"></span>
            </a>
          </li>

          <!-- Mobile Menu Button -->
          <li class="relative flex-1 md:flex-none md:hidden">
            <button
              class="flex flex-col items-center justify-center py-2 md:py-3 px-3 md:px-6 lg:px-10 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 relative">
              <Menu class="w-6 h-6" />
            </button>
          </li>
        </ul>
      </div>

      <!-- RIGHT SECTION: Action Buttons -->
      <div class="hidden md:flex items-center gap-2">
        <!-- Create Button (XL screens) -->
        <button
          class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200 hidden xl:flex">
          <Plus class="w-5 h-5" />
        </button>

        <!-- Dark Mode Toggle -->
        <button
          class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
          @click="toggleDark">
          <Moon class="w-5 h-5" />
        </button>

        <!-- Messenger (XL screens) -->
        <button
          class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200 hidden xl:flex">
          <MessageCircle class="w-5 h-5" />
        </button>

        <!-- Notifications -->
        <button
          class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200 relative">
          <Bell class="w-5 h-5" />
          <span
            class="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">9</span>
        </button>

        <!-- User Profile (XL screens) -->
        <div class="hidden xl:block">
          <a href="#" class="flex items-center">
            <div class="relative">
              <img :src="user.avatar" alt="Profile picture"
                class="w-10 h-10 rounded-full object-cover border-2 border-transparent hover:border-blue-500 transition-all duration-200" />
              <div
                class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full">
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { inject } from "vue";
import {
  Search,
  MessageCircle,
  Moon,
  Home,
  Users,
  Play,
  Store,
  Menu,
  Plus,
  Bell
} from 'lucide-vue-next';

function toggleDark() {
  document.documentElement.classList.toggle("dark");
}

const user = inject("user");
</script>