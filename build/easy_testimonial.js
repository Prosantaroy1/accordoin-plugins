/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/form/EasyTestimonialTabs.js":
/*!*****************************************!*\
  !*** ./src/form/EasyTestimonialTabs.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EasyTestimonialTabs: () => (/* binding */ EasyTestimonialTabs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tabs_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.scss */ "./src/form/tabs.scss");
/* harmony import */ var _Testimonial_BacisTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Testimonial/BacisTheme */ "./src/form/Testimonial/BacisTheme.jsx");




const EasyTestimonialTabs = () => {
  const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("basic");
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tabs-row"
  }, ['basic', 'setting', 'advance', 'get'].map(tab => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    key: tab,
    className: activeTab === tab ? "tab active" : "tab",
    onClick: () => setActiveTab(tab)
  }, tab.charAt(0).toUpperCase() + tab.slice(1)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-content"
  }, activeTab === "basic" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-panel"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Basic Section"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "\u098F\u0996\u09BE\u09A8\u09C7 \u09B6\u09C1\u09A7\u09C1 title \u098F\u09AC\u0982 description \u09A6\u09C7\u0996\u09BE\u09AC\u09C7\u0964 (Static \u09AC\u09BE read-only content \u09B0\u09BE\u0996\u09A4\u09C7 \u09AA\u09BE\u09B0\u09CB\u0964)"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Testimonial_BacisTheme__WEBPACK_IMPORTED_MODULE_2__["default"], null)), activeTab === "setting" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-panel"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Settings"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    className: "custom-form"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "form-group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Title"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    placeholder: "Enter title"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "form-group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Description"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    placeholder: "Enter description"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "submit",
    className: "submit-btn"
  }, "Save"))), activeTab === "advance" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-panel"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Advance Options"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox"
  }), " Enable Dark Mode"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox"
  }), " Show Extra Features")), activeTab === "get" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-panel price-cards"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Get Price"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "\u0986\u09AE\u09BE\u09B0 \u09AA\u09CD\u09B0\u09BE\u0987\u09B8 \u09B2\u09BF\u09B8\u09CD\u099F:"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cards-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "price-card"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Basic Plan"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "$10"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "btn-select"
  }, "Select")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "price-card"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Pro Plan"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "$20"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "btn-select"
  }, "Select")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "price-card"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Enterprise"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "$50"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "btn-select"
  }, "Select"))))));
};

/***/ }),

/***/ "./src/form/Testimonial/BacisTheme.jsx":
/*!*********************************************!*\
  !*** ./src/form/Testimonial/BacisTheme.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const BacisTheme = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Demo Theme"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIuhy6KYq-YXUxwP_wlFgrRrTW3YJj1v26Lw&s"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BacisTheme);

/***/ }),

/***/ "./src/form/Testimonial/TestimonialMenu.jsx":
/*!**************************************************!*\
  !*** ./src/form/Testimonial/TestimonialMenu.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TestimonialMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EasyTestimonialTabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../EasyTestimonialTabs */ "./src/form/EasyTestimonialTabs.js");


function TestimonialMenu() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "testimonial_menu_wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "title"
  }, "Admin DashBoard"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_EasyTestimonialTabs__WEBPACK_IMPORTED_MODULE_1__.EasyTestimonialTabs, null));
}

/***/ }),

/***/ "./src/form/tabs.scss":
/*!****************************!*\
  !*** ./src/form/tabs.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./src/form/easy_testimonal.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _Testimonial_TestimonialMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Testimonial/TestimonialMenu */ "./src/form/Testimonial/TestimonialMenu.jsx");



document.addEventListener('DOMContentLoaded', () => {
  const rootId = document.getElementById('easy-testimonial-app');
  const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(rootId);
  root.render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Testimonial_TestimonialMenu__WEBPACK_IMPORTED_MODULE_2__["default"], null));
});
/******/ })()
;
//# sourceMappingURL=easy_testimonial.js.map