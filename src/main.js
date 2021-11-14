
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



// package

// styles
import './styles/common.css'
import './styles/star.sass'

const app = createApp(App)
app.use(router).mount('#app')
