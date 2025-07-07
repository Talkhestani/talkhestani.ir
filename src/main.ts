import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import Navbar from '@/components/partials/Navbar.vue'
import Footer from '@/components/partials/Footer.vue'


const app = createApp(App)
app.component('Navbar', Navbar)
app.component('Footer', Footer)
app.mount('#app')
