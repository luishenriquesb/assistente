import React, { Component } from 'react'
import uuid from 'uuid-random';
import {normalizarPropsDsGov} from '../utils'

import BRScrim from '@govbr/dsgov/dist/js/components/scrim'

export class Scrim extends Component {

    constructor(props) {
        super(props)
        this.componentId = 'scrim' + uuid()
    }

    componentDidMount(){
        new BRScrim('br-scrim', window.document.querySelector('.'+this.componentId))
    }


    render() {
        const properties = normalizarPropsDsGov(this.props)
        const classes = "is-active br-scrim "+this.componentId +" "+properties.classes

        return (
            <div className={classes} onClick={(e)=>{this.props.click(e)}}>
                {this.props.children}
            </div>

        )
    }
}

export default Scrim
