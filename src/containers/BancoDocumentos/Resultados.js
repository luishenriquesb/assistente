import React from 'react'
import ReactHtmlParser from 'react-html-parser';

import Datatable from '../../components/@govbr/Datable/Datatable'
import Table from '../../components/@govbr/Datable/Table'
import Checkbox from '../../components/@govbr/Checkbox/Checkbox'
import Pagination from '../../components/@govbr/Datable/Paginator'

import classes from './Resultado.module.css'

const resultados = (props) => {

    let i = 0
    const linhas = props.resultados.map(
        item => {
            i++
            const checkId = 'resultados-line-' + i
            return (
                <tr key={i}>
                    <td><Checkbox id={checkId} name="check" /></td>
                    <td>
                        <div style={{ whiteSpace: 'normal' }} >
                            { item['tipo'] }
                        </div>
                    </td>
                    <td>
                        <div style={{ whiteSpace: 'normal' }} >
                            { item['processo'] }
                        </div>
                    </td>
                    <td>
                        <div style={{ whiteSpace: 'normal' }} >
                           <a href="#"> <u>{ item['nome'] }</u> </a>
                        </div>
                    </td>
                    
                </tr>)
        }
    )

    return (
        <Datatable id="resultados" titulo={props.titulo} classes="is-datatable is-checkbox">
            <Table>
                <thead>
                    <tr>
                        <th scope="col">
                            <Checkbox id="resultados-check-all"
                                      name="check" />
                        </th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Processo</th>
                        <th scope="col">Arquivo</th>
                    </tr>
                </thead>
                <tbody>
                    {linhas}
                </tbody>
            </Table>
            <Pagination/>
        </Datatable>
    )
}

export default resultados