<template>
  <div
    class="w-60 pt-16 h-full hidden xl:flex flex-col fixed top-0 left-0 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 scroll-container">
    <!-- Main Navigation -->
    <div class="flex-1 px-4 py-16 space-y-2">
      <!-- User Profile -->
      <div class="mb-6">
        <router-link :to="`/user/${user.user_id}`"
          class="flex items-center space-x-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-200 group">
          <div class="relative">
            <img :src="user.avatar" alt="Profile picture"
              class="w-10 h-10 rounded-full object-cover ring-2 ring-transparent group-hover:ring-blue-500 transition-all duration-200" />
            <div
              class="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full">
            </div>
          </div>
          <span
            class="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
            {{ user.firstname + " " + user.surname }}
          </span>
        </router-link>
      </div>

      <!-- Navigation Items -->
      <nav class="space-y-1">
        <a href="#"
          class="flex items-center space-x-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-200 relative group">
          <div
            class="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 bg-blue-100 dark:bg-blue-900">
            <img src="/img/home/friends.png" alt="Friends" class="w-5 h-5" />
          </div>
          <span
            class="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 flex-1">Friends</span>
          <div class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full min-w-[20px] text-center">3</div>
        </a>

        <a href="#"
          class="flex items-center space-x-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-200 relative group">
          <div
            class="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 bg-orange-100 dark:bg-orange-900">
            <img src="/img/home/page.png" alt="Pages" class="w-5 h-5" />
          </div>
          <span
            class="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 flex-1">Pages</span>
        </a>

        <a href="#"
          class="flex items-center space-x-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-200 relative group">
          <div
            class="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 bg-purple-100 dark:bg-purple-900">
            <img src="/img/home/memory.png" alt="Memories" class="w-5 h-5" />
          </div>
          <span
            class="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 flex-1">Memories</span>
        </a>

        <a href="#"
          class="flex items-center space-x-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-200 relative group">
          <div
            class="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 bg-green-100 dark:bg-green-900">
            <img src="/img/home/group.png" alt="Groups" class="w-5 h-5" />
          </div>
          <span
            class="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 flex-1">Groups</span>
          <div class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full min-w-[20px] text-center">12</div>
        </a>

        <a href="#"
          class="flex items-center space-x-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-200 relative group">
          <div
            class="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 bg-gray-100 dark:bg-gray-700">
            <svg class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          <span
            class="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 flex-1">See
            more</span>
        </a>
      </nav>

      <!-- Divider -->
      <div class="border-t border-gray-200 dark:border-gray-700 my-6"></div>

      <!-- Shortcuts Section -->
      <div class="space-y-4">
        <div class="flex justify-between items-center px-2 group">
          <h3 class="font-semibold text-gray-700 dark:text-gray-300 text-lg">
            Your shortcuts
          </h3>
          <button
            class="text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-200">
            Edit
          </button>
        </div>

        <!-- Shortcuts List -->
        <div class="space-y-1">
          <a href="#"
            class="flex items-start space-x-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-200 group">
            <img src="/img/home/group-img-1.jpg" alt="Group" class="w-10 h-10 rounded-xl object-cover" />
            <div class="flex-1 min-w-0">
              <span
                class="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 text-sm line-clamp-2">
                Cộng đồng Front-end(HTML/CSS/JS) Việt Nam
              </span>
              <div class="flex items-center space-x-1 mt-1">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-xs text-gray-500 dark:text-gray-400">2.3k online</span>
              </div>
            </div>
          </a>

          <a href="#"
            class="flex items-start space-x-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-200 group">
            <img src="/img/home/group-img-2.jpg" alt="Group" class="w-10 h-10 rounded-xl object-cover" />
            <div class="flex-1 min-w-0">
              <span
                class="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 text-sm line-clamp-2">
                CNPM08_UIT_Group học tập
              </span>
              <div class="flex items-center space-x-1 mt-1">
                <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span class="text-xs text-gray-500 dark:text-gray-400">45 online</span>
              </div>
            </div>
          </a>

          <a href="#"
            class="flex items-start space-x-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-200 group">
            <img src="/img/home/group-img-3.jpg" alt="Group" class="w-10 h-10 rounded-xl object-cover" />
            <div class="flex-1 min-w-0">
              <span
                class="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 text-sm line-clamp-2">
                Cộng đồng UI/UX Design vietnam
              </span>
              <div class="flex items-center space-x-1 mt-1">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-xs text-gray-500 dark:text-gray-400">1.8k online</span>
              </div>
            </div>
          </a>

          <a href="#"
            class="flex items-start space-x-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-200 group">
            <img src="/img/home/group-img-4.jpg" alt="Group" class="w-10 h-10 rounded-xl object-cover" />
            <div class="flex-1 min-w-0">
              <span
                class="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 text-sm line-clamp-2">
                Nihon Koi
              </span>
              <div class="flex items-center space-x-1 mt-1">
                <div class="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span class="text-xs text-gray-500 dark:text-gray-400">12 online</span>
              </div>
            </div>
          </a>

          <a href="#"
            class="flex items-start space-x-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-200 group">
            <div class="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
              <svg class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
            <span
              class="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 text-sm">See
              more</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
      <div class="flex flex-wrap gap-1 text-xs text-gray-500 dark:text-gray-400">
        <a href="#" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy</a>
        <span>·</span>
        <a href="#" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms</a>
        <span>·</span>
        <a href="#" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Advertising</a>
        <span>·</span>
        <a href="#" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Cookies</a>
        <span>·</span>
        <a href="#" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Ad choices</a>
        <span>·</span>
        <a href="#" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">More</a>
      </div>
      <div class="mt-2 text-xs text-gray-400 dark:text-gray-500">
        Social © 2024
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";
const user = inject("user");
</script>

<style scoped>
.scroll-container {
  overflow-y: auto;
  overflow-x: hidden;
}

/* Custom Scrollbar */
.scroll-container::-webkit-scrollbar {
  width: 6px;
}

.scroll-container::-webkit-scrollbar-track {
  background: transparent;
}

.scroll-container::-webkit-scrollbar-thumb {
  background-color: transparent;
  border-radius: 3px;
  transition: background-color 0.2s ease;
}

.scroll-container:hover::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.5);
}

.scroll-container::-webkit-scrollbar-thumb:hover {
  background-color: rgba(156, 163, 175, 0.8);
}

/* Dark mode scrollbar */
@media (prefers-color-scheme: dark) {
  .scroll-container:hover::-webkit-scrollbar-thumb {
    background-color: rgba(75, 85, 99, 0.5);
  }

  .scroll-container::-webkit-scrollbar-thumb:hover {
    background-color: rgba(75, 85, 99, 0.8);
  }
}

/* Line clamp utility for text truncation */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>