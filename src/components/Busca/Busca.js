import React, { Fragment } from 'react'
import Input from '../@govbr/Input/Input'
import Button from '../@govbr/Button/Button'
const busca = (props) => {
    return (
        <Fragment>
            <div className='row'>
                <div className='col-3'>
                    <Input
                        id="1"
                        label="Processo:"
                    />
                </div>
                <div className='col'>
                    <Input
                        id="2"
                        label="Assistido:"
                    />
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


            <Button classes="mt-5" primary
                click={props.buscar}
            >Buscar
            </Button>
        </Fragment>
    )
}

export default busca