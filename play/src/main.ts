import { createApp } from "vue";

import App from "./App.vue";
import Icon from "@yeweimao/components/icon";

const plugins = [Icon];

const app = createApp(App);
plugins.forEach((plugin) => {
  console.log(plugin);
  app.use(plugin);
});

app.mount("#app");
