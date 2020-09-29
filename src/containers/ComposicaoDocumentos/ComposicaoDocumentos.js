import React, { Component, Fragment } from 'react'

import Busca from '../../components/Busca/Busca'
import Resultados from '../../components/Resultados/Resultado'


class ComposicaoDocumentos extends Component {

  state = {
    'listaResultado': [
      {id:1,processo:123456,assistido:'Raimundo Nonato', unidade:'Unidade da Defensoria Pública no Fórum de Maranguape', cidade:'Maranguape'},
      {id:2,processo:783456,assistido:'Antônio Renato Aragão', unidade:'7º Unidade da Defensoria Pública em Juizado Especial', cidade:'Fortaleza'},
      {id:3,processo:953456,assistido:'Antonio Carlos Belchior', unidade:'Unidade da Defensoria Pública no Fórum de Sobral', cidade:'Sobral'},
      {id:1,processo:123456,assistido:'Raimundo Nonato', unidade:'Unidade da Defensoria Pública no Fórum de Maranguape', cidade:'Maranguape'},
      {id:2,processo:783456,assistido:'Raimundo Fagner Cândido Lopes', unidade:'7º Unidade da Defensoria Pública em Juizado Especial', cidade:'Fortaleza'},
      {id:3,processo:953456,assistido:'Antonio Carlos Belchior', unidade:'Unidade da Defensoria Pública no Fórum de Sobral', cidade:'Sobral'},
      {id:1,processo:123456,assistido:'Luiz Gonzaga do Nascimento', unidade:'Núcleo da Defensoria Pública em Juazeiro do Norte', cidade:'Juazeiro do Norte'},
      {id:2,processo:783456,assistido:'Raimundo Fagner Cândido Lopes', unidade:'7º Unidade da Defensoria Pública em Juizado Especial', cidade:'Fortaleza'},
      {id:3,processo:953456,assistido:'Joaquim dos Santos Rodrigues (Seu Lunga)', unidade:'Unidade da Defensoria Pública no Fórum de Sobral', cidade:'Sobral'},
      {id:1,processo:123456,assistido:'Raimundo Nonato', unidade:'Unidade da Defensoria Pública no Fórum de Maranguape', cidade:'Maranguape'},
    ],
    'campoBusca': '',
    'mostrarVoltarTopo': false,
    'realizouBusca':false,
  }

  componentDidMount() {
    window.onscroll = () => this.handleScroll()
  }

  handleScroll = (e) => {
    if (document.documentElement.scrollTop > 200) {
      this.setState({ 'mostrarVoltarTopo': true })
    }
    else {
      this.setState({ 'mostrarVoltarTopo': false })
    }
  }

  selecionarResultado = e => {
    this.props.history.push('/detalhe')
  }

  buscar = e => {
    this.setState({realizouBusca:true})
  }

  render() {

    return (
      <Fragment>
        <Busca buscar={(e)=>{this.buscar(e)}}/>
        {this.state.realizouBusca ?   
        <Resultados
          titulo="Resultado"
          listaResultado={this.state.listaResultado}
          doubleClick={(e)=>this.selecionarResultado(e)}
          
        />: null}
      
      </Fragment>
    )
  }
}

export default ComposicaoDocumentos