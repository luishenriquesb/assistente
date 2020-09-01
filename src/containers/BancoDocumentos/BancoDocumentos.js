import React, { Component, Fragment } from 'react'
import Textarea from '../../components/@govbr/Textarea/Textarea'
import Button from '../../components/@govbr/Button/Button'
import Input from '../../components/@govbr/Input/Input'
import Resultados from './Resultados'
import Select from '../../components/@govbr/Select/Select'

export class BancoDocumentos extends Component {
    state = {
        resultados:[
            {tipo: "Agravo", processo: "123456", nome: "agravo.docx" },
            {tipo: "Agravo", processo: "123456", nome: "agravo.docx" },
            {tipo: "Agravo", processo: "123456", nome: "agravo.docx" },
            {tipo: "Agravo", processo: "123456", nome: "agravo.docx" },
            {tipo: "Agravo", processo: "123456", nome: "agravo.docx" },
            {tipo: "Agravo", processo: "123456", nome: "agravo.docx" },
        ]
    }
    render() {
        return (
            <Fragment>
                <div className="row" >
                    <div className="col">
                        <Select label='Tipo:' click={()=>null}>
                            <option>Selecione</option>
                            <option>Agravo</option>
                        </Select>
                    </div>
                    <div className="col">
                        <Input label='Processo:' />
                    </div>

                </div>
                {/* <Textarea
                id="1"
                label="Busca"
                /> */}
                <Button classes="mt-5 mb-5" primary>Buscar
                </Button>
                
                {this.state.resultados.length === 0 ? null: 
                <Resultados
                titulo="Resultados da busca"
                resultados={this.state.resultados} />        
                }
            </Fragment>
        )
    }
}

export default BancoDocumentos
