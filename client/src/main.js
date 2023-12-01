import { createApp } from 'vue'
import App from './App.vue'
import router from "@/routes/router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from "axios";
import config from "@/config";


axios.defaults.baseURL = config.SERVER_URL


const app = createApp(App)
app.use(router)
app.use(ElementPlus)


app.mount('#app')

