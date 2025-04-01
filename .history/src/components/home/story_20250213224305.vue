<template>
  <div class="relative flex space-x-2 pt-4 text-xs">
          <div
            class="w-3/6 sm:w-1/4 h-52 rounded-xl shadow overflow-hidden flex flex-col group cursor-pointer relative"
          >
            <div class="h-[73%] overflow-hidden">
              <img
                src="./images/profile.jpg"
                alt="picture"
                class="group-hover:transform group-hover:scale-[1.03] ease-linear transition-all duration-[600]"
              />
            </div>
            <div
              class="flex-1 relative flex items-end justify-center pb-2 text-center leading-none dark:bg-dark-second dark:text-dark-txt"
            >
              <span class="font-semibold whitespace-nowrap">
                Create Story
              </span>
              <div
                class="w-10 h-10 rounded-full bg-blue-600 text-white flex justify-center items-center text-4xl border-4 border-white dark:border-dark-second absolute -top-5 transform"
              >
                <i class="bx bx-plus text-3xl"></i>
              </div>
            </div>

            <!-- Lớp phủ đen mờ -->
            <div
              class="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 z-10"
            ></div>
          </div>

          <div class="w-1/4 sm:w-1/4 h-52 rounded-xl overflow-hidden">
            <div class="relative h-full group cursor-pointer">
              <img
                src="./images/story.jpg"
                alt="Story images"
                class="group-hover:transform group-hover:scale-[1.03] transition-all duration-[600] ease-linear h-full w-full"
              />
              <div
                class="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10"
              ></div>
              <span
                class="absolute bottom-0 left-2 pb-2 font-semibold text-white"
              >
                Your story
              </span>
              <div
                class="w-8 h-8 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500"
              >
                <img src="./images/tuat.jpg" alt="Profile picture" />
              </div>
              <!-- Lớp phủ đen mờ -->
              <div
                class="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 z-10"
              ></div>
            </div>
          </div>
          <div class="w-1/4 sm:w-1/4 h-52 rounded-xl overflow-hidden">
            <div class="relative h-full group cursor-pointer">
              <img
                src="./images/story-1.jpg"
                alt="Story images"
                class="group-hover:transform group-hover:scale-[1.03] transition-all duration-[600] ease-linear h-full w-full"
              />
              <div
                class="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10"
              ></div>
              <span
                class="absolute bottom-0 left-2 pb-2 font-semibold text-white"
              >
                Lorem
              </span>
              <div
                class="w-8 h-8 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500"
              >
                <img src="./images/avt-7.jpg" alt="Profile picture" />
              </div>
              <!-- Lớp phủ đen mờ -->
              <div
                class="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 z-10"
              ></div>
            </div>
          </div>
          <!-- <div class="w-1/3 sm:w-1/4 h-52 rounded-xl overflow-hidden">
            <div class="relative h-full group cursor-pointer">
              <img
                src="./images/story-2.jpg"
                alt="Story images"
                class="group-hover:transform group-hover:scale-[1.03] transition-all duration-[600] ease-linear h-full w-full"
              />
              <div
                class="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10"
              ></div>
              <span
                class="absolute bottom-0 left-2 pb-2 font-semibold text-white"
              >
                John Doe
              </span>
              <div
                class="w-8 h-8 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500"
              >
                <img src="./images/avt-6.png" alt="Profile picture" />
              </div>
            </div>
          </div> -->
          <div
            class="hidden sm:inline-block w-1/4 sm:w-1/4 h-52 rounded-xl overflow-hidden"
          >
            <div class="relative h-full group cursor-pointer">
              <img
                src="./images/story-3.jpg"
                alt="Story images"
                class="group-hover:transform group-hover:scale-[1.03] transition-all duration-[600] ease-linear h-full w-full"
              />
              <div
                class="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10"
              ></div>
              <span
                class="absolute bottom-0 left-2 pb-2 font-semibold text-white"
              >
                John Doe
              </span>
              <div
                class="w-8 h-8 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500"
              >
                <img src="./images/avt-6.png" alt="Profile picture" />
              </div>
            </div>
          </div>
          <div
            class="hidden sm:inline-block w-1/4 sm:w-1/4 h-52 rounded-xl overflow-hidden"
          >
            <div class="relative h-full group cursor-pointer">
              <img
                src="./images/story-4.jpg"
                alt="Story images"
                class="group-hover:transform group-hover:scale-[1.03] transition-all duration-[600] ease-linear h-full w-full"
              />
              <div
                class="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10"
              ></div>
              <span
                class="absolute bottom-0 left-2 pb-2 font-semibold text-white"
              >
                John Doe
              </span>
              <div
                class="w-8 h-8 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500"
              >
                <img src="./images/avt-5.jpg" alt="Profile picture" />
              </div>
            </div>
          </div>
          <div
            class="w-12 h-12 rounded-full hidden lg:grid place-items-center text-2xl bg-white absolute -right-6 top-1/2 transform -translate-y-1/2 border border-gray-200 cursor-pointer hover:bg-gray-100 shadow text-gray-500 dark:bg-dark-third dark:border-dark-third dark:text-dark-txt"
          >
            <i class="bx bx-right-arrow-alt"></i>
          </div>
        </div>
</template>