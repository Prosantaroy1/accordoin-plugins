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



const EasyTestimonialTabs = () => {
  const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("basic");
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tabs-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: activeTab === "basic" ? "tab active" : "tab",
    onClick: () => setActiveTab("basic")
  }, "Basic"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: activeTab === "setting" ? "tab active" : "tab",
    onClick: () => setActiveTab("setting")
  }, "Setting"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: activeTab === "advance" ? "tab active" : "tab",
    onClick: () => setActiveTab("advance")
  }, "Advance"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: activeTab === "get" ? "tab active" : "tab",
    onClick: () => setActiveTab("get")
  }, "Get")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-content"
  }, activeTab === "basic" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Basic Section"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "\u098F\u0996\u09BE\u09A8\u09C7 \u09B6\u09C1\u09A7\u09C1 title \u098F\u09AC\u0982 description \u09A6\u09C7\u0996\u09BE\u09AC\u09C7\u0964 (Static \u09AC\u09BE read-only content \u09B0\u09BE\u0996\u09A4\u09C7 \u09AA\u09BE\u09B0\u09CB\u0964)")), activeTab === "setting" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Settings"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Title:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    placeholder: "Enter title"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Description:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    placeholder: "Enter description"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "submit"
  }, "Save"))), activeTab === "advance" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Advance Options"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox"
  }), " Enable Dark Mode"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox"
  }), " Show Extra Features")), activeTab === "get" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Get Price"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "\u0986\u09AE\u09BE\u09B0 \u09AA\u09CD\u09B0\u09BE\u0987\u09B8 \u09B2\u09BF\u09B8\u09CD\u099F:"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Basic Plan \u2013 $10"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Pro Plan \u2013 $20"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Enterprise \u2013 $50")))));
};

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
/* harmony import */ var _EasyTestimonialTabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EasyTestimonialTabs */ "./src/form/EasyTestimonialTabs.js");




const EasyTestimonialApp = () => {
  const el = document.getElementById("easy-testimonial-app");
  const initialData = el?.dataset.saved ? JSON.parse(el.dataset.saved) : [];
  const [saved, setSaved] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialData);
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  //console.log(saved)

  // useEffect(() => {
  //     if (el) {
  //         el.removeAttribute("data-saved");
  //     }
  // }, [el]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!title.trim()) return alert("Title is empty!");
    const formData = new FormData();
    formData.append("action", "easy_testimonial_save");
    // eslint-disable-next-line no-undef
    formData.append("nonce", easy_testimonial_ajax.nonce);
    formData.append("title", title.trim());
    try {
      // eslint-disable-next-line no-undef
      const res = await fetch(easy_testimonial_ajax.ajax_url, {
        method: "POST",
        body: formData
      });
      const data = await res.json();
      if (data.success) {
        setSaved(data.data.saved_data);
        setTitle("");
      } else {
        alert(data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, "Easy Testimonial Settings"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    onSubmit: handleSubmit
  }, "Title:", " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    value: title,
    onChange: e => setTitle(e.target.value),
    required: true
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "submit"
  }, "Save")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginTop: "20px"
    }
  }, saved.length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Saved Titles:"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "10px",
      textAlign: "center"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    style: {
      border: "1px solid #ddd",
      padding: "8px",
      background: "#f4f4f4"
    }
  }, "#"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    style: {
      border: "1px solid #ddd",
      padding: "8px",
      background: "#f4f4f4"
    }
  }, "Title"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    style: {
      border: "1px solid #ddd",
      padding: "8px",
      background: "#f4f4f4"
    }
  }, "Time"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, saved.map((item, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    key: index
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    style: {
      border: "1px solid #ddd",
      padding: "8px"
    }
  }, index + 1), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    style: {
      border: "1px solid #ddd",
      padding: "8px"
    }
  }, item.title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    style: {
      border: "1px solid #ddd",
      padding: "8px"
    }
  }, item.time))))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_EasyTestimonialTabs__WEBPACK_IMPORTED_MODULE_2__.EasyTestimonialTabs, null));
};

// Render in admin
const container = document.getElementById("easy-testimonial-app");
if (container) {
  const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
  root.render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(EasyTestimonialApp, null));
}
/******/ })()
;
//# sourceMappingURL=easy_testimonial.js.map