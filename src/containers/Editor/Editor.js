import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import qs from 'qs'

import Documento from '../../components/Documentos/Documento'
import Tabs from '../../components/@govbr/Tabs/Tabs'
import Datatable from '../../components/@govbr/Datable/Datatable'
import Table from '../../components/@govbr/Datable/Table'
import Select from '../../components/@govbr/Select/Select'
import Button from '../../components/@govbr/Button/Button'
import Tooltip from '../../components/@govbr/Tooltip/Tooltip'
import Upload from '../../components/@govbr/Upload/Upload'
import Modal from '../../components/@govbr/Modal/Modal'

import { mapToStyles } from '@popperjs/core/lib/modifiers/computeStyles'

class Editor extends Component {
    state = {
        secoes: {
            1: { titulo: 'Introdução', conteudo: '<div>EXCELENTÍSSIMO(A) SENHOR(A) JUIZ(A) FEDERAL DA VARA</div>' },
            2: {
                titulo: 'Qualificação do assistido', conteudo: `<div>
                    A DEFENSORIA PÚBLICA DA UNIÃO, órgão essencial à função
                    jurisdicional do Estado (art. 134 da CF), com atribuições e prerrogativas insculpidas na Lei
                    Complementar nº 80/94, por intermédio da Defensora Pública Federal signatária, assistindo
juridicamente <b>{assistido.nome}</b>, <b>{assistido.nacionalidade}</b>, <b>{assistido.ocupacao}</b>,
<b>{assistido.estado-civil}</b>, nascido aos <b>{assistido.nascimento}</b>, portador do RG n.
<b>{assistido.rg}</b>, inscrito no CPF sob o n. <b>{assistido.cpf}</b>, residente e domiciliado na
<b>{assistido.endereco}</b>, telefone: <b>{assistido.telefone}</b>, vem à presença de Vossa Excelência,
propor a presente
            </div>`
            },
            3: { titulo: 'Pretensão', conteudo: '' },
            4: { titulo: 'Fatos', conteudo: '' },
        },
        guiaAtiva: 0,
        atualizarTabs: false,
        mostrarRecomendacoes: false,
        modelos: [
            { recomendacao: '1°', descricao: 'Modelo genérico de petição inicial', autor: 'Administrador', usos: '10x' },
            { recomendacao: '2°', descricao: '', autor: 'Dr. Rogerio Ceni', usos: '12x' },
            { recomendacao: '3°', descricao: 'Petição inicial para casos complicados', autor: 'Dr. Ronaldo Nazário', usos: '5x' },
            { recomendacao: '4°', descricao: 'Modelo de petição inicial para restabelecimento de fornecimento de medicamentos', autor: 'Administrador', usos: '2x' },
            { recomendacao: '5°', descricao: 'Modelo de petição inicial para solicitação de internação médica', autor: 'Administrador', usos: '1x' },
        ],
        showModal: false
    }

    removerSecao = (id) => {
        const secoes_atualizadas = { ...this.state.secoes }
        const quant_secoes = Object.keys(this.state.secoes).length
        for (let i = Number(id); i <= quant_secoes; i++) {
            secoes_atualizadas[i] = this.state.secoes[i + 1]
        }

        delete secoes_atualizadas[quant_secoes]
        this.setState({
            secoes: secoes_atualizadas
        })
    }

    reordenarSecao = (posicao_antiga, posicao_nova) => {
        posicao_antiga = Number(posicao_antiga)
        posicao_nova = Number(posicao_nova)
        const secoes_atualizada = { ...this.state.secoes }

        if (posicao_antiga < posicao_nova) {
            for (let i = posicao_antiga; i < posicao_nova; i++) {
                secoes_atualizada[i] = secoes_atualizada[i + 1]
            }
        } else {
            for (let i = posicao_antiga; i > posicao_nova; i--) {
                secoes_atualizada[i] = secoes_atualizada[i - 1]
            }
        }
        secoes_atualizada[posicao_nova] = this.state.secoes[posicao_antiga]
        this.setState({ secoes: secoes_atualizada })
    }

    salvarNovaSecao = (id, titulo, conteudo) => {

        const secoes_atualizada = { ...this.state.secoes }
        for (let i = id; i <= Object.keys(this.state.secoes).length; i++) {
            secoes_atualizada[i + 1] = this.state.secoes[i]
        }
        secoes_atualizada[id] = { titulo: titulo, conteudo: conteudo }
        this.setState({ secoes: secoes_atualizada })
    }

    comporDocumento = () => {
        this.setState({showModal:false})
        console.log(this.state.guiaAtiva)
        if (this.state.guiaAtiva === 1) {
            this.setState({ guiaAtiva: 0 })
        }
        else {
            this.setState({ guiaAtiva: 1 })
        }


    }

    componentDidMount(){
        const query_string = qs.parse(this.props.location.search, { ignoreQueryPrefix: true })
        if (query_string.compordocumento) {
            this.setState({guiaAtiva:1})
            this.props.breadcrumb(
                [<NavLink to='banco-documentos'>Banco de Documento</NavLink>,
                 <span>Compor Documento</span>
                ]
            )
        }else{
            this.props.breadcrumb(
                [<NavLink to='/'>Processos</NavLink>,
                 <NavLink to='detalhe'>Detalhe Processo</NavLink>,
                 <span>Compor Documento</span>
                ]
            )
        }

    }

    fecharModal = (e) =>{
        this.setState({showModal:false})
    }

    showModal=()=>{
        this.setState({showModal:true})
    }

    render() {
        const documento = <Documento secoes={this.state.secoes}
            removerSecao={(e) => this.removerSecao(e)}
            reordenarSecao={this.reordenarSecao}
            salvarNovaSecao={this.salvarNovaSecao}
        />

        const modeloLista = this.state.modelos.map(element => {
            return (
                <tr style={{ cursor: 'pointer' }}
                    key={element['recomendacao']}
                    onClick={this.comporDocumento}
                >
                    <td>{element['recomendacao']}</td>
                    <td>{element['descricao']}</td>
                    <td>{element['autor']}</td>
                    <td>{element['usos']}</td>
                </tr>
            )
        })

        const modelo = <Datatable id="resultados" classes="is-datatable">
            <Table>
                <thead>
                    <tr>
                        <th scope="col"> </th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Criado por</th>
                        <th scope="col">Usos</th>
                    </tr>
                </thead>
                <tbody>
                    {modeloLista}
                </tbody>
            </Table>
        </Datatable>

        const aba1 = <div className='mt-4'>
            

                {this.state.showModal ? <Modal
                    fecharModal={this.fecharModal}
                    footer={
                        <div className="ml-2">
                            <Button primary click={this.comporDocumento}>Prosseguir</Button> <span> </span>
                            <Button primary click={this.fecharModal}>Cancelar</Button>
                        </div>
                    }
                >
                     <Upload label="teste" uploadFunction={null}>
                    <i class="fa fa-upload" aria-hidden="true"></i>
                    Enviar arquivo
                    </Upload>
                </Modal> : null}

           

            <div className='row' >
                <div className='col-2 mt-2' style={{ zIndex: 99 }}>
                    <div className='float-left'>Tipo de documento:</div>
                    <Tooltip place='bottom'>A sugestão do tipo de documento foi realizada por IA, mas você pode alterá-lo</Tooltip>
                </div>
                <div className='col ml-n5 ' style={{ zIndex: 99 }}>
                <Select click={() => (null)} >
                        <option value='1'>Petição Inicial</option>
                        <option value='2'>Agravo</option>
                        <option value='3'>Alegações Finais</option>
                    </Select>
                </div>
                <div className='col ' style={{ zIndex: 99 }}>
                    <Button primary click={() => {this.setState({mostrarRecomendacoes:true})}}>
                        Buscar modelos</Button>
                </div>
            </div>
            {
                !this.state.mostrarRecomendacoes ? null : 
                <div>
                    <div style={{ position: 'relative', zIndex: 98 }}>
                        <h5>Modelos recomendados:</h5>
                    </div>
                    <div style={{ marginTop: -60 }} >{modelo}</div>
                    
                    <div style={{ position: 'relative', zIndex: 98, marginTop:50 }}>
                        <h6>Compor a partir de documento pronto:</h6>
                       
                        
                        <div className="float-left mr-2">
                           
                         
                                 <NavLink
                                    className="inline-block"
                                    style={{display:'inline-block'}}
                                    exact
                                    to="/banco-documentos"
                                    >
                                    <Button primary >Buscar no banco de documentos</Button>
                                    </NavLink>
                            
                            <Tooltip place='bottom'>Você pode buscar por um documento pronto e usá-lo como modelo para compor um novo</Tooltip>
                        </div>
                        <div>
                            
                                 <NavLink
                                    exact
                                    style={{display:'inline-block'}}
                                    to="#"
                                    onClick={this.showModal}>
                                    <Button primary >Buscar no meu computador</Button>
                                    </NavLink>
                            
                            <Tooltip place='bottom'>Você pode enviar um documento pronto e usá-lo como modelo para compor um novo</Tooltip>
                        </div>
                    </div>
                </div>
            }

        </div>
        return (
            <div>
                <Tabs guiaAtiva={this.state.guiaAtiva} atualizar={this.state.atualizarTabs}
                    tabs={[
                        { titulo: "Escolher Modelo", conteudo: aba1 },
                        { titulo: "Compor Documento", conteudo: documento }
                    ]}
                />

            </div>

        )
    }
}

export default Editor
