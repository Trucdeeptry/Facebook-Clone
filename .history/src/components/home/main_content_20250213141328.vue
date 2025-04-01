<template>
  <div class="w-full lg:w-2/3 xl:w-2/5 pt-32 lg:pt-16 px-2">
    <!-- POST FORM -->
    <div class="px-4 mt-4 shadow rounded-lg bg-white dark:bg-dark-second">
      <div
        class="p-2 border-b border-gray-300 dark:border-dark-third flex space-x-4 items-center"
      >
        <img
          src="./images/tuat.jpg"
          alt="Profile picture"
          class="w-9 h-9 rounded-full"
        />
        <input
          type="text"
          placeholder="What's on your mind, Tuat? "
          class="flex-1 bg-gray-100 cursor-text text-primary-txt dark:text-dark-txt rounded-full flex items-center py-2 justify-start pl-4 dark:bg-dark-third text-lg"
        />>
      </div>
      <div class="p-2 flex">
        <div
          class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-red-500"
        >
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v4/yr/r/c0dWho49-X3.png?_nc_eui2=AeGyuqIRlRJx3v7sFA36FXgbueRic5Ym8Wm55GJzlibxaWEAPerXGueHyyMMGrRbq-5ErQWx8Q8nmwAnbOa7gLuF"
            alt=""
          />
          <span
            class="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt"
            >Live video</span
          >
        </div>
        <div
          class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-green-500"
        >
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v4/y7/r/Ivw7nhRtXyo.png?_nc_eui2=AeGm7W70kVHwGi8X9PrD-eFWkBVQC4m7dx6QFVALibt3HlMs4_pqRAe1xV61m-ceuWzZ2Tg9ZAdMkmUL3Hu2lz8J"
            alt=""
          />
          <span
            class="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt"
            >Photo/video</span
          >
        </div>
        <div
          class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-yellow-500"
        >
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v4/yd/r/Y4mYLVOhTwq.png?_nc_eui2=AeHdZW7-e9L4XZ1I4EhHXN7rfPQ6N5_OUfV89Do3n85R9aREhKahfT_SVHB85U9E_bdX5MhLavebmjBWZwN5WqAe"
            alt=""
          />
          <span
            class="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt"
            >Felling/activity</span
          >
        </div>
      </div>
    </div>
    <!-- STORY -->
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
          <span class="font-semibold whitespace-nowrap"> Create Story </span>
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
          <span class="absolute bottom-0 left-2 pb-2 font-semibold text-white">
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
          <span class="absolute bottom-0 left-2 pb-2 font-semibold text-white">
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
          <span class="absolute bottom-0 left-2 pb-2 font-semibold text-white">
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
          <span class="absolute bottom-0 left-2 pb-2 font-semibold text-white">
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
    <!-- END STORY -->

    <!-- END POST FORM -->

    <!-- ROOM -->
    <!-- <div
          class="p-4 mt-4 shadow rounded-lg bg-white dark:bg-dark-second overflow-hidden"
        >
          <div class="flex space-x-4 relative">
            <div
              class=" lg:w-3/12 flex space-x-2 px-3 items-center justify-center border-2 border-blue-200 dark:border-blue-700 rounded-full cursor-pointer"
            >
              <i class="bx bxs-video-plus text-2xl text-purple-500"></i>
              <span class="text-sm font-semibold text-blue-500 whitespace-nowrap"
                >Create Room</span
              >
            </div>
            <div class="relative cursor-pointer">
              <img
                src="./images/avt-3.jpg"
                alt="Profile picture"
                class="rounded-full"
              />
              <span
                class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"
              ></span>
            </div>
            <div class="relative cursor-pointer">
              <img
                src="./images/avt-4.jpg"
                alt="Profile picture"
                class="rounded-full"
              />
              <span
                class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"
              ></span>
            </div>
            <div class="relative cursor-pointer">
              <img
                src="./images/avt-5.jpg"
                alt="Profile picture"
                class="rounded-full"
              />
              <span
                class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"
              ></span>
            </div>
            <div class="relative cursor-pointer">
              <img
                src="./images/avt-2.jpg"
                alt="Profile picture"
                class="rounded-full"
              />
              <span
                class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"
              ></span>
            </div>
            <div class="relative cursor-pointer hidden sm:inline">
              <img
                src="./images/avt-3.jpg"
                alt="Profile picture"
                class="rounded-full"
              />
              <span
                class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"
              ></span>
            </div>
            <div class="relative cursor-pointer hidden sm:inline">
              <img
                src="./images/avt-4.jpg"
                alt="Profile picture"
                class="rounded-full"
              />
              <span
                class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"
              ></span>
            </div>
            <div class="relative cursor-pointer hidden sm:inline">
              <img
                src="./images/avt-5.jpg"
                alt="Profile picture"
                class="rounded-full"
              />
              <span
                class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"
              ></span>
            </div>
            <div class="relative cursor-pointer hidden sm:inline">
              <img
                src="./images/avt-7.jpg"
                alt="Profile picture"
                class="rounded-full"
              />
              <span
                class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"
              ></span>
            </div>
            <div class="relative cursor-pointer hidden sm:inline">
              <img
                src="./images/avt-3.jpg"
                alt="Profile picture"
                class="rounded-full"
              />
              <span
                class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"
              ></span>
            </div>
            <div
              class="w-12 h-12 rounded-full hidden lg:grid place-items-center text-2xl text-gray-500 bg-white absolute right-0 top-1/2 transform -translate-y-1/2 border border-gray-200 cursor-pointer hover:bg-gray-100 shadow dark:bg-dark-third dark:border-dark-third dark:text-dark-txt"
            >
              <i class="bx bxs-chevron-right"></i>
            </div>
          </div>
        </div> -->
    <!-- END ROOM -->

    <!-- LIST POST -->

    <div>
      <!-- POST -->
      <div
        class="shadow bg-white dark:bg-dark-second dark:text-primary-txt mt-4 rounded-lg"
      >
        <!-- POST AUTHOR -->
        <div class="flex items-center justify-between px-4 py-2">
          <div class="flex space-x-2 items-center">
            <div class="relative">
              <a href="#">
                <img
                  src="./images/avt-2.jpg"
                  alt="Profile picture"
                  class="w-8 h-8 rounded-full" />
                <span
                  class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"
                ></span
              ></a>
            </div>
            <div>
              <div class="font-semibold">
                <a href="#" class="hover:!underline">John Doe</a>
              </div>
              <span class="text-sm text-gray-500">38m</span>
            </div>
          </div>
          <div
            class="w-8 h-8 grid place-items-center text-xl text-gray-500 hover:bg-gray-200 dark:text-dark-txt dark:hover:bg-dark-third rounded-full cursor-pointer"
          >
            <i class="bx bx-dots-horizontal-rounded"></i>
          </div>
        </div>
        <!-- END POST AUTHOR -->

        <!-- POST CONTENT -->
        <div class="text-justify px-4 py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          autem earum cum ullam odio, molestias maxime aperiam in id aspernatur
          vel ratione odit molestiae minus ipsa obcaecati quia! Doloribus,
          illum.
        </div>
        <!-- END POST CONTENT -->

        <!-- POST IMAGE -->
        <div class="py-2">
          <img src="./images/post.png" alt="Post image" />
        </div>
        <!-- END POST IMAGE -->

        <!-- POST REACT -->
        <div class="px-4 py-2">
          <div class="flex items-center justify-between">
            <div class="flex flex-row-reverse items-center">
              <span class="ml-2 text-gray-500 dark:text-dark-txt">999</span>
              <span
                class="rounded-full grid place-items-center text-2xl -ml-1 text-red-800"
              >
                <i class="bx bxs-angry"></i>
              </span>
              <span
                class="rounded-full grid place-items-center text-2xl -ml-1 text-red-500"
              >
                <i class="bx bxs-heart-circle"></i>
              </span>
              <span
                class="rounded-full grid place-items-center text-2xl -ml-1 text-yellow-500"
              >
                <i class="bx bx-happy-alt"></i>
              </span>
            </div>
            <div class="text-gray-500 dark:text-dark-txt">
              <span>90 comments</span>
              <span>66 Shares</span>
            </div>
          </div>
        </div>
        <!-- END POST REACT -->

        <!-- POST ACTION -->
        <div class="py-2 px-4">
          <div
            class="border border-gray-200 dark:border-dark-third border-l-0 border-r-0 py-1"
          >
            <div class="flex space-x-2">
              <div
                class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt"
              >
                <i class="bx bx-like"></i>
                <span class="text-sm font-semibold">Like</span>
              </div>
              <div
                class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt"
              >
                <i class="bx bx-comment"></i>
                <span class="text-sm font-semibold">Comment</span>
              </div>
              <div
                class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt"
              >
                <i class="bx bx-share bx-flip-horizontal"></i>
                <span class="text-sm font-semibold">Share</span>
              </div>
            </div>
          </div>
        </div>
        <!-- END POST ACTION -->

        <!-- LIST COMMENT -->
        <div class="py-2 px-4">
          <!-- COMMENT -->
          <div class="flex space-x-2">
            <img
              src="./images/avt-5.jpg"
              alt="Profile picture"
              class="w-9 h-9 rounded-full"
            />
            <div>
              <div
                class="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm"
              >
                <span class="font-semibold block">John Doe</span>
                <span
                  >Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.</span
                >
              </div>
              <div class="p-2 text-xs text-gray-500 dark:text-dark-txt">
                <span class="font-semibold cursor-pointer">Like</span>
                <span>.</span>
                <span class="font-semibold cursor-pointer">Reply</span>
                <span>.</span>
                10m
              </div>
              <!-- COMMENT -->
              <div class="flex space-x-2">
                <img
                  src="./images/avt-7.jpg"
                  alt="Profile picture"
                  class="w-9 h-9 rounded-full"
                />
                <div>
                  <div
                    class="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm"
                  >
                    <span class="font-semibold block">John Doe</span>
                    <span
                      >Lorem ipsum dolor sit amet consectetur adipisicing
                      elit.</span
                    >
                  </div>
                  <div class="p-2 text-xs text-gray-500 dark:text-dark-txt">
                    <span class="font-semibold cursor-pointer">Like</span>
                    <span>.</span>
                    <span class="font-semibold cursor-pointer">Reply</span>
                    <span>.</span>
                    10m
                  </div>
                </div>
              </div>
              <!-- END COMMENT -->
            </div>
          </div>
          <!-- END COMMENT -->
          <!-- COMMENT -->
          <div class="flex space-x-2">
            <img
              src="./images/avt-5.jpg"
              alt="Profile picture"
              class="w-9 h-9 rounded-full"
            />
            <div>
              <div
                class="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm"
              >
                <span class="font-semibold block">John Doe</span>
                <span
                  >Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                  voluptate ipsa animi corrupti unde, voluptatibus expedita
                  suscipit, itaque, laudantium accusantium aspernatur officia
                  repellendus nihil mollitia soluta distinctio praesentium nulla
                  eos?</span
                >
              </div>
              <div class="p-2 text-xs text-gray-500 dark:text-dark-txt">
                <span class="font-semibold cursor-pointer">Like</span>
                <span>.</span>
                <span class="font-semibold cursor-pointer">Reply</span>
                <span>.</span>
                10m
              </div>
              <!-- COMMENT -->
              <div class="flex space-x-2">
                <img
                  src="./images/avt-7.jpg"
                  alt="Profile picture"
                  class="w-9 h-9 rounded-full"
                />
                <div>
                  <div
                    class="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm"
                  >
                    <span class="font-semibold block">John Doe</span>
                    <span
                      >Lorem ipsum dolor sit amet consectetur adipisicing
                      elit.</span
                    >
                  </div>
                  <div class="p-2 text-xs text-gray-500 dark:text-dark-txt">
                    <span class="font-semibold cursor-pointer">Like</span>
                    <span>.</span>
                    <span class="font-semibold cursor-pointer">Reply</span>
                    <span>.</span>
                    10m
                  </div>
                </div>
              </div>
              <!-- END COMMENT -->
            </div>
          </div>
          <!-- END COMMENT -->
        </div>
        <!-- END LIST COMMENT -->

        <!-- COMMENT FORM -->
        <div class="py-2 px-4">
          <div class="flex space-x-2">
            <img
              src="./images/tuat.jpg"
              alt="Profile picture"
              class="w-9 h-9 rounded-full"
            />
            <div
              class="flex-1 flex bg-gray-100 dark:bg-dark-third rounded-full items-center justify-between px-3"
            >
              <input
                type="text"
                placeholder="Write a comment..."
                class="outline-none bg-transparent flex-1"
              />
              <div class="flex space-x-0 items-center justify-center">
                <span
                  class="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl"
                  ><i class="bx bx-smile"></i
                ></span>
                <span
                  class="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl"
                  ><i class="bx bx-camera"></i
                ></span>
                <span
                  class="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl"
                  ><i class="bx bxs-file-gif"></i
                ></span>
                <span
                  class="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl"
                  ><i class="bx bx-happy-heart-eyes"></i
                ></span>
              </div>
            </div>
          </div>
        </div>
        <!-- END COMMENT FORM -->
      </div>
      <!-- END POST -->

      <!-- POST -->
      <div
        class="shadow bg-white dark:bg-dark-second dark:text-dark-txt mt-4 rounded-lg"
      >
        <!-- POST AUTHOR -->
        <div class="flex items-center justify-between px-4 py-2">
          <div class="flex space-x-2 items-center">
            <div class="relative">
              <img
                src="./images/avt-2.jpg"
                alt="Profile picture"
                class="w-8 h-8 rounded-full"
              />
              <span
                class="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"
              ></span>
            </div>
            <div>
              <div class="font-semibold">John Doe</div>
              <span class="text-sm text-gray-500">38m</span>
            </div>
          </div>
          <div
            class="w-8 h-8 grid place-items-center text-xl text-gray-500 hover:bg-gray-200 dark:text-dark-txt dark:hover:bg-dark-third rounded-full cursor-pointer"
          >
            <i class="bx bx-dots-horizontal-rounded"></i>
          </div>
        </div>
        <!-- END POST AUTHOR -->

        <!-- POST CONTENT -->
        <div class="text-justify px-4 py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          autem earum cum ullam odio, molestias maxime aperiam in id aspernatur
          vel ratione odit molestiae minus ipsa obcaecati quia! Doloribus,
          illum.
        </div>
        <!-- END POST CONTENT -->

        <!-- POST IMAGE -->
        <div class="py-2">
          <div class="grid grid-cols-2 gap-1">
            <img src="./images/post-2 (1).jpg" alt="Post image" />
            <img src="./images/post-2 (2).jpg" alt="Post image" />
            <img src="./images/post-2 (3).jpg" alt="Post image" />
            <img src="./images/post-2 (4).jpg" alt="Post image" />
          </div>
        </div>
        <!-- END POST IMAGE -->

        <!-- POST REACT -->
        <div class="px-4 py-2">
          <div class="flex items-center justify-between">
            <div class="flex flex-row-reverse items-center">
              <span class="ml-2 text-gray-500 dark:text-dark-txt">999</span>
              <span
                class="rounded-full grid place-items-center text-2xl -ml-1 text-red-800"
              >
                <i class="bx bxs-angry"></i>
              </span>
              <span
                class="rounded-full grid place-items-center text-2xl -ml-1 text-red-500"
              >
                <i class="bx bxs-heart-circle"></i>
              </span>
              <span
                class="rounded-full grid place-items-center text-2xl -ml-1 text-yellow-500"
              >
                <i class="bx bx-happy-alt"></i>
              </span>
            </div>
            <div class="text-gray-500 dark:text-dark-txt">
              <span>90 comments</span>
              <span>66 Shares</span>
            </div>
          </div>
        </div>
        <!-- END POST REACT -->

        <!-- POST ACTION -->
        <div class="py-2 px-4">
          <div
            class="border border-gray-200 dark:border-dark-third border-l-0 border-r-0 py-1"
          >
            <div class="flex space-x-2">
              <div
                class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt"
              >
                <i class="bx bx-like"></i>
                <span class="text-sm font-semibold">Like</span>
              </div>
              <div
                class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt"
              >
                <i class="bx bx-comment"></i>
                <span class="text-sm font-semibold">Comment</span>
              </div>
              <div
                class="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt"
              >
                <i class="bx bx-share bx-flip-horizontal"></i>
                <span class="text-sm font-semibold">Share</span>
              </div>
            </div>
          </div>
        </div>
        <!-- END POST ACTION -->

        <!-- LIST COMMENT -->
        <div class="py-2 px-4">
          <!-- COMMENT -->
          <div class="flex space-x-2">
            <img
              src="./images/avt-5.jpg"
              alt="Profile picture"
              class="w-9 h-9 rounded-full"
            />
            <div>
              <div
                class="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm"
              >
                <span class="font-semibold block">John Doe</span>
                <span
                  >Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.</span
                >
              </div>
              <div class="p-2 text-xs text-gray-500 dark:text-dark-txt">
                <span class="font-semibold cursor-pointer">Like</span>
                <span>.</span>
                <span class="font-semibold cursor-pointer">Reply</span>
                <span>.</span>
                10m
              </div>
              <!-- COMMENT -->
              <div class="flex space-x-2">
                <img
                  src="./images/avt-7.jpg"
                  alt="Profile picture"
                  class="w-9 h-9 rounded-full"
                />
                <div>
                  <div
                    class="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm"
                  >
                    <span class="font-semibold block">John Doe</span>
                    <span
                      >Lorem ipsum dolor sit amet consectetur adipisicing
                      elit.</span
                    >
                  </div>
                  <div class="p-2 text-xs text-gray-500 dark:text-dark-txt">
                    <span class="font-semibold cursor-pointer">Like</span>
                    <span>.</span>
                    <span class="font-semibold cursor-pointer">Reply</span>
                    <span>.</span>
                    10m
                  </div>
                </div>
              </div>
              <!-- END COMMENT -->
            </div>
          </div>
          <!-- END COMMENT -->
          <!-- COMMENT -->
          <div class="flex space-x-2">
            <img
              src="./images/avt-5.jpg"
              alt="Profile picture"
              class="w-9 h-9 rounded-full"
            />
            <div>
              <div
                class="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm"
              >
                <span class="font-semibold block">John Doe</span>
                <span
                  >Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                  voluptate ipsa animi corrupti unde, voluptatibus expedita
                  suscipit, itaque, laudantium accusantium aspernatur officia
                  repellendus nihil mollitia soluta distinctio praesentium nulla
                  eos?</span
                >
              </div>
              <div class="p-2 text-xs text-gray-500 dark:text-dark-txt">
                <span class="font-semibold cursor-pointer">Like</span>
                <span>.</span>
                <span class="font-semibold cursor-pointer">Reply</span>
                <span>.</span>
                10m
              </div>
              <!-- COMMENT -->
              <div class="flex space-x-2">
                <img
                  src="./images/avt-7.jpg"
                  alt="Profile picture"
                  class="w-9 h-9 rounded-full"
                />
                <div>
                  <div
                    class="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm"
                  >
                    <span class="font-semibold block">John Doe</span>
                    <span
                      >Lorem ipsum dolor sit amet consectetur adipisicing
                      elit.</span
                    >
                  </div>
                  <div class="p-2 text-xs text-gray-500 dark:text-dark-txt">
                    <span class="font-semibold cursor-pointer">Like</span>
                    <span>.</span>
                    <span class="font-semibold cursor-pointer">Reply</span>
                    <span>.</span>
                    10m
                  </div>
                </div>
              </div>
              <!-- END COMMENT -->
            </div>
          </div>
          <!-- END COMMENT -->
        </div>
        <!-- END LIST COMMENT -->

        <!-- COMMENT FORM -->
        <div class="py-2 px-4">
          <div class="flex space-x-2">
            <img
              src="./images/tuat.jpg"
              alt="Profile picture"
              class="w-9 h-9 rounded-full"
            />
            <div
              class="flex-1 flex bg-gray-100 dark:bg-dark-third rounded-full items-center justify-between px-3"
            >
              <input
                type="text"
                placeholder="Write a comment..."
                class="outline-none bg-transparent flex-1"
              />
              <div class="flex space-x-0 items-center justify-center">
                <span
                  class="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl"
                  ><i class="bx bx-smile"></i
                ></span>
                <span
                  class="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl"
                  ><i class="bx bx-camera"></i
                ></span>
                <span
                  class="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl"
                  ><i class="bx bxs-file-gif"></i
                ></span>
                <span
                  class="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl"
                  ><i class="bx bx-happy-heart-eyes"></i
                ></span>
              </div>
            </div>
          </div>
        </div>
        <!-- END COMMENT FORM -->
      </div>
      <!-- END POST -->
    </div>

    <!-- END LIST POST -->
  </div>
</template>
