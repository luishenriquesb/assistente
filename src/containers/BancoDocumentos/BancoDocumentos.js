import React, { Component, Fragment } from 'react'
import Textarea from '../../components/@govbr/Textarea/Textarea'
import Button from '../../components/@govbr/Button/Button'
import Input from '../../components/@govbr/Input/Input'
import Resultados from './Resultados'
import Select from '../../components/@govbr/Select/Select'

export class BancoDocumentos extends Component {
    state = {
        resultados:[
            {tipo: "Agravo", processo: "123456", unidade: 'Unidade da Defensoria Pública no Fórum de Maranguape', cidade:'Maranguape', nome: "agravo.docx" },
            {tipo: "Petição Inicial", processo: "233456", unidade: 'Núcleo da Defensoria Pública em Juazeiro do Norte', cidade:'Juazeiro do Norte', nome: "peti.docx" },
            {tipo: "Apelação", processo: "553456", unidade: 'Núcleo da Defensoria Pública em Maracanaú', cidade:'Maracanaú', nome: "apelou-perdeu.docx" },
            {tipo: "Recurso Extraordinário", processo: "123456",unidade: '11º Unidade da Defensoria Pública em Juizado Especial', cidade:'Fortaleza',  nome: "extr.docx" },
            {tipo: "Contrrarazoes", processo: "683456", unidade: 'Unidade da Defensoria Pública no Fórum de Maranguape', cidade:'Maranguape', nome: "contratudo.docx" },
            {tipo: "Agravo", processo: "013456", unidade: '17º Unidade da Defensoria Pública em Juizado Especial', cidade:'Fortaleza', nome: "agravo-final-versao1.docx" },
            {tipo: "Agravo", processo: "123456", unidade: 'Unidade da Defensoria Pública no Fórum de Maranguape', cidade:'Maranguape', nome: "agravo.docx" },
            {tipo: "Petição Inicial", processo: "233456", unidade: 'Núcleo da Defensoria Pública em Juazeiro do Norte', cidade:'Juazeiro do Norte', nome: "peti.docx" },
            {tipo: "Apelação", processo: "553456", unidade: 'Núcleo da Defensoria Pública em Maracanaú', cidade:'Maracanaú', nome: "apelou-perdeu.docx" },
            {tipo: "Recurso Extraordinário", processo: "123456",unidade: '11º Unidade da Defensoria Pública em Juizado Especial', cidade:'Fortaleza',  nome: "extr.docx" },
       
        ],
        terminouBusca: false
    }

    comporNovoDocumento = () =>{
        this.props.history.push('/editor?compordocumento=1')
    }


    buscar = () => {
        this.setState({terminouBusca:true})
    }
    render() {
        return (
            <Fragment>
                <div className="row" >
                    <div className="col-3">
                        <Input label='Processo:' />
                    </div>
                    <div className="col">
                        <Select label='Tipo:' click={()=>null}>
                            <option>Selecione</option>
                            <option>Agravo</option>
                        </Select>
                    </div>
                </div>
                <div className='row mt-2'>
                <div className='col-3'>
                    <Input
                        id="3"
                        label="Cidade:"
                        autocomplete_data={['Fortaleza',
                            'Caucaia',
                            'Juazeiro do Norte',
                            'Maracanaú',
                            'Sobral',
                            'Crato',
                            'Itapipoca',
                            'Maranguape',
                            'Iguatu',
                            'Quixadá',
                        ]}
                    />
                </div>
                <div className='col'>
                    <Input
                        id="4"
                        label="Unidade:"
                        autocomplete_data={[
                            '11º Unidade da Defensoria Pública em Juizado Especial - Fortaleza',
                            '12º Unidade da Defensoria Pública em Juizado Especial - Fortaleza',
                            '17º Unidade da Defensoria Pública em Juizado Especial - Fortaleza',
                            '23º Unidade da Defensoria Pública em Juizado Especial - Fortaleza',
                            'Central de Certidão e Apoio às Varas de Execução Ciminal - Fortaleza',
                            'Defensorias Cíveis - Fortaleza',
                            'Defensorias de Sucessões - Fortaleza',
                            'Núcleo da Defensoria Pública em Caucaia - Caucaia',
                            'Núcleo da Defensoria Pública em Crateús - Crateús',
                            'Núcleo da Defensoria Pública em Juazeiro do Norte - Juazeiro do Norte',
                            'Núcleo da Defensoria Pública em Maracanaú - Maracanaú',
                        ]}
                    />
                </div>
                    </div>
                <Button classes="mt-5 mb-1" primary click={this.buscar}>Buscar</Button>
                
                {!this.state.terminouBusca ? null: 
                <Resultados
                comporNovoDocumento={this.comporNovoDocumento}
                titulo="Resultados da busca"
                resultados={this.state.resultados} />        
                }
            </Fragment>
        )
    }
}

export default BancoDocumentos
