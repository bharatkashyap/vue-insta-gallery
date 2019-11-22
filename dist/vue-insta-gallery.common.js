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
/******/ 	return __webpack_require__(__webpack_require__.s = "9be4");
/******/ })
/************************************************************************/
/******/ ({

/***/ "2ec1":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "41f5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _src_component_vue_insta_gallery_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a8b6");


function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("vueInstaGallery", _src_component_vue_insta_gallery_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
}

var plugin = {
  install: install
};
var GlobalVue = null;

if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

_src_component_vue_insta_gallery_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].install = install;
/* harmony default export */ __webpack_exports__["a"] = (_src_component_vue_insta_gallery_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("2ec1")))

/***/ }),

/***/ "8043":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _usr_local_lib_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_usr_local_lib_node_modules_vue_cli_service_global_node_modules_css_loader_index_js_ref_6_oneOf_1_1_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_usr_local_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_insta_gallery_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a9ba");
/* harmony import */ var _usr_local_lib_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_usr_local_lib_node_modules_vue_cli_service_global_node_modules_css_loader_index_js_ref_6_oneOf_1_1_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_usr_local_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_insta_gallery_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_local_lib_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_usr_local_lib_node_modules_vue_cli_service_global_node_modules_css_loader_index_js_ref_6_oneOf_1_1_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_usr_local_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_insta_gallery_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_usr_local_lib_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_usr_local_lib_node_modules_vue_cli_service_global_node_modules_css_loader_index_js_ref_6_oneOf_1_1_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_usr_local_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_usr_local_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_insta_gallery_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9be4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./index.js
var index = __webpack_require__("41f5");

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (index["a" /* default */]);



/***/ }),

/***/ "a8b6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca0e2238-vue-loader-template"}!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/component/vue-insta-gallery.vue?vue&type=template&id=6e96110b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{ref:"imageGallery",attrs:{"tabindex":"-1","id":"post-image-gallery"},on:{"&scroll":function($event){return _vm.handleGalleryScroll($event)}}},[_c('span',{attrs:{"id":"gallery-count"}},[_vm._v(_vm._s(_vm.selectedImageIndex+1)+" of "+_vm._s(_vm.pics.length))]),_vm._l((_vm.pics),function(pic,index){return _c('div',{key:index,ref:pic,refInFor:true,staticClass:"flex-equal mt-1",attrs:{"id":"post-image"}},[_c('div',{staticClass:"image text-center"},[_c('img',{attrs:{"src":pic}})])])})],2),_c('div',{staticClass:"d-flex flex-row justify-content-center",attrs:{"id":"post-image-slider-wrap"}},_vm._l((_vm.pics),function(pic,index){return _c('div',{key:index,staticClass:"slider-dot cursor-pointer",class:{selectedDot: _vm.isImageSelected(index)},on:{"click":function($event){_vm.postImageScrollIntoView(pic)}}})}),0),_vm._m(0)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"d-none d-lg-flex justify-content-center"},[_c('span',[_c('kbd',[_vm._v("←")]),_vm._v(" "),_c('kbd',[_vm._v("→")]),_c('span',{staticClass:"text-monospace align-bottom text-muted"},[_vm._v("to navigate")])])])}]


// CONCATENATED MODULE: ./src/component/vue-insta-gallery.vue?vue&type=template&id=6e96110b&

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__("ab8b");

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/component/vue-insta-gallery.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vue_insta_galleryvue_type_script_lang_js_ = ({
  name: "vueInstaGallery",
  props: {
    pics: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      selectedImageIndex: 0,
      viewport: {
        width: 0,
        height: 0
      }
    };
  },
  methods: {
    captureViewport: function captureViewport() {
      this.viewport.width = screen.availWidth;
      this.viewport.height = screen.availHeight;
    },
    captureDevicePixelRatio: function captureDevicePixelRatio() {
      this.devicePixelRatio = window.devicePixelRatio;
    },
    handleResize: function handleResize() {
      this.captureViewport();
      this.captureDevicePixelRatio();
    },
    isImageSelected: function isImageSelected(index) {
      if (index == this.selectedImageIndex) return true;
    },
    handleGalleryScroll: function handleGalleryScroll($event) {
      this.selectedImageIndex = parseInt($event.target.scrollLeft / (this.devicePixelRatio * this.viewport.width));
    },
    visibilityChanged: function visibilityChanged(isVisible) {
      if (isVisible && this.viewport.width > 992) {
        this.$refs.imageGallery.focus({
          preventScroll: true
        });
      }
    },
    postImageScrollIntoView: function postImageScrollIntoView(url) {
      var imageDiv = this.$refs[url][0]; // Setting refs inside v-for causes each Node to be placed inside an array

      imageDiv.scrollIntoView();
    }
  },
  mounted: function mounted() {
    this.captureViewport();
    this.captureDevicePixelRatio();
    window.addEventListener("resize", this.handleResize);
  },
  destroyed: function destroyed() {
    window.removeEventListener("resize", this.handleResize);
  }
});
// CONCATENATED MODULE: ./src/component/vue-insta-gallery.vue?vue&type=script&lang=js&
 /* harmony default export */ var component_vue_insta_galleryvue_type_script_lang_js_ = (vue_insta_galleryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/component/vue-insta-gallery.vue?vue&type=style&index=0&lang=css&
var vue_insta_galleryvue_type_style_index_0_lang_css_ = __webpack_require__("8043");

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/runtime/componentNormalizer.js
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

// CONCATENATED MODULE: ./src/component/vue-insta-gallery.vue






/* normalize component */

var component = normalizeComponent(
  component_vue_insta_galleryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "vue-insta-gallery.vue"
/* harmony default export */ var vue_insta_gallery = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "a9ba":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ab8b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=vue-insta-gallery.common.js.map