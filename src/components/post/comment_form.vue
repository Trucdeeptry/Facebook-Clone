<template>
    <!-- COMMENT FORM -->
    <div class="py-2 pb-3 px-4 sticky z-10 -bottom-1 bg-white dark:bg-dark-second w-full">
        <div class="flex space-x-2">
            <img :src="props.user.avatar" alt="Profile picture" class="w-9 h-9 rounded-full object-cover" />
            <div class="flex-1 flex bg-gray-100 dark:bg-dark-third rounded-full items-center justify-between px-3">
                <input @keyup.enter="sendMessage" v-model="message" type="text" placeholder="Write a comment..."
                    class="outline-none bg-transparent flex-1" />
                <div v-if="!message" class="flex space-x-0 items-center justify-center">
                    <span
                        class="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl"><i
                            class="bx bx-smile"></i></span>
                    <span
                        class="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl"><i
                            class="bx bx-camera"></i></span>
                    <span
                        class="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl"><i
                            class="bx bxs-file-gif"></i></span>
                    <span
                        class="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl"><i
                            class="bx bx-happy-heart-eyes"></i></span>
                </div>
                <SendHorizontal @click="sendMessage" v-else-if="!isUploadComment"
                    class="cursor-pointer mr-2 text-blue-500"></SendHorizontal>
                <loading_spinner class="w-6" v-else></loading_spinner>
            </div>
        </div>
    </div>
    <!-- END COMMENT FORM -->
</template>

<script setup>
import { SendHorizontal } from 'lucide-vue-next';
import loading_spinner from '../loading/loading_spinner.vue';
import { ref, defineProps, defineEmits } from 'vue'
import { useStore } from 'vuex';
const emit = defineEmits(['updateComment'])
const props = defineProps(['user', 'postId'])
const message = ref('')
const isUploadComment = ref(false)
const store = useStore()

async function sendMessage() {
    isUploadComment.value = true
    const comment = await store.dispatch('comment/sendComment', {
        userId: props.user.user_id,
        postId: props.postId,
        message: message.value
    })
    emit('updateComment', {
        comment,
        postId: props.postId
    })
    message.value = ''
    isUploadComment.value = false

}



</script>