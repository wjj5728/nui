import Puzzle from "./src/main";

/* istanbul ignore next */
Puzzle.install = function(Vue) {
  Vue.component(Puzzle.name, Puzzle);
};

export default Puzzle;
