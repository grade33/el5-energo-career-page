/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/scripts/vendor/SingleSelect.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _initStructure = /*#__PURE__*/new WeakSet();
var SingleSelect = /*#__PURE__*/function () {
  function SingleSelect(select) {
    var _this = this;
    _classCallCheck(this, SingleSelect);
    _classPrivateMethodInitSpec(this, _initStructure);
    this.rawSelect = select;
    this.select = null;
    this.head = null;
    this.body = null;
    this.optionsCol = [];
    this.headOption = null;
    _classPrivateMethodGet(this, _initStructure, _initStructure2).call(this);
    document.addEventListener('click', this.openClose.bind(this));
    this.optionsCol.forEach(function (optionBody) {
      optionBody.addEventListener('click', _this.change.bind(_this, optionBody));
    });
  }
  _createClass(SingleSelect, [{
    key: "openClose",
    value: function openClose(e) {
      if (!this.head.contains(e.target)) {
        if (this.select.classList.contains('is-open')) {
          this.select.classList.remove('is-open');
        }
        return;
      }
      this.select.classList.add('is-open');
    }
  }, {
    key: "change",
    value: function change(optionBody) {
      this.optionsCol.forEach(function (option) {
        if (!option.classList.contains('is-selected')) return;
        option.classList.remove('is-selected');
      });
      optionBody.classList.add('is-selected');
      var currentHeadOption = optionBody.cloneNode(true);
      currentHeadOption.classList.remove('select__option_body');
      currentHeadOption.classList.add('select__option_head');
      this.headOption.replaceWith(currentHeadOption);
      this.headOption = currentHeadOption;
    }
  }]);
  return SingleSelect;
}();
function _initStructure2() {
  var _this2 = this;
  this.select = document.createElement('div');
  this.select.className = this.rawSelect.className;
  this.head = document.createElement('div');
  this.head.classList.add('select__head');
  this.select.append(this.head);
  this.body = document.createElement('div');
  this.body.classList.add('select__body');
  this.select.append(this.body);
  this.optionsCol = Array.from(this.rawSelect.querySelectorAll('option')).map(function (_ref, idx) {
    var textContent = _ref.textContent,
      value = _ref.value;
    var optionEl = document.createElement('div');
    optionEl.classList.add('select__option', 'select__option_body');
    optionEl.textContent = textContent;
    optionEl.dataset.value = value;
    optionEl.dataset.id = idx + 1;
    _this2.body.append(optionEl);
    return optionEl;
  });
  var headOption = this.optionsCol[0].cloneNode(true);
  this.optionsCol[0].classList.add('is-selected');
  headOption.classList.remove('select__option_body');
  headOption.classList.add('select__option_head');
  this.headOption = headOption;
  this.head.append(this.headOption);
  this.rawSelect.replaceWith(this.select);
}
;// CONCATENATED MODULE: ./src/scripts/vendor/Select.js
function Select_typeof(obj) { "@babel/helpers - typeof"; return Select_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Select_typeof(obj); }
function Select_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Select_toPropertyKey(descriptor.key), descriptor); } }
function Select_createClass(Constructor, protoProps, staticProps) { if (protoProps) Select_defineProperties(Constructor.prototype, protoProps); if (staticProps) Select_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Select_toPropertyKey(arg) { var key = Select_toPrimitive(arg, "string"); return Select_typeof(key) === "symbol" ? key : String(key); }
function Select_toPrimitive(input, hint) { if (Select_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Select_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function Select_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Select = /*#__PURE__*/Select_createClass(function Select(selector) {
  var _this = this;
  Select_classCallCheck(this, Select);
  this.selects = [];
  document.querySelectorAll(selector).forEach(function (select) {
    _this.selects.push(new SingleSelect(select));
  });
});
;// CONCATENATED MODULE: ./src/scripts/app.js


// Select
new Select('.select'); // eslint-disable-line
/******/ })()
;