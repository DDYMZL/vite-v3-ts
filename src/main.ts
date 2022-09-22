import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import ElementPlus from "element-plus";

import "element-plus/dist/index.css";
import "@/assets/style/init.css";

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount("#app");
