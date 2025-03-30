import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
const piniaInstance = createPinia();
const app = createApp(App);
app.use(piniaInstance).use(router).mount("#app");
