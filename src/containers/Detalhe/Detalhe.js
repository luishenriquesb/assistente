import React, { Component, Fragment } from 'react'
import {NavLink} from 'react-router-dom'
import Informacoes from '../../components/Informacoes/Informacoes'
import Data from '../../components/Resultados/Resultado'
import Documentos from '../../components/Documentos/Documentos'
import Button from '../../components/@govbr/Button/Button'
import Scrim from '../../components/@govbr/Scrim/Scrim'
import Select from '../../components/@govbr/Select/Select'

export default class Detalhe extends Component {

   
  

    prosseguir=()=>{
        this.props.history.push('/editor')
    }


    componentDidMount(){
        this.props.breadcrumb(
            [<NavLink to='/'>Processos</NavLink>,
             <span>Detalhe Processo</span>
            ]
        )
    }
    
    render() {
        return (
            <Fragment>

               
                <Informacoes />

                <Button classes='mt-5' primary 
                    // click={this.criarNovoDocumento}
                    click={this.prosseguir}
                    >
                    Novo documento <i class="fas fa-plus"></i>
                </Button><br />

                <Documentos titulo='Documentos' />
            </Fragment>
        )
    }
}
