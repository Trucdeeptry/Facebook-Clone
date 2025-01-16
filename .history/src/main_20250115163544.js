import { createApp } from 'vue'
import App from './App.vue'
import route from './route.js'
import store from './store/store.js'
import loading_spinner from "../components/loading/loading_spinner.vue";


const vuejs = createApp(App)
vuejs.use(route)
vuejs.use(store)
vuejs.component(loading_spinner)
vuejs.mount('#app')
