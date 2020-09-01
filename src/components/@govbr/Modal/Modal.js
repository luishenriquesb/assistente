import React, { Component, Fragment } from 'react'
import uuid from 'uuid-random';
import {normalizarPropsDsGov} from '../utils'

import BRModal from '@govbr/dsgov/dist/js/components/modal'
import Scrim from '../Scrim/Scrim';
import Backdrop from '../Backdrop/Backdrop';

import classesModule from './Modal.module.css'

export class Modal extends Component {
    
    constructor(props) {
        super(props)
        this.componentId = 'modal' + uuid()
    }

    componentDidMount(){
        new BRModal('br-modal', window.document.querySelector('.'+this.componentId))
    }
    render() {
        const properties = normalizarPropsDsGov(this.props)
        const classes = `${classesModule.Modal} br-modal ${this.componentId} ${properties.classes}`

        return (
            <Fragment>
            <Backdrop show={true} click={this.props.fecharModal}/>
                
            {/* <Scrim classes="is-foco" click={this.props.fecharModal}> */}
               <div className={classes}>
                    <div className="br-modal-dialog">
                        <div className="br-modal-content">

                            {this.props.header? 
                              <div className="br-modal-header">
                                {this.props.header}
                             </div>:null
                            }
                          
                            <div className="br-modal-body">
                                {this.props.children}
                            </div>

                            {this.props.footer?
                               <div className="br-modal-footer">
                                   {this.props.footer}
                               </div>:null
                            }
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Modal
