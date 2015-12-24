/**
 * Created by Aaron on 12/22/2015.
 */

import * as React from 'react';
import {camelCase, capitalize, once} from 'lodash';
import classNames from 'classnames';

function styleHasBorder( style ) {
    for( let key in style ) {
        if( style.hasOwnProperty( key ) ) {
            if( key.slice( 0, 'border'.length ) === 'border' ) {
                return true;
            }
        }
    }

    return false;
}

export default class Collapsible extends React.Component {
    static displayName = 'Collapsible';

    static propTypes = {
        duration:            React.PropTypes.number,
        expanded:            React.PropTypes.bool,
        dimension:           React.PropTypes.oneOf( ['height', 'width'] ),
        boundOtherDimension: React.PropTypes.bool,
        component:           React.PropTypes.node,
        className:           React.PropTypes.string,
        disableTransitions:  React.PropTypes.bool,
        animatedClassName:   React.PropTypes.string,
        measurement:         React.PropTypes.oneOf( ['scroll', 'offset', 'auto'] )
    };

    static defaultProps = {
        duration:            2000, //0.30s
        expanded:            true,
        dimension:           'height',
        boundOtherDimension: true,
        component:           'div',
        disableTransitions:  false,
        animatedClassName:   'animated',
        measurement:         'auto'
    };

    state = {
        transitioning:        false,
        value:                null,
        expandedValue:        null, //when a hide is cancelled, the height/width should return to this
        expanded:             true,
        scrollDimension:      camelCase( 'scroll-' + this.props.dimension ),
        offsetDimension:      camelCase( 'offset-' + this.props.dimension ),
        clientDimension:      camelCase( 'client-' + this.props.dimension ),
        capitalizedDimension: capitalize( this.props.dimension )
    };

    timers = [];

    doTransition( element, setDimension, complete ) {
        const {disableTransitions, duration} = this.props;

        if( disableTransitions ) {
            setDimension();
            complete();

        } else {
            this.timers.push( setTimeout( complete, duration ) );
            this.timers.push( setTimeout( setDimension, 0 ) );

            function transitionEndListener( event ) {
                complete();

                element.removeEventListener( 'transitionend', transitionEndListener );
            }

            element.addEventListener( 'transitionend', transitionEndListener );
        }
    }

    cancel() {
        const {transitioning} = this.state;

        this.timers.forEach( clearTimeout );

        this.timers = [];

        this.setState( {
            transitioning: false
        } );

        return transitioning;
    }

    show() {
        const wasTransitioning = this.cancel();

        const {dimension} = this.props;
        const {expandedValue, scrollDimension} = this.state;

        let element = this.refs['component'];

        this.setState( {
            transitioning: true,
            expanded:      true
        } );

        let setDimension = () => {
            this.setState( {
                value: expandedValue
            } );
        };

        let complete = once( () => {
            this.setState( {
                transitioning: false
            } );
        } );

        this.doTransition( element, setDimension, complete );
    }

    hide() {
        const wasTransitioning = this.cancel();

        const {dimension, style, measurement} = this.props;
        const {scrollDimension, offsetDimension, clientDimension, expandedValue} = this.state;

        let element = this.refs['component'];

        let offsetValue;

        if( measurement === 'auto' ) {
            if( styleHasBorder( style ) ) {
                offsetValue = element[scrollDimension];

            } else {
                offsetValue = element[offsetDimension];
            }

        } else if( measurement === 'scroll' ) {
            offsetValue = element[scrollDimension];

        } else {
            offsetValue = element[offsetDimension]
        }

        this.setState( {
            transitioning: true,
            expanded:      false,
            value:         offsetValue,
            height:        element.offsetHeight,
            width:         element.offsetWidth
        } );

        if( !wasTransitioning ) {
            this.setState( {
                expandedValue: offsetValue
            } );
        }

        let setDimension = () => {
            this.setState( {
                value: 0
            } );
        };

        let complete = once( () => {
            this.setState( {
                transitioning: false
            } );
        } );

        this.doTransition( element, setDimension, complete );
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
        const {dimension, boundOtherDimension, children, className, style, component, animatedClassName} = this.props;

        const {value, transitioning, expanded, capitalizedDimension, height, width} = this.state;

        let newClassName = classNames( className, animatedClassName );

        let newStyle = {
            ...style,
            position: 'relative',
            overflow: 'hidden'
        };

        if( transitioning ) {
            newStyle['max' + capitalizedDimension] = value;

            if( expanded ) {
                newStyle['min' + capitalizedDimension] = value;
            }

            if( boundOtherDimension ) {
                if( dimension === 'height' ) {
                    newStyle['width'] = width;

                } else {
                    newStyle['height'] = height;
                }
            }

        } else {
            if( expanded ) {
                if( component === 'tr' ) {
                    newStyle['display'] = 'table-row';

                } else if( component === 'tbody' ) {
                    newStyle['display'] = 'table-row-group';

                } else {
                    newStyle['display'] = 'block';
                }

            } else {
                newStyle['display'] = 'none';

                newStyle['max' + capitalizedDimension] = 0;
            }
        }

        return React.createElement( component, {
            ...this.props,
            className:       newClassName,
            ref:             'component',
            style:           newStyle,
            'aria-expanded': expanded
        }, children );
    }
}
