
<template>
    <div id="CreatePostBox" class="w-full bg-white rounded-lg px-3 mt-4 shadow-md">

        <div class="flex items-center py-3 border-b">
            <Link :href="route('user.show', { id: user.id })" class="mr-2">
                <img class="rounded-full ml-1 min-w-[36px] max-h-[36px]" :src="image || ''">
            </Link>
            <div
                @click="isPostOverlay = true"
                class="flex items-center justify-start bg-[#EFF2F5] p-2 rounded-full w-full cursor-pointer"
            >
                <div class="text-left pl-2">{{ placeholder }}</div>
            </div>
        </div>

        <div class="flex items-center py-3 border-b">
            <button class="flex items-center justify-center p-1 hover:bg-[#F2F2F2] w-full rounded-lg mx-1 cursor-pointer">
                <VideoImage :size="35" fillColor="#F12848"/>
                <div class="text-[#6F7275] font-bold">Live video</div>
            </button>
            <button class="flex items-center justify-center p-1 hover:bg-[#F2F2F2] w-full rounded-lg mx-1 cursor-pointer">
                <Image :size="35" fillColor="#43BE62"/>
                <div class="text-[#6F7275] font-bold">Photo/video</div>
            </button>
            <button class="flex items-center justify-center p-1 hover:bg-[#F2F2F2] w-full rounded-lg mx-1 cursor-pointer">
                <EmoticonOutline :size="35" fillColor="#F8B927"/>
                <div class="text-[#6F7275] font-bold">Feeling/activity</div>
            </button>
        </div>

    </div>
</template>