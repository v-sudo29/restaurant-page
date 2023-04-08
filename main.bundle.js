/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Global declarations */\n:root {\n  box-sizing: border-box;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n  font-family: 'Roboto';\n  color: #27272a;\n}\n\n/* Body */\nbody {\n  min-height: 100vh;\n  min-width: 100vw;\n  margin: 0;\n  padding: 0;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n}\n\n/* Header */\n.header-div {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  padding: 2rem 6rem;\n  min-height: 10vh;\n  background-color: #f4f4f5;\n}\n\n/* Title */\n.header-title-div {\n  display: flex;\n  gap: 0.6rem;\n  align-items: center;\n}\n\n.header-title {\n  font-size: 2rem;\n  font-weight: 400;\n  text-align: center;\n}\n\n.logo-icon-div > img {\n  height: 1.5rem;\n}\n\n/* Nav Links */\n.header-links-div {\n  min-height: 2rem;\n  display: flex;\n  gap: 2rem;\n}\n\n.header-links-div > button {\n  border: none;\n  cursor: pointer;\n  background-color: #f4f4f5;\n  font-size: 1.3rem;\n  font-weight: 100;\n}\n\n/* Phone number */\n.phone-number-div {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.phone-icon-div > img {\n  height: 1.6rem;\n}\n\n.phone-number {\n  font-size: 1.2rem;\n  font-weight: 100;\n  text-align: center;\n}\n\n/* Home Content */\n.hero-content-div {\n  max-height: 80vh;\n  display: flex;\n  justify-content: center;\n  padding: 6rem;\n  gap: 6rem;\n  background: linear-gradient(\n    to top,\n    #27272a 0%,\n    #27272a 40%,\n    #f4f4f5 0%,\n    #f4f4f5 100%\n    );\n}\n\n.hero-text-div {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  padding: 1rem;\n  max-width: 40rem;\n}\n\n.hero-text {\n  font-size: 4.3rem;\n  font-weight: 400;\n}\n\n.supporting-text {\n  font-size: 1.2rem;\n  font-weight: 200;\n  line-height: 2rem;\n  max-width: 27rem;\n}\n\n/* CTA Buttons */\n.home-buttons-div {\n  display: flex;\n  gap: 2rem;\n}\n\n.home-buttons-div > button {\n  cursor: pointer;\n  border: none;\n  font-size: 1rem;\n  font-weight: 400;\n}\n\n.home-order-button {\n  padding: 0.5rem 1.5rem;\n  background-color: #27272a;\n  color:#f4f4f5;\n  box-shadow: 2px 5px 8px rgba(0, 0, 0, 0.4);\n}\n\n.home-order-button:hover {\n  opacity: 0.9;\n}\n\n.home-menu-button {\n  padding: 0.5rem 2rem;\n  background-color: #f4f4f5;\n  text-decoration: underline;\n  text-decoration-color:#bababa;\n}\n\n.home-menu-button:hover {\n  opacity: 0.6;\n}\n\n/* Stats */\n.stats-supporting-text, .stats * {\n  color:#f4f4f5;\n}\n\n.stats-supporting-text {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n\n.stats-supporting-text {\n  color:#606060;\n  font-size: 1.2xrem;\n  font-weight: 500;\n}\n\n.stats {\n  flex: 1;\n  display: flex;\n  gap: 3rem\n}\n\n.stats-one, \n.stats-two, \n.stats-three {\n  font-size: 2.5rem;\n  font-weight: 400;\n}\n\n.stats-one-supporting, \n.stats-two-supporting,\n.stats-three-supporting {\n  font-size: 1rem;\n  font-weight: 100;\n}\n/* Hero Image */\n.hero-image-div {\n  height: 40.75rem;\n  border: double 0.4rem transparent;\n  border-radius: 0.6rem;\n  background-image: linear-gradient(45deg, rgb(194, 194, 194), rgb(29, 17, 10)),\n                    linear-gradient(45deg, rgb(194, 194, 194), rgb(29, 17, 10));\n  background-origin: border-box;\n  background-clip: content-box, border-box;\n}\n\n.hero-image-div > img {\n  height: 40rem;\n  border-radius: 0.4rem;\n}\n\n/* Menu */\n.menu-div {\n  min-height: 80vh;\n  background-color: #f4f4f5;\n}\n\n.menu-title {\n  text-align: center;\n  font-size: 3.5rem;\n  font-weight: 500;\n  padding: 2rem;\n}\n\n.items-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  justify-content: center;\n  padding: 5rem 20rem;\n}\n\n.menu-item > img {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  border-radius: 15px;\n}\n\n.menu-text {\n  text-align: center;\n  font-size: 1.5rem;\n  font-weight: 300;\n  padding: 0.5rem;\n}\n\n/* Contact */\n.contact-div {\n  min-height: 80vh;\n  background-color: #f4f4f5;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  padding: 2rem 40rem;\n}\n\n.contact-title {\n  font-size: 3rem;\n  font-weight: 500;\n  min-width: 400px;\n  max-width: 1000px;\n}\n\n.contact-text-div {\n  min-height: 40vh;\n  min-width: 400px;\n  max-width: 1000px;\n  display: flex;\n  flex-direction: column;\n  padding: 5rem;\n  gap: 0.5rem;\n  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.2);\n}\n\n.contact-phone-number,\n.contact-email { \n  font-size: 1.5rem;\n}\n\n.contact-phone-number {\n  font-weight: 700;\n}\n\n/* Footer */\n.footer-div {\n  min-height: 10vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n  background-color:#27272a;\n}\n\n.footer-text {\n  color: #f4f4f5;\n  font-size: 1.1rem;\n  font-weight: 400;\n  word-spacing: 0.1rem;\n}\n\n.footer-logo > a > img {\n  width: 1.4rem;\n}\n\n.footer-logo > a > img:hover {\n  opacity: 0.6;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');\n\n/* Global declarations */\n:root {\n  box-sizing: border-box;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n  font-family: 'Roboto';\n  color: #27272a;\n}\n\n/* Body */\nbody {\n  min-height: 100vh;\n  min-width: 100vw;\n  margin: 0;\n  padding: 0;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n}\n\n/* Header */\n.header-div {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  padding: 2rem 6rem;\n  min-height: 10vh;\n  background-color: #f4f4f5;\n}\n\n/* Title */\n.header-title-div {\n  display: flex;\n  gap: 0.6rem;\n  align-items: center;\n}\n\n.header-title {\n  font-size: 2rem;\n  font-weight: 400;\n  text-align: center;\n}\n\n.logo-icon-div > img {\n  height: 1.5rem;\n}\n\n/* Nav Links */\n.header-links-div {\n  min-height: 2rem;\n  display: flex;\n  gap: 2rem;\n}\n\n.header-links-div > button {\n  border: none;\n  cursor: pointer;\n  background-color: #f4f4f5;\n  font-size: 1.3rem;\n  font-weight: 100;\n}\n\n/* Phone number */\n.phone-number-div {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.phone-icon-div > img {\n  height: 1.6rem;\n}\n\n.phone-number {\n  font-size: 1.2rem;\n  font-weight: 100;\n  text-align: center;\n}\n\n/* Home Content */\n.hero-content-div {\n  max-height: 80vh;\n  display: flex;\n  justify-content: center;\n  padding: 6rem;\n  gap: 6rem;\n  background: linear-gradient(\n    to top,\n    #27272a 0%,\n    #27272a 40%,\n    #f4f4f5 0%,\n    #f4f4f5 100%\n    );\n}\n\n.hero-text-div {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  padding: 1rem;\n  max-width: 40rem;\n}\n\n.hero-text {\n  font-size: 4.3rem;\n  font-weight: 400;\n}\n\n.supporting-text {\n  font-size: 1.2rem;\n  font-weight: 200;\n  line-height: 2rem;\n  max-width: 27rem;\n}\n\n/* CTA Buttons */\n.home-buttons-div {\n  display: flex;\n  gap: 2rem;\n}\n\n.home-buttons-div > button {\n  cursor: pointer;\n  border: none;\n  font-size: 1rem;\n  font-weight: 400;\n}\n\n.home-order-button {\n  padding: 0.5rem 1.5rem;\n  background-color: #27272a;\n  color:#f4f4f5;\n  box-shadow: 2px 5px 8px rgba(0, 0, 0, 0.4);\n}\n\n.home-order-button:hover {\n  opacity: 0.9;\n}\n\n.home-menu-button {\n  padding: 0.5rem 2rem;\n  background-color: #f4f4f5;\n  text-decoration: underline;\n  text-decoration-color:#bababa;\n}\n\n.home-menu-button:hover {\n  opacity: 0.6;\n}\n\n/* Stats */\n.stats-supporting-text, .stats * {\n  color:#f4f4f5;\n}\n\n.stats-supporting-text {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n\n.stats-supporting-text {\n  color:#606060;\n  font-size: 1.2xrem;\n  font-weight: 500;\n}\n\n.stats {\n  flex: 1;\n  display: flex;\n  gap: 3rem\n}\n\n.stats-one, \n.stats-two, \n.stats-three {\n  font-size: 2.5rem;\n  font-weight: 400;\n}\n\n.stats-one-supporting, \n.stats-two-supporting,\n.stats-three-supporting {\n  font-size: 1rem;\n  font-weight: 100;\n}\n/* Hero Image */\n.hero-image-div {\n  height: 40.75rem;\n  border: double 0.4rem transparent;\n  border-radius: 0.6rem;\n  background-image: linear-gradient(45deg, rgb(194, 194, 194), rgb(29, 17, 10)),\n                    linear-gradient(45deg, rgb(194, 194, 194), rgb(29, 17, 10));\n  background-origin: border-box;\n  background-clip: content-box, border-box;\n}\n\n.hero-image-div > img {\n  height: 40rem;\n  border-radius: 0.4rem;\n}\n\n/* Menu */\n.menu-div {\n  min-height: 80vh;\n  background-color: #f4f4f5;\n}\n\n.menu-title {\n  text-align: center;\n  font-size: 3.5rem;\n  font-weight: 500;\n  padding: 2rem;\n}\n\n.items-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  justify-content: center;\n  padding: 5rem 20rem;\n}\n\n.menu-item > img {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  border-radius: 15px;\n}\n\n.menu-text {\n  text-align: center;\n  font-size: 1.5rem;\n  font-weight: 300;\n  padding: 0.5rem;\n}\n\n/* Contact */\n.contact-div {\n  min-height: 80vh;\n  background-color: #f4f4f5;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  padding: 2rem 40rem;\n}\n\n.contact-title {\n  font-size: 3rem;\n  font-weight: 500;\n  min-width: 400px;\n  max-width: 1000px;\n}\n\n.contact-text-div {\n  min-height: 40vh;\n  min-width: 400px;\n  max-width: 1000px;\n  display: flex;\n  flex-direction: column;\n  padding: 5rem;\n  gap: 0.5rem;\n  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.2);\n}\n\n.contact-phone-number,\n.contact-email { \n  font-size: 1.5rem;\n}\n\n.contact-phone-number {\n  font-weight: 700;\n}\n\n/* Footer */\n.footer-div {\n  min-height: 10vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n  background-color:#27272a;\n}\n\n.footer-text {\n  color: #f4f4f5;\n  font-size: 1.1rem;\n  font-weight: 400;\n  word-spacing: 0.1rem;\n}\n\n.footer-logo > a > img {\n  width: 1.4rem;\n}\n\n.footer-logo > a > img:hover {\n  opacity: 0.6;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactPage)
/* harmony export */ });
function contactPage() {
  const contentDiv = document.getElementById('content');

  // Create elements
  const contactDiv = document.createElement('div');
  const contactTitle = document.createElement('div');
  const contactTextDiv = document.createElement('div');
  const phoneNumber = document.createElement('div');
  const email = document.createElement('div');

  // Set attributes
  contactDiv.classList.add('contact-div');
  contactTitle.classList.add('contact-title');
  contactTextDiv.classList.add('contact-text-div');
  phoneNumber.classList.add('contact-phone-number');
  email.classList.add('contact-email');

  // Set inner HTML
  contactTitle.innerHTML = 'Contact';
  phoneNumber.innerHTML = '(415)-100-2000';
  email.innerHTML = 'info@dessertheaven.com';

  // Append elements
  contactTextDiv.appendChild(phoneNumber);
  contactTextDiv.appendChild(email);
  contactDiv.appendChild(contactTitle);
  contactDiv.appendChild(contactTextDiv);

  // Return appended element
  return contentDiv.appendChild(contactDiv);
}

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ footer)
/* harmony export */ });
/* harmony import */ var _github_mark_white_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./github-mark-white.svg */ "./src/github-mark-white.svg");


const githubLogo = new Image();
githubLogo.src = _github_mark_white_svg__WEBPACK_IMPORTED_MODULE_0__;
function footer() {
  const contentDiv = document.getElementById('content');

  // Create elements
  const footerDiv = document.createElement('footer');
  const footerText = document.createElement('div');
  const footerLogo = document.createElement('div');
  const ghLink = document.createElement('a');

  // Set attributes
  footerDiv.classList.add('footer-div');
  footerText.classList.add('footer-text');
  footerLogo.classList.add('footer-logo');
  ghLink.setAttribute('href', 'https://github.com/v-sudo29');
  
  // Append elements
  footerLogo.appendChild(ghLink);
  ghLink.appendChild(githubLogo);

  footerDiv.appendChild(footerText);
  footerDiv.appendChild(footerLogo);

  // Return appended footer
  return contentDiv.appendChild(footerDiv);
}

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageHeader)
/* harmony export */ });
/* harmony import */ var _phone_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone.svg */ "./src/phone.svg");
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.svg */ "./src/logo.svg");



// Inserts header function
function pageHeader() {

  // Select body content div
  const contentDiv = document.getElementById('content');

  // Create elements
  const headerDiv = document.createElement('div');
  const headerTitleDiv = document.createElement('div');
  const headerTitle = document.createElement('div');
  const headerNav = document.createElement('nav');
  const home = document.createElement('button');
  const menu = document.createElement('button');
  const contact = document.createElement('button');
  const phoneNumberDiv = document.createElement('div');
  const phoneIcon = document.createElement('div');
  const phoneNumber = document.createElement('div');
  const logoIconDiv = document.createElement('div');

  // Add icons
  const logoIconSource = new Image();
  const phoneIconSource = new Image();
  logoIconSource.src = _logo_svg__WEBPACK_IMPORTED_MODULE_1__;
  phoneIconSource.src = _phone_svg__WEBPACK_IMPORTED_MODULE_0__;

  // Add attributes
  headerDiv.classList.add('header-div');
  headerTitleDiv.classList.add('header-title-div');
  headerTitle.classList.add('header-title');
  headerNav.classList.add('header-links-div');
  home.classList.add('home');
  menu.classList.add('menu');
  contact.classList.add('contact');
  phoneNumberDiv.classList.add('phone-number-div');
  phoneNumber.classList.add('phone-number');
  phoneIcon.classList.add('phone-icon-div');
  logoIconDiv.classList.add('logo-icon-div');

  // Add inner HTML
  headerTitle.innerHTML = 'Dessert Heaven';
  home.innerHTML = 'Home';
  menu.innerHTML = 'Menu';
  contact.innerHTML = 'Contact';
  phoneNumber.innerHTML = '(415)-100-2000';

  // Append elements
  phoneIcon.appendChild(phoneIconSource);
  logoIconDiv.appendChild(logoIconSource);
  phoneNumberDiv.appendChild(phoneIcon);
  phoneNumberDiv.appendChild(phoneNumber);

  headerTitleDiv.appendChild(logoIconDiv);
  headerTitleDiv.appendChild(headerTitle);

  headerNav.appendChild(home);
  headerNav.appendChild(menu);
  headerNav.appendChild(contact);

  headerDiv.appendChild(headerTitleDiv);
  headerDiv.appendChild(headerNav);
  headerDiv.appendChild(phoneNumberDiv);

  // Return appended content div
  return contentDiv.appendChild(headerDiv);
}

/***/ }),

/***/ "./src/hero_content.js":
/*!*****************************!*\
  !*** ./src/hero_content.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ heroContent)
/* harmony export */ });
/* harmony import */ var _doughnut_hero_image_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doughnut_hero_image.jpeg */ "./src/doughnut_hero_image.jpeg");


function heroContent() {

  // Select body content div
  const contentDiv = document.getElementById('content');

  // Create elements
  const heroContentDiv = document.createElement('div');
  const heroTextDiv = document.createElement('div');
  const heroText = document.createElement('div');
  const supportingText = document.createElement('div');
  const buttonsDiv = document.createElement('div');
  const statsDiv = document.createElement('div');
  const statsSupportingText = document.createElement('div');
  const stats = document.createElement('div');
  const statsOneDiv = document.createElement('div');
  const statsTwoDiv = document.createElement('div');
  const statsThreeDiv = document.createElement('div');
  const statsOne = document.createElement('div');
  const statsTwo = document.createElement('div');
  const statsThree = document.createElement('div');
  const statsOneSupporting = document.createElement('div');
  const statsTwoSupporting = document.createElement('div');
  const statsThreeSupporting = document.createElement('div');
  const heroImageDiv = document.createElement('div');

  // Create buttons
  const orderNowBtn = document.createElement('button');
  const menuBtn = document.createElement('button');

  // Add hero image
  const heroImageSource = new Image();
  heroImageSource.src = _doughnut_hero_image_jpeg__WEBPACK_IMPORTED_MODULE_0__;

  // Add attributes
  heroContentDiv.classList.add('hero-content-div');
  heroTextDiv.classList.add('hero-text-div');
  heroText.classList.add('hero-text');
  buttonsDiv.classList.add('home-buttons-div');

  orderNowBtn.classList.add('home-order-button');
  menuBtn.classList.add('home-menu-button');

  statsDiv.classList.add('stats-div');
  statsSupportingText.classList.add('stats-supporting-text');
  stats.classList.add('stats');
  statsOneDiv.classList.add('stats-one-div');
  statsTwoDiv.classList.add('stats-two-div');
  statsThreeDiv.classList.add('stats-three-div');
  statsOne.classList.add('stats-one');
  statsTwo.classList.add('stats-two');
  statsThree.classList.add('stats-three');
  statsOneSupporting.classList.add('stats-one-supporting');
  statsTwoSupporting.classList.add('stats-two-supporting');
  statsThreeSupporting.classList.add('stats-three-supporting');

  supportingText.classList.add('supporting-text');
  heroImageDiv.classList.add('hero-image-div');

  // Add inner HTML
  heroText.innerHTML = 'Enjoy Your Favorite Desserts.';
  supportingText.innerHTML = 'Indulge in our world-famous, exquisite, handmade desserts for any occasion.';
  orderNowBtn.innerHTML = 'Order Online';
  menuBtn.innerHTML = 'Dessert Menu';
  statsSupportingText.innerHTML = 'Experience dessert heaven on earth';
  statsOne.innerHTML = '100k+';
  statsOneSupporting.innerHTML = 'Customers served';
  statsTwo.innerHTML = '5k+';
  statsTwoSupporting.innerHTML = 'Yelp reviews';
  statsThree.innerHTML = '50+';
  statsThreeSupporting.innerHTML = 'Locations';

  // Append elements
  buttonsDiv.appendChild(orderNowBtn);
  buttonsDiv.appendChild(menuBtn);

  statsOneDiv.appendChild(statsOne);
  statsOneDiv.appendChild(statsOneSupporting);
  statsTwoDiv.appendChild(statsTwo);
  statsTwoDiv.appendChild(statsTwoSupporting);
  statsThreeDiv.appendChild(statsThree);
  statsThreeDiv.appendChild(statsThreeSupporting);
  stats.appendChild(statsSupportingText);
  stats.appendChild(statsOneDiv);
  stats.appendChild(statsTwoDiv);
  stats.appendChild(statsThreeDiv);

  heroTextDiv.appendChild(heroText);
  heroTextDiv.appendChild(supportingText);
  heroTextDiv.appendChild(buttonsDiv);
  heroTextDiv.appendChild(statsSupportingText);
  heroTextDiv.appendChild(stats);
  
  heroImageDiv.appendChild(heroImageSource);

  heroContentDiv.appendChild(heroTextDiv);
  heroContentDiv.appendChild(heroImageDiv);

  // Return appended hero content
  return contentDiv.appendChild(heroContentDiv);
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageMenu)
/* harmony export */ });
/* harmony import */ var _donut_menu_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./donut_menu.jpeg */ "./src/donut_menu.jpeg");
/* harmony import */ var _raspberry_cake_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./raspberry_cake.jpeg */ "./src/raspberry_cake.jpeg");
/* harmony import */ var _cookies_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cookies.jpeg */ "./src/cookies.jpeg");




const donut = new Image();
const raspberry = new Image();
const cookies = new Image();

donut.src = _donut_menu_jpeg__WEBPACK_IMPORTED_MODULE_0__;
raspberry.src = _raspberry_cake_jpeg__WEBPACK_IMPORTED_MODULE_1__;
cookies.src = _cookies_jpeg__WEBPACK_IMPORTED_MODULE_2__;

function pageMenu() {
  const contentDiv = document.getElementById('content');

  // Create elements
  const menuDiv = document.createElement('div');
  const menuTitle = document.createElement('div');

  const itemsContainer = document.createElement('div');
  const menuItemDivOne = document.createElement('div');
  const menuItemDivTwo = document.createElement('div');
  const menuItemDivThree = document.createElement('div');
  const menuItemOne = document.createElement('div');
  const menuItemTwo = document.createElement('div');
  const menuItemThree = document.createElement('div');
  const menuTextOne = document.createElement('div');
  const menuTextTwo = document.createElement('div');
  const menuTextThree = document.createElement('div');

  // Set attributes
  menuDiv.classList.add('menu-div');
  menuTitle.classList.add('menu-title');

  itemsContainer.classList.add('items-container');
  menuItemDivOne.classList.add('menu-item-div');
  menuItemDivTwo.classList.add('menu-item-div');
  menuItemDivThree.classList.add('menu-item-div');
  menuItemOne.classList.add('menu-item', 'menu-item-one');
  menuItemTwo.classList.add('menu-item', 'menu-item-two');
  menuItemThree.classList.add('menu-item', 'menu-item-three');
  menuTextOne.classList.add('menu-text', 'menu-text-one');
  menuTextTwo.classList.add('menu-text', 'menu-text-two');
  menuTextThree.classList.add('menu-text', 'menu-text-three');

  // Add inner HTML
  menuTitle.innerHTML = 'Popular Items';
  menuTextOne.innerHTML = 'Donut';
  menuTextTwo.innerHTML = 'Raspberry Cake Slice';
  menuTextThree.innerHTML = 'Granny\'s Cookies';

  // Append elements
  menuItemOne.appendChild(donut);
  menuItemTwo.appendChild(raspberry);
  menuItemThree.appendChild(cookies);

  menuItemDivOne.appendChild(menuItemOne);
  menuItemDivTwo.appendChild(menuItemTwo);
  menuItemDivThree.appendChild(menuItemThree);

  menuItemDivOne.appendChild(menuTextOne);
  menuItemDivTwo.appendChild(menuTextTwo);
  menuItemDivThree.appendChild(menuTextThree);


  itemsContainer.appendChild(menuItemDivOne);
  itemsContainer.appendChild(menuItemDivTwo);
  itemsContainer.appendChild(menuItemDivThree);

  menuDiv.appendChild(menuTitle);
  menuDiv.appendChild(itemsContainer);

  // Return menu div
  return contentDiv.appendChild(menuDiv);
}

/***/ }),

/***/ "./src/cookies.jpeg":
/*!**************************!*\
  !*** ./src/cookies.jpeg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/cookies..jpeg";

/***/ }),

/***/ "./src/donut_menu.jpeg":
/*!*****************************!*\
  !*** ./src/donut_menu.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/donut_menu..jpeg";

/***/ }),

/***/ "./src/doughnut_hero_image.jpeg":
/*!**************************************!*\
  !*** ./src/doughnut_hero_image.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/doughnut_hero_image..jpeg";

/***/ }),

/***/ "./src/github-mark-white.svg":
/*!***********************************!*\
  !*** ./src/github-mark-white.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/github-mark-white..svg";

/***/ }),

/***/ "./src/logo.svg":
/*!**********************!*\
  !*** ./src/logo.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/logo..svg";

/***/ }),

/***/ "./src/phone.svg":
/*!***********************!*\
  !*** ./src/phone.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/phone..svg";

/***/ }),

/***/ "./src/raspberry_cake.jpeg":
/*!*********************************!*\
  !*** ./src/raspberry_cake.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/raspberry_cake..jpeg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");
/* harmony import */ var _hero_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero_content.js */ "./src/hero_content.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







// Append div content to body
const contentDiv = document.createElement('div');
contentDiv.setAttribute('id', 'content');
document.querySelector('body').appendChild(contentDiv);

// Page header
(0,_header_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

// Header buttons
const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
const contactButton = document.querySelector('.contact');

homeButton.addEventListener('click', () => {
  const currentContentDiv = document.getElementById('content');
  const contents = currentContentDiv.children[1];
  currentContentDiv.replaceChild((0,_hero_content_js__WEBPACK_IMPORTED_MODULE_2__["default"])(), contents);
});

menuButton.addEventListener('click', () => {
  const currentContentDiv = document.getElementById('content');
  const contents = currentContentDiv.children[1];
  currentContentDiv.replaceChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])(), contents);
});

contactButton.addEventListener('click', () => {
  const currentContentDiv = document.getElementById('content');
  const contents = currentContentDiv.children[1];
  currentContentDiv.replaceChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_4__["default"])(), contents);
});

// Initial page load
(0,_hero_content_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_footer_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

// Copyright date
const footerText = document.querySelector('.footer-text');
const currentYear = new Date().getFullYear();

footerText.innerHTML = `Copyright \u00A9 ${currentYear} v-sudo29`
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLFVBQVUsS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxPQUFPLFlBQVksYUFBYSxPQUFPLE9BQU8sVUFBVSxZQUFZLE1BQU0sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sT0FBTyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FB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QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG9EQUFRO0FBQ3pDLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHVEQUFXO0FBQzVDLENBQUM7O0FBRUQ7QUFDQSw0REFBUTtBQUNSLHNEQUFVOztBQUVWO0FBQ0E7QUFDQTs7QUFFQSwyQ0FBMkMsYUFBYSxTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVyb19jb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAxMDA7MzAwOzQwMDs1MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBHbG9iYWwgZGVjbGFyYXRpb25zICovXFxuOnJvb3Qge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIGNvbG9yOiAjMjcyNzJhO1xcbn1cXG5cXG4vKiBCb2R5ICovXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1pbi13aWR0aDogMTAwdnc7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuLmhlYWRlci1kaXYge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAycmVtO1xcbiAgcGFkZGluZzogMnJlbSA2cmVtO1xcbiAgbWluLWhlaWdodDogMTB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjU7XFxufVxcblxcbi8qIFRpdGxlICovXFxuLmhlYWRlci10aXRsZS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC42cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlci10aXRsZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubG9nby1pY29uLWRpdiA+IGltZyB7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuLyogTmF2IExpbmtzICovXFxuLmhlYWRlci1saW5rcy1kaXYge1xcbiAgbWluLWhlaWdodDogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5oZWFkZXItbGlua3MtZGl2ID4gYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjU7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcbi8qIFBob25lIG51bWJlciAqL1xcbi5waG9uZS1udW1iZXItZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnBob25lLWljb24tZGl2ID4gaW1nIHtcXG4gIGhlaWdodDogMS42cmVtO1xcbn1cXG5cXG4ucGhvbmUtbnVtYmVyIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogSG9tZSBDb250ZW50ICovXFxuLmhlcm8tY29udGVudC1kaXYge1xcbiAgbWF4LWhlaWdodDogODB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDZyZW07XFxuICBnYXA6IDZyZW07XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIHRvcCxcXG4gICAgIzI3MjcyYSAwJSxcXG4gICAgIzI3MjcyYSA0MCUsXFxuICAgICNmNGY0ZjUgMCUsXFxuICAgICNmNGY0ZjUgMTAwJVxcbiAgICApO1xcbn1cXG5cXG4uaGVyby10ZXh0LWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXgtd2lkdGg6IDQwcmVtO1xcbn1cXG5cXG4uaGVyby10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogNC4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLnN1cHBvcnRpbmctdGV4dCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBsaW5lLWhlaWdodDogMnJlbTtcXG4gIG1heC13aWR0aDogMjdyZW07XFxufVxcblxcbi8qIENUQSBCdXR0b25zICovXFxuLmhvbWUtYnV0dG9ucy1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLmhvbWUtYnV0dG9ucy1kaXYgPiBidXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmhvbWUtb3JkZXItYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzJhO1xcbiAgY29sb3I6I2Y0ZjRmNTtcXG4gIGJveC1zaGFkb3c6IDJweCA1cHggOHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuLmhvbWUtb3JkZXItYnV0dG9uOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuLmhvbWUtbWVudS1idXR0b24ge1xcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY1O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6I2JhYmFiYTtcXG59XFxuXFxuLmhvbWUtbWVudS1idXR0b246aG92ZXIge1xcbiAgb3BhY2l0eTogMC42O1xcbn1cXG5cXG4vKiBTdGF0cyAqL1xcbi5zdGF0cy1zdXBwb3J0aW5nLXRleHQsIC5zdGF0cyAqIHtcXG4gIGNvbG9yOiNmNGY0ZjU7XFxufVxcblxcbi5zdGF0cy1zdXBwb3J0aW5nLXRleHQge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnN0YXRzLXN1cHBvcnRpbmctdGV4dCB7XFxuICBjb2xvcjojNjA2MDYwO1xcbiAgZm9udC1zaXplOiAxLjJ4cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnN0YXRzIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAzcmVtXFxufVxcblxcbi5zdGF0cy1vbmUsIFxcbi5zdGF0cy10d28sIFxcbi5zdGF0cy10aHJlZSB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5zdGF0cy1vbmUtc3VwcG9ydGluZywgXFxuLnN0YXRzLXR3by1zdXBwb3J0aW5nLFxcbi5zdGF0cy10aHJlZS1zdXBwb3J0aW5nIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbi8qIEhlcm8gSW1hZ2UgKi9cXG4uaGVyby1pbWFnZS1kaXYge1xcbiAgaGVpZ2h0OiA0MC43NXJlbTtcXG4gIGJvcmRlcjogZG91YmxlIDAuNHJlbSB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDE5NCwgMTk0LCAxOTQpLCByZ2IoMjksIDE3LCAxMCkpLFxcbiAgICAgICAgICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMTk0LCAxOTQsIDE5NCksIHJnYigyOSwgMTcsIDEwKSk7XFxuICBiYWNrZ3JvdW5kLW9yaWdpbjogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3gsIGJvcmRlci1ib3g7XFxufVxcblxcbi5oZXJvLWltYWdlLWRpdiA+IGltZyB7XFxuICBoZWlnaHQ6IDQwcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbn1cXG5cXG4vKiBNZW51ICovXFxuLm1lbnUtZGl2IHtcXG4gIG1pbi1oZWlnaHQ6IDgwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY1O1xcbn1cXG5cXG4ubWVudS10aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDMuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4uaXRlbXMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG4gIGdhcDogMS41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cmVtIDIwcmVtO1xcbn1cXG5cXG4ubWVudS1pdGVtID4gaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4ubWVudS10ZXh0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLyogQ29udGFjdCAqL1xcbi5jb250YWN0LWRpdiB7XFxuICBtaW4taGVpZ2h0OiA4MHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbiAgcGFkZGluZzogMnJlbSA0MHJlbTtcXG59XFxuXFxuLmNvbnRhY3QtdGl0bGUge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG1pbi13aWR0aDogNDAwcHg7XFxuICBtYXgtd2lkdGg6IDEwMDBweDtcXG59XFxuXFxuLmNvbnRhY3QtdGV4dC1kaXYge1xcbiAgbWluLWhlaWdodDogNDB2aDtcXG4gIG1pbi13aWR0aDogNDAwcHg7XFxuICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogNXJlbTtcXG4gIGdhcDogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogMHB4IDVweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4uY29udGFjdC1waG9uZS1udW1iZXIsXFxuLmNvbnRhY3QtZW1haWwgeyBcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uY29udGFjdC1waG9uZS1udW1iZXIge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLyogRm9vdGVyICovXFxuLmZvb3Rlci1kaXYge1xcbiAgbWluLWhlaWdodDogMTB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IzI3MjcyYTtcXG59XFxuXFxuLmZvb3Rlci10ZXh0IHtcXG4gIGNvbG9yOiAjZjRmNGY1O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgd29yZC1zcGFjaW5nOiAwLjFyZW07XFxufVxcblxcbi5mb290ZXItbG9nbyA+IGEgPiBpbWcge1xcbiAgd2lkdGg6IDEuNHJlbTtcXG59XFxuXFxuLmZvb3Rlci1sb2dvID4gYSA+IGltZzpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjY7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUEsd0JBQXdCO0FBQ3hCO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBLFNBQVM7QUFDVDtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUEsV0FBVztBQUNYO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFFQSxVQUFVO0FBQ1Y7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSxjQUFjO0FBQ2Q7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFl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O0VBQ2pCLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMTAwOzMwMDs0MDA7NTAwOzcwMDs5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuLyogR2xvYmFsIGRlY2xhcmF0aW9ucyAqL1xcbjpyb290IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICBjb2xvcjogIzI3MjcyYTtcXG59XFxuXFxuLyogQm9keSAqL1xcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi8qIEhlYWRlciAqL1xcbi5oZWFkZXItZGl2IHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMnJlbTtcXG4gIHBhZGRpbmc6IDJyZW0gNnJlbTtcXG4gIG1pbi1oZWlnaHQ6IDEwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY1O1xcbn1cXG5cXG4vKiBUaXRsZSAqL1xcbi5oZWFkZXItdGl0bGUtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXItdGl0bGUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28taWNvbi1kaXYgPiBpbWcge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbi8qIE5hdiBMaW5rcyAqL1xcbi5oZWFkZXItbGlua3MtZGl2IHtcXG4gIG1pbi1oZWlnaHQ6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uaGVhZGVyLWxpbmtzLWRpdiA+IGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY1O1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5cXG4vKiBQaG9uZSBudW1iZXIgKi9cXG4ucGhvbmUtbnVtYmVyLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5waG9uZS1pY29uLWRpdiA+IGltZyB7XFxuICBoZWlnaHQ6IDEuNnJlbTtcXG59XFxuXFxuLnBob25lLW51bWJlciB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIEhvbWUgQ29udGVudCAqL1xcbi5oZXJvLWNvbnRlbnQtZGl2IHtcXG4gIG1heC1oZWlnaHQ6IDgwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiA2cmVtO1xcbiAgZ2FwOiA2cmVtO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICB0byB0b3AsXFxuICAgICMyNzI3MmEgMCUsXFxuICAgICMyNzI3MmEgNDAlLFxcbiAgICAjZjRmNGY1IDAlLFxcbiAgICAjZjRmNGY1IDEwMCVcXG4gICAgKTtcXG59XFxuXFxuLmhlcm8tdGV4dC1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWF4LXdpZHRoOiA0MHJlbTtcXG59XFxuXFxuLmhlcm8tdGV4dCB7XFxuICBmb250LXNpemU6IDQuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5zdXBwb3J0aW5nLXRleHQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICBtYXgtd2lkdGg6IDI3cmVtO1xcbn1cXG5cXG4vKiBDVEEgQnV0dG9ucyAqL1xcbi5ob21lLWJ1dHRvbnMtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5ob21lLWJ1dHRvbnMtZGl2ID4gYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5ob21lLW9yZGVyLWJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjcyYTtcXG4gIGNvbG9yOiNmNGY0ZjU7XFxuICBib3gtc2hhZG93OiAycHggNXB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi5ob21lLW9yZGVyLWJ1dHRvbjpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjk7XFxufVxcblxcbi5ob21lLW1lbnUtYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiNiYWJhYmE7XFxufVxcblxcbi5ob21lLW1lbnUtYnV0dG9uOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLyogU3RhdHMgKi9cXG4uc3RhdHMtc3VwcG9ydGluZy10ZXh0LCAuc3RhdHMgKiB7XFxuICBjb2xvcjojZjRmNGY1O1xcbn1cXG5cXG4uc3RhdHMtc3VwcG9ydGluZy10ZXh0IHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5zdGF0cy1zdXBwb3J0aW5nLXRleHQge1xcbiAgY29sb3I6IzYwNjA2MDtcXG4gIGZvbnQtc2l6ZTogMS4yeHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5zdGF0cyB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogM3JlbVxcbn1cXG5cXG4uc3RhdHMtb25lLCBcXG4uc3RhdHMtdHdvLCBcXG4uc3RhdHMtdGhyZWUge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uc3RhdHMtb25lLXN1cHBvcnRpbmcsIFxcbi5zdGF0cy10d28tc3VwcG9ydGluZyxcXG4uc3RhdHMtdGhyZWUtc3VwcG9ydGluZyB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogMTAwO1xcbn1cXG4vKiBIZXJvIEltYWdlICovXFxuLmhlcm8taW1hZ2UtZGl2IHtcXG4gIGhlaWdodDogNDAuNzVyZW07XFxuICBib3JkZXI6IGRvdWJsZSAwLjRyZW0gdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjZyZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigxOTQsIDE5NCwgMTk0KSwgcmdiKDI5LCAxNywgMTApKSxcXG4gICAgICAgICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDE5NCwgMTk0LCAxOTQpLCByZ2IoMjksIDE3LCAxMCkpO1xcbiAgYmFja2dyb3VuZC1vcmlnaW46IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94LCBib3JkZXItYm94O1xcbn1cXG5cXG4uaGVyby1pbWFnZS1kaXYgPiBpbWcge1xcbiAgaGVpZ2h0OiA0MHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG59XFxuXFxuLyogTWVudSAqL1xcbi5tZW51LWRpdiB7XFxuICBtaW4taGVpZ2h0OiA4MHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNTtcXG59XFxuXFxuLm1lbnUtdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzLjVyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLml0ZW1zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxuICBnYXA6IDEuNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogNXJlbSAyMHJlbTtcXG59XFxuXFxuLm1lbnUtaXRlbSA+IGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLm1lbnUtdGV4dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi8qIENvbnRhY3QgKi9cXG4uY29udGFjdC1kaXYge1xcbiAgbWluLWhlaWdodDogODB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG4gIHBhZGRpbmc6IDJyZW0gNDByZW07XFxufVxcblxcbi5jb250YWN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtaW4td2lkdGg6IDQwMHB4O1xcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxufVxcblxcbi5jb250YWN0LXRleHQtZGl2IHtcXG4gIG1pbi1oZWlnaHQ6IDQwdmg7XFxuICBtaW4td2lkdGg6IDQwMHB4O1xcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDVyZW07XFxuICBnYXA6IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6IDBweCA1cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLmNvbnRhY3QtcGhvbmUtbnVtYmVyLFxcbi5jb250YWN0LWVtYWlsIHsgXFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmNvbnRhY3QtcGhvbmUtbnVtYmVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi8qIEZvb3RlciAqL1xcbi5mb290ZXItZGl2IHtcXG4gIG1pbi1oZWlnaHQ6IDEwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiMyNzI3MmE7XFxufVxcblxcbi5mb290ZXItdGV4dCB7XFxuICBjb2xvcjogI2Y0ZjRmNTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHdvcmQtc3BhY2luZzogMC4xcmVtO1xcbn1cXG5cXG4uZm9vdGVyLWxvZ28gPiBhID4gaW1nIHtcXG4gIHdpZHRoOiAxLjRyZW07XFxufVxcblxcbi5mb290ZXItbG9nbyA+IGEgPiBpbWc6aG92ZXIge1xcbiAgb3BhY2l0eTogMC42O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdFBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIC8vIENyZWF0ZSBlbGVtZW50c1xuICBjb25zdCBjb250YWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjb250YWN0VGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIC8vIFNldCBhdHRyaWJ1dGVzXG4gIGNvbnRhY3REaXYuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1kaXYnKTtcbiAgY29udGFjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtdGl0bGUnKTtcbiAgY29udGFjdFRleHREaXYuY2xhc3NMaXN0LmFkZCgnY29udGFjdC10ZXh0LWRpdicpO1xuICBwaG9uZU51bWJlci5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXBob25lLW51bWJlcicpO1xuICBlbWFpbC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWVtYWlsJyk7XG5cbiAgLy8gU2V0IGlubmVyIEhUTUxcbiAgY29udGFjdFRpdGxlLmlubmVySFRNTCA9ICdDb250YWN0JztcbiAgcGhvbmVOdW1iZXIuaW5uZXJIVE1MID0gJyg0MTUpLTEwMC0yMDAwJztcbiAgZW1haWwuaW5uZXJIVE1MID0gJ2luZm9AZGVzc2VydGhlYXZlbi5jb20nO1xuXG4gIC8vIEFwcGVuZCBlbGVtZW50c1xuICBjb250YWN0VGV4dERpdi5hcHBlbmRDaGlsZChwaG9uZU51bWJlcik7XG4gIGNvbnRhY3RUZXh0RGl2LmFwcGVuZENoaWxkKGVtYWlsKTtcbiAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjb250YWN0VGl0bGUpO1xuICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNvbnRhY3RUZXh0RGl2KTtcblxuICAvLyBSZXR1cm4gYXBwZW5kZWQgZWxlbWVudFxuICByZXR1cm4gY29udGVudERpdi5hcHBlbmRDaGlsZChjb250YWN0RGl2KTtcbn0iLCJpbXBvcnQgZ2l0aHViU1ZHIGZyb20gJy4vZ2l0aHViLW1hcmstd2hpdGUuc3ZnJztcblxuY29uc3QgZ2l0aHViTG9nbyA9IG5ldyBJbWFnZSgpO1xuZ2l0aHViTG9nby5zcmMgPSBnaXRodWJTVkc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb290ZXIoKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIC8vIENyZWF0ZSBlbGVtZW50c1xuICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBmb290ZXJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGdoTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAvLyBTZXQgYXR0cmlidXRlc1xuICBmb290ZXJEaXYuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWRpdicpO1xuICBmb290ZXJUZXh0LmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci10ZXh0Jyk7XG4gIGZvb3RlckxvZ28uY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWxvZ28nKTtcbiAgZ2hMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL2dpdGh1Yi5jb20vdi1zdWRvMjknKTtcbiAgXG4gIC8vIEFwcGVuZCBlbGVtZW50c1xuICBmb290ZXJMb2dvLmFwcGVuZENoaWxkKGdoTGluayk7XG4gIGdoTGluay5hcHBlbmRDaGlsZChnaXRodWJMb2dvKTtcblxuICBmb290ZXJEaXYuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XG4gIGZvb3RlckRpdi5hcHBlbmRDaGlsZChmb290ZXJMb2dvKTtcblxuICAvLyBSZXR1cm4gYXBwZW5kZWQgZm9vdGVyXG4gIHJldHVybiBjb250ZW50RGl2LmFwcGVuZENoaWxkKGZvb3RlckRpdik7XG59IiwiaW1wb3J0IHBob25lU1ZHIGZyb20gJy4vcGhvbmUuc3ZnJztcbmltcG9ydCBsb2dvU1ZHIGZyb20gJy4vbG9nby5zdmcnO1xuXG4vLyBJbnNlcnRzIGhlYWRlciBmdW5jdGlvblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZUhlYWRlcigpIHtcblxuICAvLyBTZWxlY3QgYm9keSBjb250ZW50IGRpdlxuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAvLyBDcmVhdGUgZWxlbWVudHNcbiAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGhlYWRlclRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGhlYWRlck5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBwaG9uZU51bWJlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwaG9uZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbG9nb0ljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAvLyBBZGQgaWNvbnNcbiAgY29uc3QgbG9nb0ljb25Tb3VyY2UgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgcGhvbmVJY29uU291cmNlID0gbmV3IEltYWdlKCk7XG4gIGxvZ29JY29uU291cmNlLnNyYyA9IGxvZ29TVkc7XG4gIHBob25lSWNvblNvdXJjZS5zcmMgPSBwaG9uZVNWRztcblxuICAvLyBBZGQgYXR0cmlidXRlc1xuICBoZWFkZXJEaXYuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWRpdicpO1xuICBoZWFkZXJUaXRsZURpdi5jbGFzc0xpc3QuYWRkKCdoZWFkZXItdGl0bGUtZGl2Jyk7XG4gIGhlYWRlclRpdGxlLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci10aXRsZScpO1xuICBoZWFkZXJOYXYuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWxpbmtzLWRpdicpO1xuICBob21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuICBwaG9uZU51bWJlckRpdi5jbGFzc0xpc3QuYWRkKCdwaG9uZS1udW1iZXItZGl2Jyk7XG4gIHBob25lTnVtYmVyLmNsYXNzTGlzdC5hZGQoJ3Bob25lLW51bWJlcicpO1xuICBwaG9uZUljb24uY2xhc3NMaXN0LmFkZCgncGhvbmUtaWNvbi1kaXYnKTtcbiAgbG9nb0ljb25EaXYuY2xhc3NMaXN0LmFkZCgnbG9nby1pY29uLWRpdicpO1xuXG4gIC8vIEFkZCBpbm5lciBIVE1MXG4gIGhlYWRlclRpdGxlLmlubmVySFRNTCA9ICdEZXNzZXJ0IEhlYXZlbic7XG4gIGhvbWUuaW5uZXJIVE1MID0gJ0hvbWUnO1xuICBtZW51LmlubmVySFRNTCA9ICdNZW51JztcbiAgY29udGFjdC5pbm5lckhUTUwgPSAnQ29udGFjdCc7XG4gIHBob25lTnVtYmVyLmlubmVySFRNTCA9ICcoNDE1KS0xMDAtMjAwMCc7XG5cbiAgLy8gQXBwZW5kIGVsZW1lbnRzXG4gIHBob25lSWNvbi5hcHBlbmRDaGlsZChwaG9uZUljb25Tb3VyY2UpO1xuICBsb2dvSWNvbkRpdi5hcHBlbmRDaGlsZChsb2dvSWNvblNvdXJjZSk7XG4gIHBob25lTnVtYmVyRGl2LmFwcGVuZENoaWxkKHBob25lSWNvbik7XG4gIHBob25lTnVtYmVyRGl2LmFwcGVuZENoaWxkKHBob25lTnVtYmVyKTtcblxuICBoZWFkZXJUaXRsZURpdi5hcHBlbmRDaGlsZChsb2dvSWNvbkRpdik7XG4gIGhlYWRlclRpdGxlRGl2LmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcblxuICBoZWFkZXJOYXYuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gIGhlYWRlck5hdi5hcHBlbmRDaGlsZChtZW51KTtcbiAgaGVhZGVyTmF2LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuXG4gIGhlYWRlckRpdi5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZURpdik7XG4gIGhlYWRlckRpdi5hcHBlbmRDaGlsZChoZWFkZXJOYXYpO1xuICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQocGhvbmVOdW1iZXJEaXYpO1xuXG4gIC8vIFJldHVybiBhcHBlbmRlZCBjb250ZW50IGRpdlxuICByZXR1cm4gY29udGVudERpdi5hcHBlbmRDaGlsZChoZWFkZXJEaXYpO1xufSIsImltcG9ydCBoZXJvSW1hZ2UgZnJvbSAnLi9kb3VnaG51dF9oZXJvX2ltYWdlLmpwZWcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZXJvQ29udGVudCgpIHtcblxuICAvLyBTZWxlY3QgYm9keSBjb250ZW50IGRpdlxuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAvLyBDcmVhdGUgZWxlbWVudHNcbiAgY29uc3QgaGVyb0NvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaGVyb1RleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaGVyb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgc3VwcG9ydGluZ1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgYnV0dG9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBzdGF0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBzdGF0c1N1cHBvcnRpbmdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHN0YXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHN0YXRzT25lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHN0YXRzVHdvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHN0YXRzVGhyZWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgc3RhdHNPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgc3RhdHNUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgc3RhdHNUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBzdGF0c09uZVN1cHBvcnRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgc3RhdHNUd29TdXBwb3J0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHN0YXRzVGhyZWVTdXBwb3J0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGhlcm9JbWFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIC8vIENyZWF0ZSBidXR0b25zXG4gIGNvbnN0IG9yZGVyTm93QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAvLyBBZGQgaGVybyBpbWFnZVxuICBjb25zdCBoZXJvSW1hZ2VTb3VyY2UgPSBuZXcgSW1hZ2UoKTtcbiAgaGVyb0ltYWdlU291cmNlLnNyYyA9IGhlcm9JbWFnZTtcblxuICAvLyBBZGQgYXR0cmlidXRlc1xuICBoZXJvQ29udGVudERpdi5jbGFzc0xpc3QuYWRkKCdoZXJvLWNvbnRlbnQtZGl2Jyk7XG4gIGhlcm9UZXh0RGl2LmNsYXNzTGlzdC5hZGQoJ2hlcm8tdGV4dC1kaXYnKTtcbiAgaGVyb1RleHQuY2xhc3NMaXN0LmFkZCgnaGVyby10ZXh0Jyk7XG4gIGJ1dHRvbnNEaXYuY2xhc3NMaXN0LmFkZCgnaG9tZS1idXR0b25zLWRpdicpO1xuXG4gIG9yZGVyTm93QnRuLmNsYXNzTGlzdC5hZGQoJ2hvbWUtb3JkZXItYnV0dG9uJyk7XG4gIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnaG9tZS1tZW51LWJ1dHRvbicpO1xuXG4gIHN0YXRzRGl2LmNsYXNzTGlzdC5hZGQoJ3N0YXRzLWRpdicpO1xuICBzdGF0c1N1cHBvcnRpbmdUZXh0LmNsYXNzTGlzdC5hZGQoJ3N0YXRzLXN1cHBvcnRpbmctdGV4dCcpO1xuICBzdGF0cy5jbGFzc0xpc3QuYWRkKCdzdGF0cycpO1xuICBzdGF0c09uZURpdi5jbGFzc0xpc3QuYWRkKCdzdGF0cy1vbmUtZGl2Jyk7XG4gIHN0YXRzVHdvRGl2LmNsYXNzTGlzdC5hZGQoJ3N0YXRzLXR3by1kaXYnKTtcbiAgc3RhdHNUaHJlZURpdi5jbGFzc0xpc3QuYWRkKCdzdGF0cy10aHJlZS1kaXYnKTtcbiAgc3RhdHNPbmUuY2xhc3NMaXN0LmFkZCgnc3RhdHMtb25lJyk7XG4gIHN0YXRzVHdvLmNsYXNzTGlzdC5hZGQoJ3N0YXRzLXR3bycpO1xuICBzdGF0c1RocmVlLmNsYXNzTGlzdC5hZGQoJ3N0YXRzLXRocmVlJyk7XG4gIHN0YXRzT25lU3VwcG9ydGluZy5jbGFzc0xpc3QuYWRkKCdzdGF0cy1vbmUtc3VwcG9ydGluZycpO1xuICBzdGF0c1R3b1N1cHBvcnRpbmcuY2xhc3NMaXN0LmFkZCgnc3RhdHMtdHdvLXN1cHBvcnRpbmcnKTtcbiAgc3RhdHNUaHJlZVN1cHBvcnRpbmcuY2xhc3NMaXN0LmFkZCgnc3RhdHMtdGhyZWUtc3VwcG9ydGluZycpO1xuXG4gIHN1cHBvcnRpbmdUZXh0LmNsYXNzTGlzdC5hZGQoJ3N1cHBvcnRpbmctdGV4dCcpO1xuICBoZXJvSW1hZ2VEaXYuY2xhc3NMaXN0LmFkZCgnaGVyby1pbWFnZS1kaXYnKTtcblxuICAvLyBBZGQgaW5uZXIgSFRNTFxuICBoZXJvVGV4dC5pbm5lckhUTUwgPSAnRW5qb3kgWW91ciBGYXZvcml0ZSBEZXNzZXJ0cy4nO1xuICBzdXBwb3J0aW5nVGV4dC5pbm5lckhUTUwgPSAnSW5kdWxnZSBpbiBvdXIgd29ybGQtZmFtb3VzLCBleHF1aXNpdGUsIGhhbmRtYWRlIGRlc3NlcnRzIGZvciBhbnkgb2NjYXNpb24uJztcbiAgb3JkZXJOb3dCdG4uaW5uZXJIVE1MID0gJ09yZGVyIE9ubGluZSc7XG4gIG1lbnVCdG4uaW5uZXJIVE1MID0gJ0Rlc3NlcnQgTWVudSc7XG4gIHN0YXRzU3VwcG9ydGluZ1RleHQuaW5uZXJIVE1MID0gJ0V4cGVyaWVuY2UgZGVzc2VydCBoZWF2ZW4gb24gZWFydGgnO1xuICBzdGF0c09uZS5pbm5lckhUTUwgPSAnMTAwaysnO1xuICBzdGF0c09uZVN1cHBvcnRpbmcuaW5uZXJIVE1MID0gJ0N1c3RvbWVycyBzZXJ2ZWQnO1xuICBzdGF0c1R3by5pbm5lckhUTUwgPSAnNWsrJztcbiAgc3RhdHNUd29TdXBwb3J0aW5nLmlubmVySFRNTCA9ICdZZWxwIHJldmlld3MnO1xuICBzdGF0c1RocmVlLmlubmVySFRNTCA9ICc1MCsnO1xuICBzdGF0c1RocmVlU3VwcG9ydGluZy5pbm5lckhUTUwgPSAnTG9jYXRpb25zJztcblxuICAvLyBBcHBlbmQgZWxlbWVudHNcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChvcmRlck5vd0J0bik7XG4gIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG5cbiAgc3RhdHNPbmVEaXYuYXBwZW5kQ2hpbGQoc3RhdHNPbmUpO1xuICBzdGF0c09uZURpdi5hcHBlbmRDaGlsZChzdGF0c09uZVN1cHBvcnRpbmcpO1xuICBzdGF0c1R3b0Rpdi5hcHBlbmRDaGlsZChzdGF0c1R3byk7XG4gIHN0YXRzVHdvRGl2LmFwcGVuZENoaWxkKHN0YXRzVHdvU3VwcG9ydGluZyk7XG4gIHN0YXRzVGhyZWVEaXYuYXBwZW5kQ2hpbGQoc3RhdHNUaHJlZSk7XG4gIHN0YXRzVGhyZWVEaXYuYXBwZW5kQ2hpbGQoc3RhdHNUaHJlZVN1cHBvcnRpbmcpO1xuICBzdGF0cy5hcHBlbmRDaGlsZChzdGF0c1N1cHBvcnRpbmdUZXh0KTtcbiAgc3RhdHMuYXBwZW5kQ2hpbGQoc3RhdHNPbmVEaXYpO1xuICBzdGF0cy5hcHBlbmRDaGlsZChzdGF0c1R3b0Rpdik7XG4gIHN0YXRzLmFwcGVuZENoaWxkKHN0YXRzVGhyZWVEaXYpO1xuXG4gIGhlcm9UZXh0RGl2LmFwcGVuZENoaWxkKGhlcm9UZXh0KTtcbiAgaGVyb1RleHREaXYuYXBwZW5kQ2hpbGQoc3VwcG9ydGluZ1RleHQpO1xuICBoZXJvVGV4dERpdi5hcHBlbmRDaGlsZChidXR0b25zRGl2KTtcbiAgaGVyb1RleHREaXYuYXBwZW5kQ2hpbGQoc3RhdHNTdXBwb3J0aW5nVGV4dCk7XG4gIGhlcm9UZXh0RGl2LmFwcGVuZENoaWxkKHN0YXRzKTtcbiAgXG4gIGhlcm9JbWFnZURpdi5hcHBlbmRDaGlsZChoZXJvSW1hZ2VTb3VyY2UpO1xuXG4gIGhlcm9Db250ZW50RGl2LmFwcGVuZENoaWxkKGhlcm9UZXh0RGl2KTtcbiAgaGVyb0NvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVyb0ltYWdlRGl2KTtcblxuICAvLyBSZXR1cm4gYXBwZW5kZWQgaGVybyBjb250ZW50XG4gIHJldHVybiBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlcm9Db250ZW50RGl2KTtcbn0iLCJpbXBvcnQgZG9udXRKUEVHIGZyb20gJy4vZG9udXRfbWVudS5qcGVnJztcbmltcG9ydCByYXNwYmVycnlKUEVHIGZyb20gJy4vcmFzcGJlcnJ5X2Nha2UuanBlZyc7XG5pbXBvcnQgY29va2llc0pQRUcgZnJvbSAnLi9jb29raWVzLmpwZWcnO1xuXG5jb25zdCBkb251dCA9IG5ldyBJbWFnZSgpO1xuY29uc3QgcmFzcGJlcnJ5ID0gbmV3IEltYWdlKCk7XG5jb25zdCBjb29raWVzID0gbmV3IEltYWdlKCk7XG5cbmRvbnV0LnNyYyA9IGRvbnV0SlBFRztcbnJhc3BiZXJyeS5zcmMgPSByYXNwYmVycnlKUEVHO1xuY29va2llcy5zcmMgPSBjb29raWVzSlBFRztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZU1lbnUoKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIC8vIENyZWF0ZSBlbGVtZW50c1xuICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnN0IGl0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG1lbnVJdGVtRGl2T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG1lbnVJdGVtRGl2VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG1lbnVJdGVtRGl2VGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbWVudUl0ZW1PbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbWVudUl0ZW1Ud28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbWVudUl0ZW1UaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBtZW51VGV4dE9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBtZW51VGV4dFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBtZW51VGV4dFRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgLy8gU2V0IGF0dHJpYnV0ZXNcbiAgbWVudURpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWRpdicpO1xuICBtZW51VGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudS10aXRsZScpO1xuXG4gIGl0ZW1zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW1zLWNvbnRhaW5lcicpO1xuICBtZW51SXRlbURpdk9uZS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tZGl2Jyk7XG4gIG1lbnVJdGVtRGl2VHdvLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1kaXYnKTtcbiAgbWVudUl0ZW1EaXZUaHJlZS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tZGl2Jyk7XG4gIG1lbnVJdGVtT25lLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScsICdtZW51LWl0ZW0tb25lJyk7XG4gIG1lbnVJdGVtVHdvLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScsICdtZW51LWl0ZW0tdHdvJyk7XG4gIG1lbnVJdGVtVGhyZWUuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJywgJ21lbnUtaXRlbS10aHJlZScpO1xuICBtZW51VGV4dE9uZS5jbGFzc0xpc3QuYWRkKCdtZW51LXRleHQnLCAnbWVudS10ZXh0LW9uZScpO1xuICBtZW51VGV4dFR3by5jbGFzc0xpc3QuYWRkKCdtZW51LXRleHQnLCAnbWVudS10ZXh0LXR3bycpO1xuICBtZW51VGV4dFRocmVlLmNsYXNzTGlzdC5hZGQoJ21lbnUtdGV4dCcsICdtZW51LXRleHQtdGhyZWUnKTtcblxuICAvLyBBZGQgaW5uZXIgSFRNTFxuICBtZW51VGl0bGUuaW5uZXJIVE1MID0gJ1BvcHVsYXIgSXRlbXMnO1xuICBtZW51VGV4dE9uZS5pbm5lckhUTUwgPSAnRG9udXQnO1xuICBtZW51VGV4dFR3by5pbm5lckhUTUwgPSAnUmFzcGJlcnJ5IENha2UgU2xpY2UnO1xuICBtZW51VGV4dFRocmVlLmlubmVySFRNTCA9ICdHcmFubnlcXCdzIENvb2tpZXMnO1xuXG4gIC8vIEFwcGVuZCBlbGVtZW50c1xuICBtZW51SXRlbU9uZS5hcHBlbmRDaGlsZChkb251dCk7XG4gIG1lbnVJdGVtVHdvLmFwcGVuZENoaWxkKHJhc3BiZXJyeSk7XG4gIG1lbnVJdGVtVGhyZWUuYXBwZW5kQ2hpbGQoY29va2llcyk7XG5cbiAgbWVudUl0ZW1EaXZPbmUuYXBwZW5kQ2hpbGQobWVudUl0ZW1PbmUpO1xuICBtZW51SXRlbURpdlR3by5hcHBlbmRDaGlsZChtZW51SXRlbVR3byk7XG4gIG1lbnVJdGVtRGl2VGhyZWUuYXBwZW5kQ2hpbGQobWVudUl0ZW1UaHJlZSk7XG5cbiAgbWVudUl0ZW1EaXZPbmUuYXBwZW5kQ2hpbGQobWVudVRleHRPbmUpO1xuICBtZW51SXRlbURpdlR3by5hcHBlbmRDaGlsZChtZW51VGV4dFR3byk7XG4gIG1lbnVJdGVtRGl2VGhyZWUuYXBwZW5kQ2hpbGQobWVudVRleHRUaHJlZSk7XG5cblxuICBpdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbURpdk9uZSk7XG4gIGl0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtRGl2VHdvKTtcbiAgaXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW1EaXZUaHJlZSk7XG5cbiAgbWVudURpdi5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKGl0ZW1zQ29udGFpbmVyKTtcblxuICAvLyBSZXR1cm4gbWVudSBkaXZcbiAgcmV0dXJuIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWVudURpdik7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgcGFnZUhlYWRlciBmcm9tICcuL2hlYWRlci5qcyc7XG5pbXBvcnQgcGFnZUZvb3RlciBmcm9tICcuL2Zvb3Rlci5qcyc7XG5pbXBvcnQgcGFnZUhvbWUgZnJvbSAnLi9oZXJvX2NvbnRlbnQuanMnO1xuaW1wb3J0IHBhZ2VNZW51IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgcGFnZUNvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vLyBBcHBlbmQgZGl2IGNvbnRlbnQgdG8gYm9keVxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGVudERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcblxuLy8gUGFnZSBoZWFkZXJcbnBhZ2VIZWFkZXIoKTtcblxuLy8gSGVhZGVyIGJ1dHRvbnNcbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xuY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XG5jb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QnKTtcblxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgY3VycmVudENvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBjb250ZW50cyA9IGN1cnJlbnRDb250ZW50RGl2LmNoaWxkcmVuWzFdO1xuICBjdXJyZW50Q29udGVudERpdi5yZXBsYWNlQ2hpbGQocGFnZUhvbWUoKSwgY29udGVudHMpO1xufSk7XG5cbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRDb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgY29udGVudHMgPSBjdXJyZW50Q29udGVudERpdi5jaGlsZHJlblsxXTtcbiAgY3VycmVudENvbnRlbnREaXYucmVwbGFjZUNoaWxkKHBhZ2VNZW51KCksIGNvbnRlbnRzKTtcbn0pO1xuXG5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBjdXJyZW50Q29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IGNvbnRlbnRzID0gY3VycmVudENvbnRlbnREaXYuY2hpbGRyZW5bMV07XG4gIGN1cnJlbnRDb250ZW50RGl2LnJlcGxhY2VDaGlsZChwYWdlQ29udGFjdCgpLCBjb250ZW50cyk7XG59KTtcblxuLy8gSW5pdGlhbCBwYWdlIGxvYWRcbnBhZ2VIb21lKCk7XG5wYWdlRm9vdGVyKCk7XG5cbi8vIENvcHlyaWdodCBkYXRlXG5jb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3Rlci10ZXh0Jyk7XG5jb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcblxuZm9vdGVyVGV4dC5pbm5lckhUTUwgPSBgQ29weXJpZ2h0IFxcdTAwQTkgJHtjdXJyZW50WWVhcn0gdi1zdWRvMjlgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9