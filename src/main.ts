import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/js/all'
import Footer from './components/Footer.vue'

const app = createApp(App)

app.use(router)

app.mount('#app')

