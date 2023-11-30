import { createApp } from 'vue'
import App from './App.vue'
import router from "@/routes/router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3000/api/'




const app = createApp(App)
app.use(router)
app.use(ElementPlus)


app.mount('#app')
