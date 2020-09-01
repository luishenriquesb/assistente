import React from 'react'
import Select from '../Select/Select'
import Button from '../Button/Button'

const footer = (props) => {
    return (
        <div className="footer">
        <div className="bottom-bar">
            <div className="items">
                <span>Exibir:</span>
                <Select id="datatable-checkbox-items" is-small>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                </Select>
                <span className="divider"></span><span>1-10 de 50 itens</span>
            </div>
            <div className="pagination">
                <div className="selectors">

                <Select id="datatable-checkbox-pagination" is-small>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </Select>
                    <span>de 3 páginas</span><span className="divider"></span>
                </div>
                <div className="arrows">
                <Button classes="is-circle is-secondary">
                    <i className="fa fa-chevron-left"></i>
                </Button>
                <Button classes="is-circle is-secondary">
                    <i className="fa fa-chevron-right"></i>
                </Button>
                </div>
            </div>
        </div>
    </div>
    )
}
export default footer