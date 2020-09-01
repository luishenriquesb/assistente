import React from 'react'
import {normalizarPropsDsGov} from '../utils'

const button = (props) => {
    const properties = normalizarPropsDsGov(props)
    const classes = 'br-button '+properties.classes
    return (
        <button className={classes} type='button' {...properties} onClick={props.click}>
            {props.children}
            {props.label}
        </button>
    )
}

export default button