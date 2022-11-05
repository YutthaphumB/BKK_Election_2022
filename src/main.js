import { createApp } from "vue";
import App from "./App.vue";
import ethers from "ethers"
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import store from "./store";

const app = createApp(App).use(store);
app.use(ethers);
app.use(router);
app.use(PrimeVue);
app.use(ToastService);
app.mount("#app");
