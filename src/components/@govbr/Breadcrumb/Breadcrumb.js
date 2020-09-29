import React, { Component } from 'react'
import BRBreadcrumb from '@govbr/dsgov/dist/js/components/breadcrumb'
import uuid from 'uuid-random';
import { normalizarPropsDsGov } from '../utils'

class Breadcrumb extends Component {

    constructor(props) {
        super(props)
        this.componentId = 'class' + uuid()
    }

    componentDidMount() {
        new BRBreadcrumb('br-breadcrumb', window.document.querySelector('.' + this.componentId))
    }

    render() {
        const properties = normalizarPropsDsGov(this.props)
        const classes = "br-breadcrumb " + this.componentId + " " + properties.classes

        const crumbs = []
        const crumbs_props = [].concat(this.props.children)
        console.log(crumbs_props)
        crumbs_props.forEach(element => {
            if (element){
                const active = crumbs_props[crumbs_props.length-1] === element ? "" : null
                crumbs.push(
                    <li className="crumb" active={active}>
                        <i class="icon fas fa-chevron-right"></i>
                        {element}
                    </li>
                )
            }
            
        });
        return (
            <div className={classes}>
                <ul className="crumb-list">
                    <li className="crumb home">
                        {this.props.home}
                    </li>
                    {crumbs}
                    {/* <li class="crumb">
                        <i class="icon fas fa-chevron-right"></i>
                        <a href="#">Página Ancestral 01</a>
                    </li>
        
                    <li class="crumb" active="" >
                        <i class="icon fas fa-chevron-right"></i>
                        <span>Página Atual</span>
                    </li> */}
                </ul>
            </div>
        )
    }

}
export default Breadcrumb