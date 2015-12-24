/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var React = _interopRequireWildcard(_react);

	var _reactDom = __webpack_require__(2);

	var _demo_app = __webpack_require__(3);

	var _demo_app2 = _interopRequireDefault(_demo_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	(0, _reactDom.render)(React.createElement(_demo_app2.default, null), document.getElementById("content")); /**
	                                                                                                           * Created by Aaron on 12/21/2015.
	                                                                                                           */

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var React = _interopRequireWildcard(_react);

	var _ = __webpack_require__(4);

	var _2 = _interopRequireDefault(_);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Aaron on 12/21/2015.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var DemoApp = (function (_React$Component) {
	    _inherits(DemoApp, _React$Component);

	    function DemoApp() {
	        _classCallCheck(this, DemoApp);

	        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	    }

	    DemoApp.prototype.onToggleCollapsible = function onToggleCollapsible(index, event) {
	        var demo = this.refs['demo' + index];

	        demo.toggle();

	        event.preventDefault();
	    };

	    DemoApp.prototype.onToggleManyCollapsibles = function onToggleManyCollapsibles() {
	        var last = arguments.length - 1;

	        for (var i = 0; i < last; i++) {
	            var index = arguments[i];

	            var demo = this.refs['demo' + index];

	            demo.toggle();
	        }

	        arguments[last].preventDefault();
	    };

	    DemoApp.prototype.render = function render() {
	        var content = React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'p',
	                null,
	                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis mi ultrices, dictum metus id, cursus erat. Nam in eros sit amet arcu efficitur lacinia et nec diam. Sed sit amet mattis ex. Vivamus posuere urna dapibus justo ultricies convallis. Maecenas eu dolor neque. Maecenas lobortis egestas hendrerit. Suspendisse iaculis, leo at bibendum hendrerit, urna lectus ultrices dui, laoreet varius orci sem eu ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sed semper purus. Duis euismod lacus non dolor aliquet placerat.'
	            ),
	            React.createElement(
	                'p',
	                null,
	                'Proin sit amet sem nec nibh efficitur mattis. Curabitur in ornare lorem, in maximus eros. Nulla fringilla vitae dui id scelerisque. In ornare ipsum in consequat egestas. Proin sit amet odio quis lorem imperdiet feugiat ut a leo. Curabitur ut placerat nisi. Aenean justo turpis, ornare id libero at, sagittis placerat felis. Curabitur vel risus nisi.'
	            ),
	            React.createElement(
	                'p',
	                null,
	                'Morbi sit amet sapien in metus pharetra dictum. Suspendisse mauris lorem, luctus sit amet dapibus ut, elementum eget lacus. Quisque ut mi sed augue malesuada maximus. Vestibulum fermentum aliquet augue, ornare efficitur purus pretium sed. Nunc non euismod justo, at pharetra ipsum. Nam convallis lorem et pellentesque scelerisque. Mauris at purus sed diam dignissim sollicitudin. Curabitur in justo condimentum quam auctor rutrum nec in lectus. Cras massa neque, aliquam a magna aliquet, accumsan congue sem. Duis sagittis lobortis finibus. Fusce ac ipsum a libero sodales molestie. Integer euismod nisl felis, a pretium nisi vulputate eu. Vivamus vel tincidunt dui, vitae dignissim lectus.'
	            ),
	            React.createElement(
	                'p',
	                null,
	                'Nullam rhoncus eleifend leo, ac facilisis odio posuere at. Praesent sit amet dolor congue, dictum urna nec, laoreet risus. Ut egestas vitae diam eget vehicula. Duis dignissim tellus vel lacus tristique semper eget non metus. Pellentesque tincidunt quam nulla, id consectetur nunc lobortis at. Mauris tellus eros, consectetur et fermentum cursus, sodales a purus. Maecenas commodo justo suscipit quam eleifend, a iaculis purus pharetra. Nulla eget diam at ex lacinia consectetur sit amet sed nisl. Etiam ultrices ipsum ac nisi lacinia efficitur. Sed blandit, ante non ullamcorper lobortis, diam odio vulputate lacus, at ullamcorper neque augue sit amet ligula. Nullam nisi tortor, facilisis consectetur venenatis ac, fringilla eget tellus.'
	            ),
	            React.createElement(
	                'p',
	                null,
	                'Duis ornare ut orci eu egestas. Praesent magna ante, rhoncus eu ullamcorper in, ultrices et orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec placerat nisi ut tellus posuere molestie eu ac nunc. Pellentesque massa tellus, condimentum sit amet elit at, interdum commodo neque. Praesent facilisis tempus egestas. Etiam tincidunt ligula tortor, vitae iaculis nibh maximus sed. Quisque tincidunt feugiat sem in fermentum. Nunc sit amet quam dui. Duis viverra facilisis pharetra.'
	            )
	        );

	        var style = {
	            border: "1px solid black",
	            paddingLeft: 10,
	            paddingRight: 10
	        };

	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'h1',
	                null,
	                'react-collapsible Demo App'
	            ),
	            React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'button',
	                    { style: { padding: 5 }, onClick: this.onToggleManyCollapsibles.bind(this, 1, 2) },
	                    'Toggle All'
	                ),
	                React.createElement('hr', null),
	                React.createElement(
	                    'button',
	                    { onClick: this.onToggleCollapsible.bind(this, 1) },
	                    'Toggle Collapsible Height'
	                ),
	                React.createElement(
	                    _2.default,
	                    { id: 'demo1', ref: 'demo1' },
	                    React.createElement(
	                        'div',
	                        { style: style },
	                        content
	                    )
	                ),
	                React.createElement('hr', null),
	                React.createElement(
	                    'button',
	                    { onClick: this.onToggleCollapsible.bind(this, 2) },
	                    'Toggle Collapsible Width'
	                ),
	                React.createElement(
	                    _2.default,
	                    { id: 'demo2', ref: 'demo2', dimension: 'width', style: { border: "1px solid black" } },
	                    React.createElement(
	                        'div',
	                        { style: style },
	                        content
	                    )
	                )
	            )
	        );
	    };

	    return DemoApp;
	})(React.Component);

	exports.default = DemoApp;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Aaron on 12/21/2015.
	 */

	module.exports = __webpack_require__( 5 );


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/****
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2015 Aaron Trent
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 * 
	 * The above copyright notice and this permission notice shall be included in all
	 * copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 * SOFTWARE.
	 * 
	 * 
	 ****/
	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var React = _interopRequireWildcard(_react);

	var _lodash = __webpack_require__(6);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Aaron on 12/22/2015.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	function styleHasBorder(style) {
	    for (var key in style) {
	        if (style.hasOwnProperty(key)) {
	            if (key.slice(0, 'border'.length) === 'border') {
	                return true;
	            }
	        }
	    }

	    return false;
	}

	var Collapsible = (function (_React$Component) {
	    _inherits(Collapsible, _React$Component);

	    function Collapsible() {
	        var _temp, _this, _ret;

	        _classCallCheck(this, Collapsible);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	            transitioning: false,
	            value: null,
	            expandedValue: null, //when a hide is cancelled, the height/width should return to this
	            expanded: true,
	            scrollDimension: (0, _lodash.camelCase)('scroll-' + _this.props.dimension),
	            offsetDimension: (0, _lodash.camelCase)('offset-' + _this.props.dimension),
	            clientDimension: (0, _lodash.camelCase)('client-' + _this.props.dimension),
	            capitalizedDimension: (0, _lodash.capitalize)(_this.props.dimension)
	        }, _this.timers = [], _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    Collapsible.prototype.doTransition = function doTransition(element, setDimension, complete) {
	        var _this2 = this;

	        var _props = this.props;
	        var disableTransitions = _props.disableTransitions;
	        var duration = _props.duration;

	        if (disableTransitions) {
	            setDimension();
	            complete();
	        } else {
	            (function () {
	                var transitionEndListener = function transitionEndListener(event) {
	                    complete();

	                    element.removeEventListener('transitionend', transitionEndListener);
	                };

	                _this2.timers.push(setTimeout(complete, duration));
	                _this2.timers.push(setTimeout(setDimension, 0));

	                element.addEventListener('transitionend', transitionEndListener);
	            })();
	        }
	    };

	    Collapsible.prototype.cancel = function cancel() {
	        var transitioning = this.state.transitioning;

	        this.timers.forEach(clearTimeout);

	        this.timers = [];

	        this.setState({
	            transitioning: false
	        });

	        return transitioning;
	    };

	    Collapsible.prototype.show = function show() {
	        var _this3 = this;

	        var wasTransitioning = this.cancel();

	        var dimension = this.props.dimension;
	        var _state = this.state;
	        var expandedValue = _state.expandedValue;
	        var scrollDimension = _state.scrollDimension;

	        var element = this.refs['component'];

	        this.setState({
	            transitioning: true,
	            expanded: true
	        });

	        var setDimension = function setDimension() {
	            _this3.setState({
	                value: expandedValue
	            });
	        };

	        var complete = (0, _lodash.once)(function () {
	            _this3.setState({
	                transitioning: false
	            });
	        });

	        this.doTransition(element, setDimension, complete);
	    };

	    Collapsible.prototype.hide = function hide() {
	        var _this4 = this;

	        var wasTransitioning = this.cancel();

	        var _props2 = this.props;
	        var dimension = _props2.dimension;
	        var style = _props2.style;
	        var measurement = _props2.measurement;
	        var _state2 = this.state;
	        var scrollDimension = _state2.scrollDimension;
	        var offsetDimension = _state2.offsetDimension;
	        var clientDimension = _state2.clientDimension;
	        var expandedValue = _state2.expandedValue;

	        var element = this.refs['component'];

	        var offsetValue = void 0;

	        if (measurement === 'auto') {
	            if (styleHasBorder(style)) {
	                offsetValue = element[scrollDimension];
	            } else {
	                offsetValue = element[offsetDimension];
	            }
	        } else if (measurement === 'scroll') {
	            offsetValue = element[scrollDimension];
	        } else {
	            offsetValue = element[offsetDimension];
	        }

	        this.setState({
	            transitioning: true,
	            expanded: false,
	            value: offsetValue,
	            height: element.offsetHeight,
	            width: element.offsetWidth
	        });

	        if (!wasTransitioning) {
	            this.setState({
	                expandedValue: offsetValue
	            });
	        }

	        var setDimension = function setDimension() {
	            _this4.setState({
	                value: 0
	            });
	        };

	        var complete = (0, _lodash.once)(function () {
	            _this4.setState({
	                transitioning: false
	            });
	        });

	        this.doTransition(element, setDimension, complete);
	    };

	    Collapsible.prototype.toggle = function toggle() {
	        var expanded = this.state.expanded;

	        if (expanded) {
	            this.hide();
	        } else {
	            this.show();
	        }
	    };

	    Collapsible.prototype.componentDidMount = function componentDidMount() {
	        var expanded = this.props.expanded;

	        if (!expanded) {
	            this.hide();
	        }
	    };

	    Collapsible.prototype.render = function render() {
	        var _props3 = this.props;
	        var dimension = _props3.dimension;
	        var boundOtherDimension = _props3.boundOtherDimension;
	        var children = _props3.children;
	        var className = _props3.className;
	        var style = _props3.style;
	        var component = _props3.component;
	        var animatedClassName = _props3.animatedClassName;
	        var _state3 = this.state;
	        var value = _state3.value;
	        var transitioning = _state3.transitioning;
	        var expanded = _state3.expanded;
	        var capitalizedDimension = _state3.capitalizedDimension;
	        var height = _state3.height;
	        var width = _state3.width;

	        var newClassName = (0, _classnames2.default)(className, animatedClassName);

	        var newStyle = _extends({}, style, {
	            position: 'relative',
	            overflow: 'hidden'
	        });

	        if (transitioning) {
	            newStyle['max' + capitalizedDimension] = value;

	            if (expanded) {
	                newStyle['min' + capitalizedDimension] = value;
	            }

	            if (boundOtherDimension) {
	                if (dimension === 'height') {
	                    newStyle['width'] = width;
	                } else {
	                    newStyle['height'] = height;
	                }
	            }
	        } else {
	            if (expanded) {
	                if (component === 'tr') {
	                    newStyle['display'] = 'table-row';
	                } else if (component === 'tbody') {
	                    newStyle['display'] = 'table-row-group';
	                } else {
	                    newStyle['display'] = 'block';
	                }
	            } else {
	                newStyle['display'] = 'none';

	                newStyle['max' + capitalizedDimension] = 0;
	            }
	        }

	        return React.createElement(component, _extends({}, this.props, {
	            className: newClassName,
	            ref: 'component',
	            style: newStyle,
	            'aria-expanded': expanded
	        }), children);
	    };

	    return Collapsible;
	})(React.Component);

	Collapsible.displayName = 'Collapsible';
	Collapsible.propTypes = {
	    duration: React.PropTypes.number,
	    expanded: React.PropTypes.bool,
	    dimension: React.PropTypes.oneOf(['height', 'width']),
	    boundOtherDimension: React.PropTypes.bool,
	    component: React.PropTypes.node,
	    className: React.PropTypes.string,
	    disableTransitions: React.PropTypes.bool,
	    animatedClassName: React.PropTypes.string,
	    measurement: React.PropTypes.oneOf(['scroll', 'offset', 'auto'])
	};
	Collapsible.defaultProps = {
	    duration: 2000, //0.30s
	    expanded: true,
	    dimension: 'height',
	    boundOtherDimension: true,
	    component: 'div',
	    disableTransitions: false,
	    animatedClassName: 'animated',
	    measurement: 'auto'
	};
	exports.default = Collapsible;


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = _;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }
/******/ ]);