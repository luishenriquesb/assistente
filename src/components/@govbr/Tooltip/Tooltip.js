import React, { Component, Fragment } from 'react'
import uuid from 'uuid-random';
import { normalizarPropsDsGov } from '../utils'

import BRTooltip from '@govbr/dsgov/dist/js/components/tooltip'

class Tooltip extends Component {

    constructor(props) {
        super(props);
        this.componentId = 'tooltip' + uuid()
    }

    componentDidMount() {
        new BRTooltip('br-tooltip', window.document.querySelector('.' + this.componentId))
    }

    render() {
        const properties = normalizarPropsDsGov(this.props)
        const classes = "br-tooltip " + this.componentId + " " + properties.classes

        return (
            <Fragment>
                
            {/* <span class="h3">Tooltip com Texto Simples</span> */}
            <div></div>
            <div className={classes} place={properties.place}>
                <span class="text">{this.props.children}</span>
            </div>
            
        </Fragment>
        )
    }
}
export default Tooltip