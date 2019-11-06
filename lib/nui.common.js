module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "b3e2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: G:/tool/nui/nui/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./public/iconfont/iconfont.css
var iconfont = __webpack_require__("b3e2");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"71a3699a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./package/toast/src/main.vue?vue&type=template&id=25cb526a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("toast")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./package/toast/src/main.vue?vue&type=template&id=25cb526a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./package/toast/src/main.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var mainvue_type_script_lang_js_ = ({
  name: "toast"
});

// CONCATENATED MODULE: ./package/toast/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./package/toast/src/main.vue





/* normalize component */

var component = normalizeComponent(
  src_mainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var main = (component.exports);
// CONCATENATED MODULE: ./package/toast/index.js


/* istanbul ignore next */
main.install = function(Vue) {
  Vue.component(main.name, main);
};

/* harmony default export */ var toast = (main);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"71a3699a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./package/puzzle/src/main.vue?vue&type=template&id=3f65a052&
var mainvue_type_template_id_3f65a052_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"puzzle"}})}
var mainvue_type_template_id_3f65a052_staticRenderFns = []


// CONCATENATED MODULE: ./package/puzzle/src/main.vue?vue&type=template&id=3f65a052&

// CONCATENATED MODULE: ./package/puzzle/src/Puzzle.js
class Puzzle {
  constructor(option) {
    if (!option.id || !option.imgUrl || !option.width || !option.height) {
      return new Error("option不全");
    }
    let initOption = {
      limitNum: 200
    };
    for (const key in option) {
      initOption[key] = option[key];
    }
    this.option = initOption;
    this.step = option.limitNum;
    this.init(initOption);
  }
  init(option) {
    var wrap = document.getElementById(option.id);
    var canvas = (this.canvas = document.createElement("canvas"));
    canvas.className = "canvas-puzzle";
    canvas.width = option.width;
    canvas.height = option.height;
    wrap.appendChild(canvas);
    this.ctx = canvas.getContext("2d");
    var image = (this.image = new Image());
    this.option = option;
    this.arr = [];
    this.indexArr = [];
    this.initArr = [];
    this.initIndex = [];
    this.Row = 3; /* 行 */
    this.Column = 3; /* 列 */
    this.IWidth;
    this.IHeight;
    this.PerCol;
    this.PerRow;
    this.CWidth = canvas.width;
    this.CHeight = canvas.height;
    this.block = 8;
    this.isFinish = false;

    image.onload = () => {
      this.IWidth = image.width;
      this.IHeight = image.height;
      for (var i = 0; i < this.Row; i++) {
        for (var j = 0; j < this.Column; j++) {
          this.arr.push([j, i]);
          this.initIndex.push(j + i * this.Row);
        }
      }
      this.initArr = JSON.parse(JSON.stringify(this.arr));
      this.PerCol = this.IWidth / this.Column;
      this.PerRow = this.IHeight / this.Row;
      this.upset();
      this.getIndexArr();
      this.render();
    };
    image.src = option.imgUrl;
    canvas.addEventListener("click", e => {
      if (this.isFinish) return;
      var ex = e.clientX,
        ey = e.clientY,
        rect = canvas.getBoundingClientRect(),
        tx = ex - rect.left - document.documentElement.clientLeft,
        ty = ey - rect.top - document.documentElement.clientTop;
      tx = (tx * canvas.width) / rect.width;
      ty = (ty * canvas.height) / rect.height;
      var clickIndex = this.getIndex(tx, ty);
      var blanckIndex = this.indexArr.indexOf(this.arr.length - 1);
      var click = this.initArr[clickIndex];
      var blank = this.initArr[blanckIndex];
      var dis = this.distance(click, blank);
      if (dis == 1) {
        if (this.step == 0) {
          return;
        }
        this.swapArr(clickIndex, blanckIndex);
        this.getIndexArr();
        this.render();
        this.step -= 1;
        option.every && option.every(this.step);
        if (this.indexArr.join("") == this.initIndex.join("")) {
          option.success && option.success();
        } else {
          if (this.step <= 0) {
            option.fail && option.fail();
          }
        }
      }
    });
  }
  getIndex(x, y) {
    var Y = Math.floor(y / (this.CHeight / this.Row));
    var X = Math.floor(x / (this.CWidth / this.Column));
    var len = X + Y * this.Row;
    return len;
  }
  getIndexArr() {
    var Iarr = [];
    for (var i = 0; i < this.arr.length; i++) {
      Iarr.push(this.arr[i][0] + this.arr[i][1] * this.Row);
    }
    this.indexArr = Iarr;
    if (this.indexArr.join("") == this.initIndex.join("")) {
      this.isFinish = true;
    } else {
      this.isFinish = false;
    }
  }
  swapArr(index1, index2) {
    this.block = index1;
    this.arr[index1] = this.arr.splice(index2, 1, this.arr[index1])[0];
  }
  distance(click, blank) {
    return Math.abs(click[0] - blank[0]) + Math.abs(click[1] - blank[1]);
  }
  upset() {
    this.arr.sort(function() {
      return Math.random() - 0.5;
    });
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i][0] == 2 && this.arr[i][1] == 2) {
        this.block = i;
      }
    }
  }
  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    /* 解决部分安卓机 无法清除画板 导致重叠问题 */
    this.canvas.style.display = "none";
    this.canvas.offsetHeight;
    this.canvas.style.display = "inherit";
    // console.log(this.arr);
    for (var i = 0; i < this.arr.length; i++) {
      var element = this.arr[i];
      var iRow = Math.ceil((i + 1) / this.Row) - 1;
      var iCol = i % this.Row;
      if (this.block == i && !this.isFinish) {
        this.ctx.globalAlpha = 0;
        this.ctx.beginPath();
      } else {
        this.ctx.globalAlpha = 1;
      }
      this.ctx.drawImage(
        this.image,
        this.PerCol * element[0],
        this.PerRow * element[1],
        this.IWidth / this.Column,
        this.IHeight / this.Row,
        (this.CWidth / this.Column) * iCol,
        (this.CHeight / this.Row) * iRow,
        this.CWidth / this.Column,
        this.CHeight / this.Row
      );
      if (this.block == i && !this.isFinish) {
        this.ctx.closePath();
        this.ctx.save();
      }
    }
  }
  recovery() {
    this.upset();
    this.getIndexArr();
    this.render();
    this.step = this.option.limitNum;
  }
  vip() {
    this.isFinish = true;
    this.arr = JSON.parse(JSON.stringify(this.initArr));
    this.render();
    this.option.success && this.option.success();
  }
}
/* harmony default export */ var src_Puzzle = (Puzzle);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./package/puzzle/src/main.vue?vue&type=script&lang=js&
//
//
//


/* harmony default export */ var puzzle_src_mainvue_type_script_lang_js_ = ({
  name: "puzzle",
  props: {
    imgUrl: {
      required: true,
      type: String
    },
    width: {
      required: true,
      type: String
    },
    height: {
      required: true,
      type: String
    },
    limitNum: {
      required: true,
      default: 200
    }
  },
  data() {
    return {
      instance: null
    };
  },
  mounted() {
    this.instance = new src_Puzzle({
      id: "puzzle",
      width: this.width,
      height: this.height,
      imgUrl: this.imgUrl,
      limitNum: this.limitNum,
      every: step => {
        this.everyHandler(step);
      },
      success: () => {
        this.successHandler();
      },
      fail: () => {
        this.failHandler();
        this.instance.recovery();
      }
    });
  },
  methods: {
    everyHandler(step) {
      this.$emit("every", step);
    },
    successHandler() {
      this.$emit("success");
    },
    failHandler() {
      this.$emit("fail");
    }
  }
});

// CONCATENATED MODULE: ./package/puzzle/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var package_puzzle_src_mainvue_type_script_lang_js_ = (puzzle_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./package/puzzle/src/main.vue





/* normalize component */

var main_component = normalizeComponent(
  package_puzzle_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_3f65a052_render,
  mainvue_type_template_id_3f65a052_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_main = (main_component.exports);
// CONCATENATED MODULE: ./package/puzzle/index.js


/* istanbul ignore next */
src_main.install = function(Vue) {
  Vue.component(src_main.name, src_main);
};

/* harmony default export */ var puzzle = (src_main);

// CONCATENATED MODULE: ./package/index.js



// 所有组件列表
const components = [toast, puzzle];
// 定义 install 方法，接收 Vue 作为参数
const install = function(Vue) {
  // 判断是否安装，安装过就不继续往下执行
  if (install.installed) return;
  install.installed = true;
  // 遍历注册所有组件
  components.map(component => Vue.component(component.name, component));
  // 下面这个写法也可以
  // components.map(component => Vue.use(component))
};

// 检测到 Vue 才执行，毕竟我们是基于 Vue 的
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var package_0 = ({
  install,
  // 所有组件，必须具有 install，才能使用 Vue.use()
  ...components
});

// CONCATENATED MODULE: G:/tool/nui/nui/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (package_0);



/***/ })

/******/ });
//# sourceMappingURL=nui.common.js.map