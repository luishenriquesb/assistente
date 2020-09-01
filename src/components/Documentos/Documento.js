import React from 'react'
import Secao from './Secao'
import Button from '../../components/@govbr/Button/Button'
const Documento = (props) => {
    const secoes = []
    for (let key in props.secoes){
        let item = props.secoes[key]
        secoes.push(
            <Secao key={key}
                titulo={item.titulo}
                conteudo={item.conteudo} id={key}
                quantidaSecoes={Object.keys(props.secoes).length}
                reordenarSecao={props.reordenarSecao}
                salvarNovaSecao={props.salvarNovaSecao}
                remover={() => props.removerSecao(key)}                    
            />
        )
    }
    return (
        <div>
            {secoes}
            <Button primary classes="mt-2 mb-2">Salvar</Button>
        </div>
    )
}

export default Documento
