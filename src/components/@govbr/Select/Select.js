import React, {Component} from 'react'
import BRSelect from '@govbr/dsgov/dist/js/components/select'
import uuid from 'uuid-random';
import {normalizarPropsDsGov} from '../utils'

class Select extends Component {

    constructor(props){
        super(props)
        this.componentId = 'class'+uuid()
    }

    componentDidMount() {
        new BRSelect('br-select', window.document.querySelector('.'+this.componentId))  
        
    }

    resetarSelect() {
        window.document.querySelector('.'+this.componentId+' span').innerHTML = this.props.value
        window.document.querySelector('.'+this.componentId+' .select-items .same-as-selected').classList.remove('same-as-selected')
    }

    getValue() {
        const value = window.document.querySelector('.'+this.componentId+' select').value 
        if(this.props.naoMarcarOpcao) {
            this.resetarSelect()
        }
        return value
    }

    render() {
        const properties = normalizarPropsDsGov(this.props)
        const classes = "br-select "+this.componentId +" "+properties.classes
        return (
            <div className={classes} 
                {...properties} 
                onClick={()=>this.props.click(this.getValue())} 
                >
                {properties.label ? <label htmlFor={properties.id}>{properties.label}</label>:null}
                {this.props.titulo}
                <select defaultValue={this.props.value}>
                    {this.props.children}
                </select>
            </div>
        )
    }
}


export default Select