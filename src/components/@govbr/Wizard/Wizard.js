import React, { Component } from 'react'
import uuid from 'uuid-random';
import { normalizarPropsDsGov } from '../utils'

import BRWizard from '@govbr/dsgov/dist/js/components/wizard'
import Button from '../Button/Button'

export class Wizard extends Component {

    constructor(props) {
        super(props);
        this.componentId = 'wizard' + uuid()
    }

    componentDidMount() {
        new BRWizard('br-wizard', window.document.querySelector('.' + this.componentId))
    }

    render() {
        const properties = normalizarPropsDsGov(this.props)
        const classes = "br-wizard " + this.componentId + " " + properties.classes

        console.log(properties.progressButtons)
        const progressButtonsLista =  this.props.progressButtons.map(
             item => (
                    <Button className="wizard-progress-btn">
                    <span class="info">{item}</span>
                    </Button>
             )
            )
        
        return (
            <div className={classes}>
                <div className="wizard-progress">
                   {progressButtonsLista}
                </div>
                <div class="wizard-form">
                    <div class="wizard-panel" active>
                        <div class="content">
                            <div class="h3">Título 1</div>
                            <div class="text">Conteúdo aqui</div>
                        </div>
                        <div class="wizard-panel-btn">
                            <button class="br-button is-primary wizard-btn-next" type="button">Avançar</button>
                        </div>
                    </div>
                    <div class="wizard-panel">
                        <div class="content">
                            <div class="h3">Título 2</div>
                            <div class="text">Conteúdo aqui</div>
                        </div>
                        <div class="wizard-panel-btn">
                            <button class="br-button is-secondary wizard-btn-prev" type="button">Voltar</button>
                            <button class="br-button is-primary wizard-btn-next" type="button">Avançar</button>
                        </div>
                    </div>
                    <div class="wizard-panel">
                        <div class="wizard-panel-content">
                            <div class="h3">Título 3</div>
                            <div class="text">Conteúdo aqui</div>
                        </div>
                        <div class="wizard-panel-btn">
                            <button class="br-button is-secondary wizard-btn-prev" type="button">Voltar</button>
                            <button class="br-button is-primary wizard-btn" type="button">Avançar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Wizard