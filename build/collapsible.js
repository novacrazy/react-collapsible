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

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _lodash = require('lodash');

var _classnames = require('classnames');

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
