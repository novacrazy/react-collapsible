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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Aaron on 12/21/2015.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * Created by novacrazy on 6/4/2015.
 */

/*
 * This is a component that allows 'collapsing' a div either vertically or horizontally depending on
 * the dimension parameter passed to it.
 *
 * It will apply a transition if possible, but otherwise apply the style immediately if not.
 * */

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
            dimensionValue: null,
            expanded: true,
            scrollDimension: (0, _lodash.camelCase)('scroll-' + _this.props.dimension),
            offsetDimension: (0, _lodash.camelCase)('offset-' + _this.props.dimension),
            capitalizedDimension: (0, _lodash.capitalize)(_this.props.dimension)
        }, _this.timers = [], _temp), _possibleConstructorReturn(_this, _ret);
    }

    Collapsible.prototype.cancel = function cancel() {
        this.timers.forEach(clearTimeout);

        this.timers = [];

        this.setState({
            transitioning: false
        });
    };

    Collapsible.prototype.show = function show() {
        var _this2 = this;

        this.cancel();

        var _props = this.props;
        var duration = _props.duration;
        var disableTransitions = _props.disableTransitions;
        var scrollDimension = this.state.scrollDimension;

        var element = this.refs['collapsible'];

        this.setState({
            transitioning: true,
            expanded: true
        });

        var setDimension = function setDimension() {
            _this2.setState({
                dimensionValue: element[scrollDimension]
            });
        };

        var complete = function complete() {
            _this2.setState({
                transitioning: false
            });
        };

        if (!disableTransitions) {
            this.timers.push(setTimeout(complete, duration));
            this.timers.push(setTimeout(setDimension, 0));
        } else {
            setDimension();
            complete();
        }
    };

    Collapsible.prototype.hide = function hide() {
        var _this3 = this;

        this.cancel();

        var _props2 = this.props;
        var duration = _props2.duration;
        var disableTransitions = _props2.disableTransitions;
        var offsetDimension = this.state.offsetDimension;

        var element = this.refs['collapsible'];

        this.setState({
            transitioning: true,
            expanded: false,
            dimensionValue: element[offsetDimension]
        });

        var setDimension = function setDimension() {
            _this3.setState({
                dimensionValue: 0
            });
        };

        var complete = function complete() {
            _this3.setState({
                transitioning: false
            });
        };

        if (!disableTransitions) {
            this.timers.push(setTimeout(complete, duration));
            this.timers.push(setTimeout(setDimension, 0));
        } else {
            setDimension();
            complete();
        }
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
        var children = _props3.children;
        var className = _props3.className;
        var component = _props3.component;
        var style = _props3.style;
        var maxDimension = _props3.maxDimension;
        var animatedClassName = _props3.animatedClassName;
        var collapsingClassName = _props3.collapsingClassName;
        var collapsedClassName = _props3.collapsedClassName;
        var collapsedInClassName = _props3.collapsedInClassName;
        var _state = this.state;
        var dimensionValue = _state.dimensionValue;
        var transitioning = _state.transitioning;
        var expanded = _state.expanded;
        var capitalizedDimension = _state.capitalizedDimension;

        var Component = component;

        var classNameArgs = [className, animatedClassName],
            newStyle = _extends({}, style);

        if (transitioning) {
            newStyle[dimension] = maxDimension;

            newStyle['max' + capitalizedDimension] = dimensionValue;

            if (expanded) {
                newStyle['min' + capitalizedDimension] = dimensionValue;
            }

            classNameArgs.push(collapsingClassName);
        } else {
            classNameArgs.push(collapsedClassName);

            if (expanded) {
                classNameArgs.push(collapsedInClassName);
            } else {
                newStyle['max' + capitalizedDimension] = 0;
            }
        }

        return React.createElement(component, _extends({}, this.props, {
            className: (0, _classnames2.default)(classNameArgs),
            ref: 'collapsible',
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
    dimension: React.PropTypes.string,
    component: React.PropTypes.node,
    className: React.PropTypes.string,
    disableTransitions: React.PropTypes.bool,
    maxDimension: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    animatedClassName: React.PropTypes.string,
    collapsingClassName: React.PropTypes.string,
    collapsedClassName: React.PropTypes.string,
    collapsedInClassName: React.PropTypes.string
};
Collapsible.defaultProps = {
    duration: 300, //0.30s
    expanded: true,
    dimension: 'height',
    component: 'div',
    disableTransitions: false,
    maxDimension: '100%',
    animatedClassName: 'animated',
    collapsingClassName: 'collapsing',
    collapsedClassName: 'collapse',
    collapsedInClassName: 'in'
};
exports.default = Collapsible;
