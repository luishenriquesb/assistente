import React, { Component } from 'react'
import Documento from '../../components/Documentos/Documento'

class Editor extends Component {
    state = {
        secoes:{
            1: {titulo:'Introdução', conteudo: <div>EXCELENTÍSSIMO(A) SENHOR(A) JUIZ(A) FEDERAL DA VARA</div>},
            2: {titulo:'Qualificação do assistido', conteudo: <div>
                A DEFENSORIA PÚBLICA DA UNIÃO, órgão essencial à função
jurisdicional do Estado (art. 134 da CF), com atribuições e prerrogativas insculpidas na Lei
Complementar nº 80/94, por intermédio da Defensora Pública Federal signatária, assistindo
juridicamente {'{assistido.nome}'}, {'{assistido.nacionalidade}'}, {'{assistido.ocupacao}'},
{'{assistido.estado-civil}'}, nascido aos {'{assistido.nascimento}'}, portador do RG n.
{'{assistido.rg}'}, inscrito no CPF sob o n. {'{assistido.cpf}'}, residente e domiciliado na
{'{assistido.endereco}'}, telefone: {'{assistido.telefone}'}, vem à presença de Vossa Excelência,
propor a presente
            </div>},
            3:{titulo:'Pretensão', conteudo:''},
            4:{titulo:'Fatos', conteudo:''},
        }
    }

    removerSecao = (id) => {
        const secoes_atualizadas = {...this.state.secoes}
        const quant_secoes = Object.keys(this.state.secoes).length
        for (let i = Number(id); i <= quant_secoes; i++) {
            secoes_atualizadas[i] = this.state.secoes[i+1]
        }

        delete secoes_atualizadas[quant_secoes]
        this.setState({
            secoes:secoes_atualizadas
        })
    }

    reordenarSecao = (posicao_antiga, posicao_nova) => {
       posicao_antiga = Number(posicao_antiga)
       posicao_nova = Number(posicao_nova)
       const secoes_atualizada = {...this.state.secoes}
       
        if (posicao_antiga < posicao_nova) {
            for (let i = posicao_antiga; i < posicao_nova; i++) {
                secoes_atualizada[i] = secoes_atualizada[i+1]
            }
        }else{
            for (let i = posicao_antiga; i > posicao_nova; i--) {
                secoes_atualizada[i] = secoes_atualizada[i-1]
            }
        }
       secoes_atualizada[posicao_nova]=this.state.secoes[posicao_antiga]
       this.setState({secoes:secoes_atualizada})
    }

    salvarNovaSecao=(id, titulo, conteudo)=>{
        
        const secoes_atualizada = {...this.state.secoes}
        for (let i = id; i <= Object.keys(this.state.secoes).length; i++) {
            secoes_atualizada[i+1] = this.state.secoes[i]
        }
        secoes_atualizada[id]={titulo:titulo,conteudo:conteudo}
        this.setState({secoes:secoes_atualizada})
    }
    
    render() {
        return (
                <Documento secoes = {this.state.secoes}
                    removerSecao = {(e)=>this.removerSecao(e)}
                    reordenarSecao = {this.reordenarSecao}
                    salvarNovaSecao = {this.salvarNovaSecao}
                />
        )
    }
}

export default Editor
