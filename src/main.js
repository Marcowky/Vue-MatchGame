import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { router } from "./routes/router"; // 引入路由

const app = createApp(App)

app.use(ElementPlus)
app.use(router); // 引入路由
app.mount('#app')