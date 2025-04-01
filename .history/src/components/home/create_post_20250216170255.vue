<template>
  <div
    v-if="isModalOpen"
    id="CreatePostOverlay"
    class="fixed z-50 top-0 left-0 w-full h-full bg-black/70"
  >
    <div class="grid h-screen place-items-center p-4">
      <div class="bg-dark-main w-full max-w-[600px] mx-auto shadow-xl rounded-xl">
        <div class="flex items-center relative my-3.5 mx-1">
          <div class="text-[22px] dark:text-primary-txt font-extrabold w-full text-center">
            Create post
          </div>
          <div
            @click="emit('closePost')"
            class="absolute right-3 rounded-full p-1.5 px-2.5 bg-gray-200 hover:bg-gray-300 cursor-pointer"
          >
            <i class="fa-solid fa-xmark text-[27px]"></i>
          </div>
        </div>

        <div class="border-t border-t-gray-300">
          <div class="p-4">
            <div class="flex items-center">
              <img
                class="rounded-full ml-1 min-w-[45px] max-h-[45px]"
                src="/img/home/avt-2.jpg"
              />
              <div class="ml-4">
                <div class="font-extrabold dark:text-primary-txt">name</div>
                <div
                  class="flex cursor-pointer items-center gap-1 w-[100px] dark:text-primary-txt dark:bg-dark-third bg-gray-200 p-1 px-2 rounded-lg"
                >
                  <i class="fa-solid fa-earth-americas"></i>
                  <span class="font-bold pl-1.5 text-[13px]">Public</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>

            <div class="max-h-[350px] overflow-auto">
              <textarea
                class="w-full outline-none dark:text-primary-txt border-0 p-2 mt-4 focus:ring-0 text-[22px]"
                placeholder="What's on your mind?"
                cols="30"
                rows="3"
              ></textarea>
              <!-- <div class="p-2 border border-gray-300 rounded-lg relative">
                <Close
                  @click="clearImage()"
                  class="absolute bg-white p-0.5 m-2 right-2 rounded-full border cursor-pointer"
                  :size="24"
                  fillColor="#5E6771"
                />
                <img class="rounded-lg mx-auto" src="" />
              </div> -->
            </div>

            <div
              class="border-2 rounded-xl mt-4 p-1 shadow-sm flex items-center justify-between"
            >
              <div class="font-extrabold p-4 text-sm">Add to your post</div>
              <div class="flex items-center">
                <button
                  class="hover:bg-gray-200 rounded-full p-2 cursor-pointer w-11 h-11"
                >
                  <i
                    class="fa-regular fa-face-laugh text-[24px]"
                    style="color: #ffd43b"
                  ></i>
                </button>
                <button
                  class="hover:bg-gray-200 rounded-full p-2 cursor-pointer w-11 h-11"
                >
                  <i
                    class="fa-solid fa-photo-film text-[24px]"
                    style="color: #63e6be"
                  ></i>
                </button>
                <button
                  class="hover:bg-gray-200 rounded-full p-2 cursor-pointer w-11 h-11"
                >
                  <i
                    class="fa-solid fa-user-tag text-[24px]"
                    style="color: #74c0fc"
                  ></i>
                </button>
                <button
                  class="hover:bg-gray-200 rounded-full p-2 cursor-pointer w-11 h-11"
                >
                  <i class="fa-solid fa-ellipsis text-[24px]"></i>
                </button>
              </div>
            </div>

            <div v-if="error">
              <div
                class="w-full bg-red-100 text-red-700 rounded-lg mt-3 text-center"
              >
                <div class="p-0.5">error</div>
              </div>
            </div>

            <button
              @click="createPost"
              class="w-full bg-blue-500 hover:bg-blue-600 text-white font-extrabold p-1.5 mt-3 rounded-lg"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
defineProps({
  isModalOpen: Boolean,
});

const emit = defineEmits(["closePost"]);
</script>
