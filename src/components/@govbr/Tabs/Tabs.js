import React, { Component, Fragment } from 'react'
import uuid from 'uuid-random';
import { normalizarPropsDsGov } from '../utils'

import BRTabs from '@govbr/dsgov/dist/js/components/tabs'
import Button from '../Button/Button'

class Tabs extends Component {

    constructor(props) {
        super(props);
        this.componentId = 'tabs' + uuid()
    }

    componentDidMount() {
        new BRTabs('br-tabs', window.document.querySelector('.' + this.componentId))
    }

    render() {
        const properties = normalizarPropsDsGov(this.props)
        const classes = "br-tabs " + this.componentId + " " + properties.classes
        let listNav = []
        let listTab = []

        const listaTabs = this.props.tabs
        for (let index = 0; index < listaTabs.length; index++) {
            const ativo = listaTabs[index].ativo ? 'is-active': null
            listNav.push(
                <li className={"tab-item "+ativo}>
                    <button type="button" data-panel={"panel-" + index}>
                        <span className="name">{listaTabs[index].titulo}</span>
                    </button>
                </li>
            )
            listTab.push(
                <div className={"tab-panel "+ativo} id={"panel-" + index}>
                    {listaTabs[index].conteudo}
                </div>
            )

        }


        return(
            <div className={classes}>
                <nav className="tab-nav">
                    <ul>
                        {listNav}
                    </ul>
                </nav>
                <div className="tab-content">
                    {listTab}
                </div>
           </div>
        )
    }

}

export default Tabs