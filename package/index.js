import "./iconfont/iconfont.css";
import Toast from "./toast";
import Puzzle from "./puzzle/";
const components = [Toast, Puzzle];
const install = function(Vue) {
  components.map(component => Vue.component(component.name, component));
  // components.forEach(Component => {
  //   Vue.use(Component);
  // });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install
};
export { install, Toast, Puzzle };
