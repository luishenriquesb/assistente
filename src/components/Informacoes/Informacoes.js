import React from 'react'
import Input from '../../components/@govbr/Input/Input'

const Informacoes = (props) => {
    return (
        (
            <div>
                <div className="row">
                    <div className='col'>
                        <Input label='Processo'
                            disabled
                            value='123456'
                        />
                    </div>
                    <div className='col'>
                        <Input label='Assistido'
                            disabled
                            value='Raimundo Nonato'
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className='col'>
                        <Input label='Unidade'
                            disabled
                            value='Unidade da Defensoria Pública no Fórum de Maranguape' />
                    </div>
                    <div className='col'>
                        <Input label='Cidade'
                            disabled
                            value='Maranguape' />
                    </div>
                </div>
            </div>
        )
    )
}

export default Informacoes