import { createApp } from 'vue'
import App from './App.vue'
import route from './route.js'
import store from './store/store.js'

const vuejs = createApp(App)
vuejs.use(route)
vuejs.use(store)
vuejs.mount('#app')
