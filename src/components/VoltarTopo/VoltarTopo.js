import React from 'react'
import Button from '../../components/@govbr/Button/Button'

const voltarTopo = () => {

    const voltarTopo = (e) => {
        window.scrollTo(0, 0);
    }

    return(
            <div className="fixed-bottom text"
                 style={{bottom:'10%', left: '92%'}}>
                <Button classes="action circle" click={(e)=>voltarTopo(e)}>
                <i class="fa fa-chevron-up"/>
                </Button>
            </div>
    )
}

export default voltarTopo