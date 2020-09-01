import React, { Fragment } from 'react'
import Input from '../@govbr/Input/Input'
import Button from '../@govbr/Button/Button'
const busca = (props) => {
    return (
        <Fragment>
            <Input
            id="1"
            label="Numero processo"
            />
            <Button classes="mt-5" primary
               click={props.buscar}
            >Buscar
            </Button>
        </Fragment>
    )
}

export default busca