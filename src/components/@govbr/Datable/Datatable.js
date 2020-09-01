import React, {Component} from 'react'
import uuid from 'uuid-random';
import BRTable from  '@govbr/dsgov/dist/js/components/table'
import './Datatable.css'
import {normalizarPropsDsGov} from '../utils'

class Datatable extends Component {

    componentDidMount() {
        new BRTable('br-table', window.document.querySelector('.' + this.componentId), 0)
    }


    constructor(props) {
        super(props)
        this.componentId = 'table' + uuid()
    }

    render(){

        const properties = normalizarPropsDsGov(this.props)
        const classes = "br-table "+this.componentId +" "+properties.classes

        return (
          <div className={classes} {...properties}>
            <div className='header'>
              <div className="top-bar">
                <div className="title">{properties.titulo}</div>
              </div>
              
              <div className="selected-bar">
                <div className="info">
                  <button className="br-button select-all is-primary mobile" type="button">
                    <i className="fas fa-minus-square"></i></button>
                    <span className="count">0</span>
                    <span className="text">item selecionado</span>
                </div>
                <div className="action-button">
                <button className="br-button delete-trigger is-primary" type="button">
                    <span>Excluir</span><i className="fas fa-trash-alt"></i>
                </button>
            </div>
            <div className="action-button">
                <button className="br-button download-trigger is-primary" type="button">
                    <span>Download</span><i className="fas fa-download"></i>
                </button>
            </div>
            <div className="action-button mobile">
                <button className="br-button is-primary" type="button">
                    <i className="fas fa-ellipsis-v"></i>
                </button>
            </div>
              </div>
            </div>
            {this.props.children}
         </div>)
    }
}

export default Datatable