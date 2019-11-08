import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Nui from "../package/index";
import VueHighlightJS from "vue-highlightjs";
// import "highlight.js/styles/a11y-light.css";
import "./layout/common.scss";
import "animate.css";

Vue.use(VueHighlightJS);
Vue.use(Nui);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
