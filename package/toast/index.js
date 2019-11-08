import Toast from "./src/main";
Toast.install = function(Vue) {
  Vue.component(Toast.name, Toast);
};
export default Toast;
