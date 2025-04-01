import { createApp } from 'vue'
import App from './App.vue'
import route from './route.js'
import store from './store/store.js'
import loading_spinner from "./components/loading/loading_spinner.vue"
import imgLoader from './composables/imgLoader.js'
improt imgLoader
const vuejs = createApp(App)
vuejs.use(route)
vuejs.use(store)
vuejs.component('loading-spinner', loading_spinner)
vuejs.mount('#app')
