import React, { Component } from 'react'
import uuid from 'uuid-random';
import BRInput from '@govbr/dsgov/dist/js/components/input'

import { normalizarPropsDsGov } from '../utils'

class Input extends Component {

    componentDidMount() {
        new BRInput('br-input', window.document.querySelector('.'+this.componentId))
    }

    constructor(props) {
        super(props)
        this.componentId = 'input' + uuid()
    }



    render() {

        const properties = normalizarPropsDsGov(this.props)
        const filter = 'filter' in properties ? true : null
        const disabled = 'disabled' in properties ? true : null
        const classes = 'br-input '+this.componentId

        return (

            <div className={classes} filter={filter}>
                <label htmlFor={properties.id}>{properties.label}</label>
                <input
                    value={properties.value}
                    disabled={disabled}
                    id={properties.id}
                    type="text" 
                    placeholder={properties.placeholder} 
                    />
            </div>

        )
    }
}

export default Input