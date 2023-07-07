import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
const piniaInstance = createPinia();
createApp(App).use(piniaInstance).mount("#app");
