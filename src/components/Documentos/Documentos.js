import React from 'react'
import Datatable from '../@govbr/Datable/Datatable'
import Table from '../@govbr/Datable/Table'
import Pagination from '../@govbr/Datable/Paginator'
const Documentos = (props) => {
    let linhas = [
        {tipo: 'Petição Inicial', autor: 'Ciro Gomes', data: '01/01/2030'},
        {tipo: 'Agravo', autor: 'Francisco Everardo Oliveira Silva', data: '02/02/2030'},
        {tipo: 'Alegações finais', autor: 'Antônio José Rodrigues Cavalcante', data: '03/03/2030'},
    ]

    linhas = linhas.map(item=>{
        return(<tr><td>{item['tipo']}</td><td>{item['autor']}</td><td>{item['data']}</td></tr>)
        })
    return (
        <Datatable id="resultados" titulo={props.titulo} classes="is-datatable is-checkbox mt-5">
        <Table>
            <thead>
                <tr>
                   <th scope="col">Tipo</th>
                   <th scope="col">Autor</th>
                   <th scope="col">Data</th>
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

export default Documentos
