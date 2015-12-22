/**
 * Created by Aaron on 12/21/2015.
 */

/**
 * Created by novacrazy on 6/4/2015.
 */

import * as React from 'react';
import {camelCase, capitalize} from 'lodash';
import classNames from 'classnames';

/*
 * This is a component that allows 'collapsing' a div either vertically or horizontally depending on
 * the dimension parameter passed to it.
 *
 * It will apply a transition if possible, but otherwise apply the style immediately if not.
 * */

export default class Collapsible extends React.Component {
    static displayName = 'Collapsible';

    static propTypes = {
        duration:             React.PropTypes.number,
        expanded:             React.PropTypes.bool,
        dimension:            React.PropTypes.string,
        component:            React.PropTypes.node,
        className:            React.PropTypes.string,
        disableTransitions:   React.PropTypes.bool,
        maxDimension:         React.PropTypes.oneOfType( [
            React.PropTypes.string,
            React.PropTypes.number
        ] ),
        animatedClassName:    React.PropTypes.string,
        collapsingClassName:  React.PropTypes.string,
        collapsedClassName:   React.PropTypes.string,
        collapsedInClassName: React.PropTypes.string
    };

    static defaultProps = {
        duration:             300, //0.30s
        expanded:             true,
        dimension:            'height',
        component:            'div',
        disableTransitions:   false,
        maxDimension:         '100%',
        animatedClassName:    'animated',
        collapsingClassName:  'collapsing',
        collapsedClassName:   'collapse',
        collapsedInClassName: 'in'
    };

    state = {
        transitioning:        false,
        dimensionValue:       null,
        expanded:             true,
        scrollDimension:      camelCase( 'scroll-' + this.props.dimension ),
        offsetDimension:      camelCase( 'offset-' + this.props.dimension ),
        capitalizedDimension: capitalize( this.props.dimension )
    };

    timers = [];

    cancel() {
        this.timers.forEach( clearTimeout );

        this.timers = [];

        this.setState( {
            transitioning: false
        } );
    }

    show() {
        this.cancel();

        const {duration, disableTransitions} = this.props;
        const {scrollDimension} = this.state;

        let element = this.refs['collapsible'];

        this.setState( {
            transitioning: true,
            expanded:      true
        } );

        let setDimension = () => {
            this.setState( {
                dimensionValue: element[scrollDimension]
            } );
        };

        let complete = () => {
            this.setState( {
                transitioning: false
            } );
        };

        if( !disableTransitions ) {
            this.timers.push( setTimeout( complete, duration ) );
            this.timers.push( setTimeout( setDimension, 0 ) );

        } else {
            setDimension();
            complete();
        }
    }

    hide() {
        this.cancel();

        const {duration, disableTransitions} = this.props;
        const {offsetDimension} = this.state;

        let element = this.refs['collapsible'];

        this.setState( {
            transitioning:  true,
            expanded:       false,
            dimensionValue: element[offsetDimension]
        } );

        let setDimension = () => {
            this.setState( {
                dimensionValue: 0
            } );
        };

        let complete = () => {
            this.setState( {
                transitioning: false
            } );
        };

        if( !disableTransitions ) {
            this.timers.push( setTimeout( complete, duration ) );
            this.timers.push( setTimeout( setDimension, 0 ) );

        } else {
            setDimension();
            complete();
        }
    }

    toggle() {
        const {expanded} = this.state;

        if( expanded ) {
            this.hide();

        } else {
            this.show();
        }
    }

    componentDidMount() {
        const {expanded} = this.props;

        if( !expanded ) {
            this.hide();
        }
    }

    render() {
        const {dimension, children, className, component, style, maxDimension, animatedClassName, collapsingClassName, collapsedClassName, collapsedInClassName} = this.props;

        const {dimensionValue, transitioning, expanded, capitalizedDimension} = this.state;

        const Component = component;

        let classNameArgs = [className, animatedClassName], newStyle = {...style};

        if( transitioning ) {
            newStyle[dimension] = maxDimension;

            newStyle['max' + capitalizedDimension] = dimensionValue;

            if( expanded ) {
                newStyle['min' + capitalizedDimension] = dimensionValue;
            }

            classNameArgs.push( collapsingClassName );

        } else {
            classNameArgs.push( collapsedClassName );

            if( expanded ) {
                classNameArgs.push( collapsedInClassName );

            } else {
                newStyle['max' + capitalizedDimension] = 0;
            }
        }

        return React.createElement( component, {
            ...this.props,
            className:       classNames( classNameArgs ),
            ref:             'collapsible',
            style:           newStyle,
            'aria-expanded': expanded
        }, children );
    }
}
