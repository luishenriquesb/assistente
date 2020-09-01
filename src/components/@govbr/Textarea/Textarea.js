import React from 'react'
import {normalizarPropsDsGov} from '../utils'

const textArea = (props) => {
    const properties = normalizarPropsDsGov(props)
    const classes = "br-textarea "+properties.classes
    return (
        <div className={classes}>
            <label htmlFor={properties.id}>{properties.label}</label>
            <textarea id={properties.id}
            placeholder={properties.placeholder}
            rows={properties.rows}
            cols={properties.cols}
            onChange={properties.change}
            style={{height:properties.height}}
            ></textarea> 
        </div>
    )
}

export default textArea