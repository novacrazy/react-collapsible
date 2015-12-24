/**
 * Created by Aaron on 12/21/2015.
 */

import * as React from 'react';

import Collapsible from '../../';

class DemoApp extends React.Component {

    onToggleCollapsible( index, event ) {
        let demo = this.refs['demo' + index];

        demo.toggle();

        event.preventDefault();
    }

    onToggleManyCollapsibles() {
        const last = arguments.length - 1;

        for( let i = 0; i < last; i++ ) {
            let index = arguments[i];

            let demo = this.refs['demo' + index];

            demo.toggle();
        }

        arguments[last].preventDefault();
    }

    render() {
        let content = (
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis mi ultrices, dictum metus
                    id, cursus erat. Nam in eros sit amet arcu efficitur lacinia et nec diam. Sed sit amet
                    mattis ex. Vivamus posuere urna dapibus justo ultricies convallis. Maecenas eu dolor neque.
                    Maecenas lobortis egestas hendrerit. Suspendisse iaculis, leo at bibendum hendrerit, urna
                    lectus ultrices dui, laoreet varius orci sem eu ex. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus. Proin sed semper purus. Duis euismod lacus
                    non dolor aliquet placerat.
                </p>
                <p>
                    Proin sit amet sem nec nibh efficitur mattis. Curabitur in ornare lorem, in maximus eros.
                    Nulla fringilla vitae dui id scelerisque. In ornare ipsum in consequat egestas. Proin sit
                    amet odio quis lorem imperdiet feugiat ut a leo. Curabitur ut placerat nisi. Aenean justo
                    turpis, ornare id libero at, sagittis placerat felis. Curabitur vel risus nisi.
                </p>
                <p>
                    Morbi sit amet sapien in metus pharetra dictum. Suspendisse mauris lorem, luctus sit amet
                    dapibus ut, elementum eget lacus. Quisque ut mi sed augue malesuada maximus. Vestibulum
                    fermentum aliquet augue, ornare efficitur purus pretium sed. Nunc non euismod justo, at
                    pharetra ipsum. Nam convallis lorem et pellentesque scelerisque. Mauris at purus sed diam
                    dignissim sollicitudin. Curabitur in justo condimentum quam auctor rutrum nec in lectus.
                    Cras massa neque, aliquam a magna aliquet, accumsan congue sem. Duis sagittis lobortis
                    finibus. Fusce ac ipsum a libero sodales molestie. Integer euismod nisl felis, a pretium
                    nisi vulputate eu. Vivamus vel tincidunt dui, vitae dignissim lectus.
                </p>
                <p>
                    Nullam rhoncus eleifend leo, ac facilisis odio posuere at. Praesent sit amet dolor congue,
                    dictum urna nec, laoreet risus. Ut egestas vitae diam eget vehicula. Duis dignissim tellus
                    vel lacus tristique semper eget non metus. Pellentesque tincidunt quam nulla, id consectetur
                    nunc lobortis at. Mauris tellus eros, consectetur et fermentum cursus, sodales a purus.
                    Maecenas commodo justo suscipit quam eleifend, a iaculis purus pharetra. Nulla eget diam at
                    ex lacinia consectetur sit amet sed nisl. Etiam ultrices ipsum ac nisi lacinia efficitur.
                    Sed blandit, ante non ullamcorper lobortis, diam odio vulputate lacus, at ullamcorper neque
                    augue sit amet ligula. Nullam nisi tortor, facilisis consectetur venenatis ac, fringilla
                    eget tellus.
                </p>
                <p>
                    Duis ornare ut orci eu egestas. Praesent magna ante, rhoncus eu ullamcorper in, ultrices et
                    orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                    Curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Donec placerat nisi ut tellus posuere molestie eu ac nunc. Pellentesque massa
                    tellus, condimentum sit amet elit at, interdum commodo neque. Praesent facilisis tempus
                    egestas. Etiam tincidunt ligula tortor, vitae iaculis nibh maximus sed. Quisque tincidunt
                    feugiat sem in fermentum. Nunc sit amet quam dui. Duis viverra facilisis pharetra.
                </p>
            </div>
        );

        let style = {
            border:       "1px solid black",
            paddingLeft:  10,
            paddingRight: 10
        };

        return (
            <div>
                <h1>react-collapsible Demo App</h1>

                <div>
                    <button style={{padding: 5}} onClick={this.onToggleManyCollapsibles.bind(this, 1, 2)}>
                        Toggle All
                    </button>

                    <hr/>

                    <button onClick={this.onToggleCollapsible.bind(this, 1)}>
                        Toggle Collapsible Height
                    </button>
                    <Collapsible id="demo1" ref="demo1">
                        <div style={style}>{content}</div>
                    </Collapsible>

                    <hr/>

                    <button onClick={this.onToggleCollapsible.bind(this, 2)}>
                        Toggle Collapsible Width
                    </button>
                    <Collapsible id="demo2" ref="demo2" dimension="width" style={{border: "1px solid black"}}>
                        <div style={style}>{content}</div>
                    </Collapsible>
                </div>
            </div>
        );
    }
}

export default DemoApp;
