import React, { useState, useEffect } from 'react'
import ReactHtmlParser from 'react-html-parser';


import Card from '../../components/@govbr/Card/Card'
import Button from '../../components/@govbr/Button/Button'
import Select from '../@govbr/Select/Select';
import TextArea from '../@govbr/Textarea/Textarea'
import './Secao.css'

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/pt-br';

const Secao = props => {

    const [expandido, setExpandido] = useState(true);
    const [mostrarAdd, setMostrarAdd] = useState(false);
    const [mostrarNovaSecao, setMostrarNovaSecao] = useState(false);
    const [textAreaNovaSecao, setTextAreaNovaSecao] = useState([])
    const [selectNovaSecao, setSelectNovaSecao] = useState([])

    useEffect(() => {
        if (mostrarNovaSecao) {
            window.scroll(0, window.document.getElementById('nova-secao' + props.id).offsetTop)
        }
    })

    const expandirOuFechar = () => {
        setExpandido(!expandido)
    }

    const opcoes_posicao = []
    for (let i = 1; i < props.quantidaSecoes + 1; i++) {
        opcoes_posicao.push(<option key={i} value={i}>{i}</option>)
    }

    const reordenarSecoes = (posicao_nova) => {
        const posicao_antiga = props.id
        props.reordenarSecao(posicao_antiga, posicao_nova)
    }

    const manipularTextAreaNovaSecao = ( event, editor ) => {
        setTextAreaNovaSecao(editor.getData())
    }

    const manipularSelectNovaSecao = (e) => {
        setSelectNovaSecao(e)
    }


    return (
        <div>
            <div onMouseEnter={() => { setMostrarAdd(true) }}
                onMouseLeave={() => { setMostrarAdd(false) }}>
                <Card
                    classes={mostrarAdd ? "mb-n3 pb-3" : "pb-3"}
                    header={
                        <div>
                            <Button mini circle tertiary black classes="float-right text-muted" click={props.remover}>
                                <i className="fa fa-times-circle" aria-hidden="true"></i>
                            </Button>

                            {expandido ?
                                <Button mini circle tertiary black classes="float-right text-muted" click={expandirOuFechar}>
                                    <i className="fa fa-minus-circle"></i>
                                </Button> : null}
                            {!expandido ?
                                <Button mini circle tertiary black classes="float-right text-muted" click={expandirOuFechar}>
                                    <i className="fa fa-expand"></i>
                                </Button> : null}
                            <Select key={Number(props.id) + props.quantidaSecoes}
                                classes={"select-posicao is-small float-right"}
                                value={props.id}
                                naoMarcarOpcao={true}
                                click={reordenarSecoes}
                            >
                                {opcoes_posicao}
                            </Select>
                            <div>
                                <div className="pt-1"><strong >{props.titulo}</strong></div>
                            </div>
                        </div>
                    }
                >
                    {expandido ? ReactHtmlParser(props.conteudo) : null}

                </Card>
                {mostrarAdd ?
                    <Button mini circle tertiary black classes="text-muted botao-add-secao"
                        click={() => { setMostrarNovaSecao(true); setMostrarAdd(false); }
                        }>
                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                    </Button> :
                    null}
            </div>


            <div style={{ display: !mostrarNovaSecao ? 'none' : 'unset' }} id={'nova-secao' + props.id}>
                <Card>
                    {/* <TextArea
                        height={200}
                        change={manipularTextAreaNovaSecao}
                    /> */}

                    <CKEditor
                        config={{
                            language: 'pt-br'
                        }}
                        editor={ ClassicEditor }
                        data=""
                        // onChange={ ( event, editor ) => {
                        //     const data = editor.getData();
                        //     console.log( { event, editor, data } );
                        // } }
                        onChange = { manipularTextAreaNovaSecao }
                        onBlur={ ( event, editor ) => {
                            console.log( 'Blur.', editor );
                        } }
                        onFocus={ ( event, editor ) => {
                            console.log( 'Focus.', editor );
                        } }
                    />

                    <Select click={manipularSelectNovaSecao} label="Tipo de seção" mini classes="mt-2">
                        <option value="Pedidos">Pedidos</option>
                        <option value="Fundamentos Juridicos">Fundamentos Juridicos</option>
                        <option value="Assinatura">Assinatura</option>
                    </Select>
                    <Button primary mini classes="mt-2"
                        click={() => {
                            props.salvarNovaSecao(Number(props.id) + 1, selectNovaSecao, textAreaNovaSecao);
                            setMostrarNovaSecao(false)
                        }}
                    >Salvar</Button>
                    <Button primary mini classes="mt-2 ml-1"
                        click={() => { setMostrarNovaSecao(false) }}
                    >Cancelar</Button>
                </Card>
            </div>


        </div>
    )
}


export default Secao
