import React, { Component, Fragment } from 'react'
import uuid from 'uuid-random';
import { normalizarPropsDsGov } from '../utils'

import BRUpload from '@govbr/dsgov/dist/js/components/upload'

class Upload extends Component {

    constructor(props) {
        super(props);
        this.componentId = 'upload' + uuid()
    }


    componentDidMount() {
        new BRUpload('br-upload', 
                    window.document.querySelector('.' + this.componentId), 
                    this.props.uploadFunction)
    }

   

    render(){
        const properties = normalizarPropsDsGov(this.props)
        const classes = "br-upload " + this.componentId + " " + properties.classes

        return(
            <div className={classes}>
                <label className="upload-label" htmlFor="upload">{properties.label}</label>
                <input className="upload-input" id={properties.id} type="file" />
                <button className="br-button upload-button" type="button">{this.props.children}</button>
                <div className="feedback">{properties.feedback}</div>
                <div className="upload-list"></div>
            </div>
        )
    }
}

export default Upload
