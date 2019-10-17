import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Nui from "../package/index";
import VueHighlightJS from "vue-highlightjs";
import "highlight.js/styles/atom-one-dark.css";
import "./layout/common.scss";

Vue.use(VueHighlightJS);
Vue.use(Nui);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
