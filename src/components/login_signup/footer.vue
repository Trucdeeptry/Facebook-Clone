<template>
    <footer class="bg-gray-50 border-t  !w-full !m-0 border-gray-200 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Language Selection Section -->
            <div class="mb-8">
                <h3 class="text-sm font-medium text-gray-900 mb-4">Choose Language</h3>
                <div class="flex flex-wrap gap-2">
                    <span v-for="(language, index) in languages" :key="index" :class="[
                        'inline-flex items-center px-3 py-1.5 rounded-full text-sm transition-colors duration-200',
                        language.active
                            ? 'bg-blue-100 text-blue-800 font-medium'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50 cursor-pointer'
                    ]" @click="setActiveLanguage(index)">
                        {{ language.name }}
                    </span>
                    <button
                        class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800 transition-colors duration-200"
                        @click="showMoreLanguages = !showMoreLanguages">
                        <PlusIcon class="w-4 h-4" />
                    </button>
                </div>
            </div>

            <!-- Divider -->
            <div class="border-t border-gray-200 mb-8"></div>

            <!-- Links Section -->
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-8">
                <div v-for="(category, categoryIndex) in linkCategories" :key="categoryIndex">
                    <h4 class="text-sm font-semibold text-gray-900 mb-3">{{ category.title }}</h4>
                    <ul class="space-y-2">
                        <li v-for="(link, linkIndex) in category.links" :key="linkIndex">
                            <a :href="link.href"
                                class="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 block">
                                {{ link.name }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Bottom Section -->
            <div class="border-t border-gray-200 pt-8">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <div class="flex flex-wrap gap-6 mb-4 md:mb-0">
                        <a v-for="(link, index) in bottomLinks" :key="index" :href="link.href"
                            class="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200">
                            {{ link.name }}
                        </a>
                    </div>
                    <p class="text-sm text-gray-500">
                        © {{ currentYear }} Meta Platforms, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { PlusIcon } from 'lucide-vue-next'

const showMoreLanguages = ref(false)
const activeLanguageIndex = ref(0)

const languages = ref([
    { name: 'English (UK)', active: true },
    { name: '中文(简体)', active: false },
    { name: 'Bahasa Indonesia', active: false },
    { name: '日本語', active: false },
    { name: 'ภาษาไทย', active: false },
    { name: 'Tiếng Việt', active: false },
    { name: '한국어', active: false },
    { name: 'Español', active: false },
    { name: 'Português (Brasil)', active: false },
    { name: 'Français (France)', active: false },
    { name: 'Deutsch', active: false }
])
const linkCategories = ref([
    {
        title: 'Platforms',
        links: [
            { name: 'ChatSphere', href: '#' },
            { name: 'ConnectSphere', href: '#' },
            { name: 'TalkNow', href: '#' },
            { name: 'VisionVR', href: '#' },
            { name: 'SmartHub', href: '#' }
        ]
    },
    {
        title: 'Features',
        links: [
            { name: 'LiveStream', href: '#' },
            { name: 'Connections', href: '#' },
            { name: 'Communities', href: '#' },
            { name: 'Groups', href: '#' },
            { name: 'MarketHub', href: '#' }
        ]
    },
    {
        title: 'Services',
        links: [
            { name: 'QuickPay', href: '#' },
            { name: 'GamingZone', href: '#' },
            { name: 'CrowdFund', href: '#' },
            { name: 'AugmentX', href: '#' },
            { name: 'StoreFront', href: '#' }
        ]
    },
    {
        title: 'Business',
        links: [
            { name: 'LaunchAd', href: '#' },
            { name: 'BuildProfile', href: '#' },
            { name: 'DevHub', href: '#' },
            { name: 'Careers', href: '#' },
            { name: 'SupportDesk', href: '#' }
        ]
    },
    {
        title: 'Community',
        links: [
            { name: 'Hangouts', href: '#' },
            { name: 'Nearby', href: '#' },
            { name: 'Gatherings', href: '#' },
            { name: 'CivicInfo', href: '#' },
            { name: 'AidNetwork', href: '#' }
        ]
    },
    {
        title: 'Support',
        links: [
            { name: 'HelpHub', href: '#' },
            { name: 'AboutUs', href: '#' },
            { name: 'GetInTouch', href: '#' },
            { name: 'SafetyFirst', href: '#' },
            { name: 'CommunityRules', href: '#' }
        ]
    }
])

const bottomLinks = ref([
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Cookies', href: '#' },
    { name: 'AdChoices', href: '#' },
    { name: 'Help', href: '#' }
])

const currentYear = computed(() => new Date().getFullYear())

const setActiveLanguage = (index) => {
    languages.value.forEach((lang, i) => {
        lang.active = i === index
    })
    activeLanguageIndex.value = index
}
</script>