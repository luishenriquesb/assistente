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
        
        let listaBotaoAcao = null
        if (this.props.listaBotaoAcao) {
            listaBotaoAcao = this.props.listaBotaoAcao.map(item=>{return(
              <div className="action-button">
                {item}
              </div>
            )})
        }
       
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
                {listaBotaoAcao}
              </div>
            </div>
            {this.props.children}
         </div>)
    }
}

export default Datatable