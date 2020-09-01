import React, {Fragment} from 'react'

const accordion = (props) => {

    const items = []
    const filhos = props.children
    const single = props.hasOwnProperty("single")

    const properties = normalizarPropsDsGov(props)

    const activeItem = (item) => {
        item.setAttribute("active", "")
        const icon = item.querySelector('.icon')
        icon.children[0].classList.remove('fa-angle-down')
        icon.children[0].classList.add('fa-angle-up')
    }
    const deactiveItem = (item) => {
        item.removeAttribute("active")
        const icon = item.querySelector('.icon')
        icon.children[0].classList.add('fa-angle-down')
        icon.children[0].classList.remove('fa-angle-up')
    }

    const toggle = (e) => {
        const current = e.currentTarget

        if (single) {
            for (let item of current.parentNode.querySelectorAll('.item')){
                if(item === current) {
                    if (!item.hasAttribute("active")) 
                       activeItem(item)
                    else
                        deactiveItem(item)
                }
                else {
                    deactiveItem(item)
                }
            }
        }
        else {
            if (!current.hasAttribute("active")) {
                activeItem(current)
            }
            else {
                deactiveItem(current)
            }
        }

    }
    

    for (let id = 0; id < filhos.length; id+=2) {
        const titulo = filhos[id];
        const conteudo = filhos[id+1];

        items.push(
            <Fragment key={id}>
                <div className="item" onClick={(e) => toggle(e)}>
                <button className="header" type="button">
                    <span className="icon"><i className="fas fa-angle-down"></i></span>
                    <span className="title">{titulo}</span></button>
                </div>
                <div className="content">
                    {conteudo}
                </div>
            </Fragment>
        )
    }
  
    return (
        <div className="br-accordion" {...properties}>
            {items}
        </div>
    )
}

export default accordion
