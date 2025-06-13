<template>
    <div class="relative inline-block" @click="quickReact" @mouseenter="showReactions = true"
        @mouseleave="hideReactions">
        <!-- Like Button -->
        <div :class="{ 'w-fit hover:bg-white': type == 'comment' }"
            class="w-32 dark:bg-dark-second dark:text-dark-txt font-semibold  flex justify-center items-center space-x-1 py-2 px-3 rounded-lg cursor-pointer bg-white text-gray-700 hover:bg-gray-200 dark:hover:bg-dark-third"
            v-if="selectedReaction">
            <img v-if="type == 'post'" :src="selectedReaction.image" alt="reaction" class="w-6">
            <span :class="selectedReaction.color">{{ selectedReaction.label }}</span>

        </div>
        <div :class="{ 'w-fit hover:bg-white': type == 'comment' }"
            class=" w-32  dark:bg-dark-second dark:text-dark-txt flex justify-center items-center space-x-1 py-2 px-3 rounded-lg cursor-pointer bg-white text-gray-700 hover:bg-gray-200 dark:hover:bg-dark-third"
            v-else>
            <ThumbsUp v-if="props.type == 'post'" class="w-5"></ThumbsUp>
            <span>Like</span>
        </div>
        <!-- Dropdown (No transition) -->
        <div v-show="showReactions" class="absolute w-60 bottom-full bg-white  px-2 py-2 rounded-full shadow flex z-10">
            <div @click.stop v-for="reaction in reactions" :key="reaction.name" @click="selectReaction(reaction)"
                class="cursor-pointer hover:scale-110 ">
                <img :src="reaction.image" alt="reaction" class="w-30" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, defineProps, onMounted, defineEmits } from 'vue'
import { useStore } from 'vuex'
import { ThumbsUp } from 'lucide-vue-next'
const props = defineProps(['targetId', 'likes', 'userId', 'type'])
const emit = defineEmits(['updateLikes'])
const showReactions = ref(false)
const selectedReaction = ref(null)
const store = useStore()
const reactions = ref([
    {
        name: 'like',
        label: 'Like',
        color: 'text-blue-500',
        image: '/reactions/like.png'
    },
    {
        name: 'love',
        label: 'Love',
        color: 'text-red-500',
        image: '/reactions/love.png'
    },
    {
        name: 'haha',
        label: 'Haha',
        color: 'text-yellow-500',
        image: '/reactions/haha.png'
    },
    {
        name: 'sad',
        label: 'Sad',
        color: 'text-yellow-600',
        image: '/reactions/sad.png'
    },
    {
        name: 'angry',
        label: 'Angry',
        color: 'text-orange-500',
        image: '/reactions/angry.png'
    }
])

let hideTimeout = null

const hideReactions = () => {
    hideTimeout = setTimeout(() => {
        showReactions.value = false
    }, 100)
}

const selectReaction = (reaction) => {
    // Nếu chưa có/cùng 1 react => thêm/thay thế   
    if (selectedReaction.value != reaction) {
        console.log('like');
        selectedReaction.value = reaction
        showReactions.value = false
        toggleReact(props.targetId, selectedReaction.value.name)
        return
    }
    // Đã có react thì gỡ
    if (selectedReaction.value == reaction) {
        toggleReact(props.targetId, selectedReaction.value.name)
        selectedReaction.value = null;
        showReactions.value = false
        return
    }


    if (hideTimeout) {
        clearTimeout(hideTimeout)
    }
}

function quickReact() {
    // function riêng khi người dùng react nhanh ở post
    if (selectedReaction.value != null) {
        toggleReact(props.targetId, selectedReaction.value.name)
        selectedReaction.value = null
    } else {
        selectedReaction.value = reactions.value[0];
        toggleReact(props.targetId, selectedReaction.value.name)
    }
}

let newLikes = props.likes
function toggleReact(targetId, reaction) {
    store.dispatch('post/toggleReact', {
        targetId,
        reaction,
        type: props.type
    })

    const found = newLikes.find(item => item.user_id === props.userId)
    console.log(!!found);

    if (!found) {
        // Nếu chưa có thì thêm vào mảng
        const like = {
            user_id: props.userId,
            react: selectedReaction.value.name
        }

        newLikes.push(like)
    } else {
        // Nếu đã có thì gỡ
        if (found.react == reaction) {
            newLikes = newLikes.filter(u => u.user_id != found.user_id)
        } else {
            // Nếu thay đổi react thì cập nhật
            newLikes = newLikes.map(u => {
                if (u.user_id == props.userId) {
                    return { ...u, react: reaction }
                }
                return u
            })
        }
    }
    emit('updateLikes', {
        targetId,
        likes: newLikes
    })

}


onMounted(() => {
    const found = props.likes.find(item => item.user_id === props.userId)

    if (!found) return
    selectedReaction.value = reactions.value.find(react => react.name == found.react)
})


</script>
