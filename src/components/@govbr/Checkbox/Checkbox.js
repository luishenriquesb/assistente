import React from 'react'
import {normalizarPropsDsGov} from '../utils'

const checkbox = (props) => {

    const properties = normalizarPropsDsGov(props)

    return (
        <div className="br-checkbox" name={properties.name}>
            <input id={properties.id} type="checkbox" />
            <label htmlFor={properties.id}>{properties.label}</label>
        </div>
    )

}

export default checkbox 