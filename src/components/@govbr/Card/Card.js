import uuid from 'uuid-random';
import React, { Component } from 'react'
import BRCard from '@govbr/dsgov/dist/js/components/card'
import {normalizarPropsDsGov} from '../utils'

class Card extends Component {

    componentDidMount() {
        new BRCard('br-card', window.document.querySelector('.' + this.componentId), this.componentId)
    }

    constructor(props) {
        super(props)
        this.componentId = 'card'+uuid()
    }

    render() {
        const properties = normalizarPropsDsGov(this.props)
        const classes = "br-card "+this.componentId +" "+properties.classes
        const header = this.props.header ? <div className='header'>
                                            <div className='content'>
                                                 {this.props.header}
                                            </div>
                                           </div>:null
        return(
            <div
                className={classes}
                {...properties}>
                <div className="front">
                    {header}
                    <div className="content">{this.props.children}</div>
                </div>
            </div>

        )
    }
}

export default Card