import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
const piniaInstance = createPinia();
createApp(App).use(piniaInstance).use(router).mount("#app");
