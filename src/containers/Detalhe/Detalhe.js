import React, { Component, Fragment } from 'react'
import Informacoes from '../../components/Informacoes/Informacoes'
import Data from '../../components/Resultados/Resultado'
import Documentos from '../../components/Documentos/Documentos'
import Button from '../../components/@govbr/Button/Button'
import Modal from '../../components/@govbr/Modal/Modal'
import Scrim from '../../components/@govbr/Scrim/Scrim'
import Select from '../../components/@govbr/Select/Select'

export default class Detalhe extends Component {

    state = {
        showModal: false
    }
    criarNovoDocumento=()=>{
        this.setState({showModal:true})
    }

    prosseguir=()=>{
        this.props.history.push('/editor')
    }

    fecharModal = (e) =>{
        console.log(e.target)
        this.setState({showModal:false})
    }
    
    render() {
        return (
            <Fragment>

                {this.state.showModal ? <Modal
                    fecharModal={this.fecharModal}
                    footer={
                        <div className="ml-2">
                            <Button primary click={this.prosseguir}>Prosseguir</Button> <span> </span>
                            <Button primary click={this.fecharModal}>Cancelar</Button>
                        </div>
                    }
                >
                    <div className="text-bold ml-2 mt-2 text-left">
                        Qual é o tipo de documento que deseja criar?
                        <Select click={()=>null} >
                            <option>Petição Inicial</option>
                            <option>Agravo</option>
                            <option>Alegações Finais</option>
                        </Select>
                    </div>
                </Modal> : null}
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
