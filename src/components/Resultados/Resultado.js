import React from 'react'
import ReactHtmlParser from 'react-html-parser';

import Datatable from '../@govbr/Datable/Datatable'
import Table from '../@govbr/Datable/Table'
import Checkbox from '../@govbr/Checkbox/Checkbox'
import Pagination from '../@govbr/Datable/Paginator'

import classes from './Resultado.module.css'

const resultado = (props) => {

    const linhas = props.listaResultado.map(
        item => {
            const id = item['id']
            const checkId = 'resultados-line-' + id
            return (
                <tr key={id} onDoubleClick={props.doubleClick} style={{cursor:'pointer'}}>
                    <td>
                        <div style={{ whiteSpace: 'normal' }} 
                             className={classes.ResultadoTexto}>
                            {ReactHtmlParser(item['processo'])}
                        </div>
                    </td>
                    <td>
                        <div style={{ whiteSpace: 'normal' }} 
                             className={classes.ResultadoTexto}>
                            {ReactHtmlParser(item['assistido'])}
                        </div>
                    </td>
                    <td>
                        <div style={{ whiteSpace: 'normal' }} 
                             className={classes.ResultadoTexto}>
                            {ReactHtmlParser(item['unidade'])}
                        </div>
                    </td>
                    <td>
                        <div style={{ whiteSpace: 'normal' }} 
                             className={classes.ResultadoTexto}>
                            {ReactHtmlParser(item['cidade'])}
                        </div>
                    </td>
                    
                </tr>)
        }
    )

    return (
        <Datatable id="resultados" titulo={props.titulo} classes="is-datatable is-checkbox mt-2">
            <Table>
                <thead>
                    <tr>
                       <th scope="col">Processo</th>
                       <th scope="col">Assistido</th>
                       <th scope="col">Unidade</th>
                       <th scope="col">Cidade</th>
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

export default resultado