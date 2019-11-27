(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Dialog"] = factory(require("react"));
	else
		root["Dialog"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Input = __webpack_require__(1);

	module.exports = { Base: _Input.Base, formatThousandthNumber: _Input.formatThousandthNumber, FormatContainer: _Input.FormatContainer, Input: _Input.Input, NumericInput: _Input.NumericInput, InterInput: _Input.InterInput, PosInterInput: _Input.PosInterInput, LetterInput: _Input.LetterInput, ThousandInput: _Input.ThousandInput, InputContainer: _Input.InputContainer }; //使用module.exports时，从es6到es5生成的dist不会出现export.default的问题.
	/*
	 * Created with Visual Studio Code.
	 * github: https://github.com/React-Plugin/x-seed
	 * User: 田想兵
	 * Date: 2017-05-14
	 * Time: 20:00:00
	 * Contact: 55342775@qq.com
	 */

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ThousandInput = exports.LetterInput = exports.PosInterInput = exports.InterInput = exports.NumericInput = exports.InputContainer = exports.Input = exports.FormatContainer = exports.formatThousandthNumber = exports.Base = undefined;

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	} /*
	   * Created with Visual Studio Code.
	   * github: https://github.com/React-xui/x-input
	   * User: 田想兵
	   * Date: 2018-11-27
	   * Time: 20:00:00
	   * Contact: 55342775@qq.com
	   */

	//文本输入框
	var Base = function (_Component) {
	    _inherits(Base, _Component);

	    function Base(props) {
	        _classCallCheck(this, Base);

	        var _this = _possibleConstructorReturn(this, (Base.__proto__ || Object.getPrototypeOf(Base)).call(this, props));

	        _this.state = { value: typeof props.value === 'undefined' ? "" : props.value };
	        _this.onChangeHandle = _this.onChangeHandle.bind(_this);
	        return _this;
	    }

	    _createClass(Base, [{
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(newProps, newState) {
	            if (typeof newProps.value !== 'undefined' && newProps.value != this.state.value) {
	                this.setState({ value: newProps.value });
	            }
	        }
	    }, {
	        key: "onChangeHandle",
	        value: function onChangeHandle(e) {
	            var _this2 = this;

	            var value = e.target.value;
	            var target = e.target;

	            this.setState({ value: value }, function () {
	                _this2.props.onChange && _this2.props.onChange(target);
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var cls = (this.props.className || "") + ' x-input';
	            var newProps = _extends({}, this.props);
	            // delete newProps['className'];
	            delete newProps['decimals'];
	            delete newProps['onChange'];
	            delete newProps['returnType'];
	            delete newProps['negative'];
	            // delete newProps['value'];
	            var value = this.state.value;
	            (typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object' ? value = JSON.stringify(value) : null;
	            var multiple = newProps.multiple;

	            var props = _extends({ onChange: this.onChangeHandle }, newProps, { value: value });
	            var tag = multiple ? 'textarea' : 'input';
	            // console.log(value,111,newProps)
	            return _react2.default.createElement(tag, props);
	            // return (
	            //     <input className={cls} onChange={this.onChangeHandle} value={value}  />
	            // )
	        }
	    }]);

	    return Base;
	}(_react.Component);

	// export class NumericInput extends Component{
	//     render(){
	//         let reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
	//         return <Base reg={reg} />
	//     }
	// }
	/**
	 * @desc: 格式化输入框
	 * @param {boolean}isNaN 是否为非数字，默认为false时是数字
	 * @return: 
	 */

	var InputContainer = function InputContainer(WrappedComponnet, reg) {
	    var negative = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	    var isNaN = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
	    return function (_Component2) {
	        _inherits(_class2, _Component2);

	        function _class2(props) {
	            _classCallCheck(this, _class2);

	            // this.decimals = props.decimals;
	            var _this3 = _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).call(this, props));

	            _this3.isNaN = isNaN;
	            _this3.negative = _this3.props.negative || negative;
	            _this3.state = { value: typeof props.value === 'undefined' ? "" : _this3.format(props.value, true) };
	            _this3.onChangeHandle = _this3.onChangeHandle.bind(_this3);
	            return _this3;
	        }

	        _createClass(_class2, [{
	            key: "componentWillReceiveProps",
	            value: function componentWillReceiveProps(newProps, newState) {
	                if (newProps.value != this.state.value && typeof newProps.value !== 'undefined') {
	                    if (!this.isNaN) {
	                        var value = Number(this.state.value.replace(/\,/gi, ''));
	                        if (Number(String(newProps.value).replace(/\,/gi, '')) != value) {
	                            this.format(newProps.value);
	                        }
	                    } else {
	                        this.format(newProps.value);
	                    }
	                    // this.setState({ value: newProps.value });
	                }
	            }
	        }, {
	            key: "format",
	            value: function format(value, isinit) {
	                var _this4 = this;

	                if (this.props.beforeFormat) {
	                    value = this.props.beforeFormat(value);
	                }
	                var istriggerChange = true;
	                if (/^\-/.test(value) && this.negative) {
	                    this.isnegative = true;
	                } else {
	                    this.isnegative = false;
	                }
	                value = String(value).replace(/-/gi, '');
	                if (reg) {
	                    var oldvalue = value;
	                    (typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object' ? value = JSON.stringify(value) : null;
	                    value = String(value).replace(/\,/g, '');
	                    if (this.state && (oldvalue == this.state.value || value == this.state.value)) {
	                        istriggerChange = false;
	                    }
	                    if (reg && value != '') {
	                        var arr = value.split('.');
	                        if (arr.length > 1) {
	                            value = arr[0] + '.' + arr[1].substr(0, this.props.decimals);
	                        }
	                        var res = value.match(reg);
	                        value = res === null ? '' : res[0];
	                    }
	                }
	                if (this.isnegative) {
	                    value = '-' + value;
	                }
	                if (isinit) {
	                    return value;
	                } else {
	                    this.setState({ value: value }, function () {
	                        if (!isNaN && value != '') {
	                            value = Number(value.replace(/\,/gi, '')) || "";
	                        }
	                        _this4.props.returnType ? value = window[_this4.props.returnType](value) : String(value);
	                        istriggerChange && _this4.props.onChange && _this4.props.onChange(value);
	                    });
	                }
	            }
	        }, {
	            key: "onChangeHandle",
	            value: function onChangeHandle(target) {
	                var value = target.value;

	                this.format(value, false, target);
	            }
	        }, {
	            key: "render",
	            value: function render() {
	                var newProps = {
	                    onChange: this.onChangeHandle,
	                    value: this.state.value
	                };
	                var props = _extends({}, this.props, newProps);
	                return _react2.default.createElement(WrappedComponnet, props);
	            }
	        }]);

	        return _class2;
	    }(_react.Component);
	};
	var Input = InputContainer(Base);
	var NumericInput = InputContainer(Base, /-?(0|[1-9][0-9]*)(\.[0-9]*)?/, true, false); //数字,含小数
	var InterInput = InputContainer(Base, /-?(0|[1-9][0-9]*)?/, true, false); //整数
	var PosInterInput = InputContainer(Base, /(0|[1-9][0-9]*)/, false, false); //正整数
	var LetterInput = InputContainer(Base, /[a-zA-Z]+/); //字母

	var setCaretPosition = function setCaretPosition(tObj, sPos) {
	    if (tObj.setSelectionRange) {
	        setTimeout(function () {
	            tObj.setSelectionRange(sPos, sPos);
	            tObj.focus();
	        }, 0);
	    } else if (tObj.createTextRange) {
	        var rng = tObj.createTextRange();
	        rng.move('character', sPos);
	        rng.select();
	    }
	};
	//获取当前光标位置
	var getPosition = function getPosition(element) {
	    var cursorPos = 0;
	    if (document.selection) {
	        //IE
	        var selectRange = document.selection.createRange();
	        selectRange.moveStart('character', -element.value.length);
	        cursorPos = selectRange.text.length;
	    } else if (element && (element.selectionStart || element.selectionStart == '0')) {
	        cursorPos = element.selectionStart;
	    }
	    return cursorPos;
	};
	//getDisplayName
	function getDisplayName(WrappedComponent) {
	    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}
	var FormatContainer = function FormatContainer(WrappedComponnet, _format) {
	    var _class3, _temp;

	    return _temp = _class3 = function (_NumericInput) {
	        _inherits(_class3, _NumericInput);

	        function _class3() {
	            _classCallCheck(this, _class3);

	            return _possibleConstructorReturn(this, (_class3.__proto__ || Object.getPrototypeOf(_class3)).apply(this, arguments));
	        }

	        _createClass(_class3, [{
	            key: "onChangeHandle",
	            value: function onChangeHandle(target) {
	                var value = target.value;
	                // if(this.negative){
	                //     if(value =='-' ){
	                //         return value;
	                //     }
	                // }else{
	                //     return ''
	                // }

	                if (/^\-/.test(value)) {
	                    //如果负号开始
	                    value = value.replace(/\-/gi, '');
	                    this.negative ? this.isnegative = true : null;
	                } else {
	                    this.isnegative = false;
	                }
	                this.format(value, false, target);
	            }
	        }, {
	            key: "format",
	            value: function format(value, isinit, target) {
	                var _this6 = this;

	                if (this.props.beforeFormat) {
	                    value = this.props.beforeFormat(value);
	                }
	                var oldvalue = value;
	                value = _format(String(value).replace(/\,/g, ''), this.props, this.state ? this.state.value : '', this.negative);
	                var istriggerChange = true;
	                if (this.state && (oldvalue == this.state.value || value == this.state.value)) {
	                    istriggerChange = false;
	                }
	                if (!isinit) {
	                    //计算出新值和旧值之间相差几个千分位
	                    var ql = value.split(',').length - this.state.value.split(',').length;
	                    var rightpos = 0;
	                    if (target) {
	                        var pos = getPosition(target);
	                        var len = target.value.length;
	                        rightpos = len - pos; //算出从右计算的光标位置
	                    }
	                    // console.log('right:',rightpos)
	                    if (this.isnegative) {
	                        value = '-' + value;
	                    }
	                    this.setState({ value: value }, function () {
	                        if (target) {
	                            var tmp = _this6.state.value.length - rightpos;
	                            // console.log(tmp,this.state.value.length,rightpos)
	                            // console.log(tmp)
	                            setCaretPosition(target, tmp);
	                        }
	                        if (!_this6.isNaN && value != '') {
	                            value = Number(value.replace(/\,/gi, ''));
	                        }
	                        _this6.props.returnType ? value = window[_this6.props.returnType](value) : String(value);
	                        istriggerChange && _this6.props.onChange && _this6.props.onChange(value);
	                    });
	                } else {
	                    return value;
	                }
	            }
	        }]);

	        return _class3;
	    }(NumericInput), _class3.displayName = "HOC(" + getDisplayName(WrappedComponnet) + ")", _temp;
	};

	var formatThousandthNumber = function formatThousandthNumber(num, _ref, ov) {
	    var decimals = _ref.decimals;

	    // number = number.replace(/\,/g,'');
	    ov = ov.replace(/\,/g, '');
	    num = String(num).replace(/\,/g, '');
	    var isnegative = false;
	    if (num.indexOf('-') == 0) {
	        num = num.replace(/\-/gi, '');
	        isnegative = true;
	    }
	    var arr = num.split('.');
	    var number = arr[0];
	    // let decimals  = arr.length>1 ?arr[1].length:0;
	    if ((typeof number === "undefined" ? "undefined" : _typeof(number)) == undefined) return '';
	    if (!number && number !== 0) {
	        return '';
	    } else {
	        number = (number + '').replace(/[^0-9+-Ee.]/g, '');
	        var n = !isFinite(+number) ? ov : +number,
	            prec = 0,
	            sep = ',',
	            dec = '.',
	            s = '';
	        s = (prec ? n.fromFixed(prec) : '' + Math.round(n)).split('.');
	        var re = /(-?\d+)(\d{3})/;
	        while (re.test(s[0])) {
	            s[0] = s[0].replace(re, "$1" + sep + "$2");
	        }

	        if ((s[1] || '').length < prec) {
	            s[1] = s[1] || '';
	            s[1] += new Array(prec - s[1].length + 1).join('0');
	        }
	        var str = s.join(dec);
	        if (arr.length > 1) {
	            str += '.' + arr[1].substr(0, decimals).replace(/[^0-9]/ig, "");
	        }
	        if (isnegative) {
	            return '-' + str;
	        }
	        return str;
	    }
	};
	Input.Numeric = NumericInput;
	Input.Inter = InterInput;
	Input.PosInter = PosInterInput;
	Input.Letter = LetterInput;
	Input.Thousand = ThousandInput;
	Input.Base = Base;
	Input.FormatContainer = FormatContainer;
	var ThousandInput = FormatContainer(NumericInput, formatThousandthNumber);
	exports.Base = Base;
	exports.formatThousandthNumber = formatThousandthNumber;
	exports.FormatContainer = FormatContainer;
	exports.Input = Input;
	exports.InputContainer = InputContainer;
	exports.NumericInput = NumericInput;
	exports.InterInput = InterInput;
	exports.PosInterInput = PosInterInput;
	exports.LetterInput = LetterInput;
	exports.ThousandInput = ThousandInput;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ })
/******/ ])
});
;