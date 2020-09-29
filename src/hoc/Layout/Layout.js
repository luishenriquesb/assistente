import React, { Component } from 'react'
import BRTemplateBase from '@govbr/dsgov/dist/js/components/template-base'
import Header from '../../components/@govbr/Header/Header'
import Scrim from '../../components/@govbr/Scrim/Scrim';
import Button from '../../components/@govbr/Button/Button'
import BreadCrumb from '../../components/@govbr/Breadcrumb/Breadcrumb'
import index from 'uuid-random';
import {NavLink} from 'react-router-dom';
import {Route, Switch, Redirect, withRouter,} from 'react-router-dom'
import Detalhe from '../../containers/Detalhe/Detalhe';
import Editor from '../../containers/Editor/Editor'
import BancoDocumentos from '../../containers/BancoDocumentos/BancoDocumentos'
import ComposicaoDocumentos from '../../containers/ComposicaoDocumentos/ComposicaoDocumentos';

class Layout extends Component {

    componentDidMount(){
        const brTemplateBase = window.document.querySelector('.template-base')
        const template = new BRTemplateBase('template-base', brTemplateBase)
    }    
    
    fecharDrawer(){
        window.document.querySelector('.scrim-menu').removeAttribute('show')
    }

    
    render() {
        
        return (         

            <div >
                <ul class="accessibility-links">
      <li><a class="br-button" accesskey="1" href="#main-content">Ir para o conteúdo</a></li>
      <li><a class="br-button" accesskey="2" href="#main-nav">Ir para o menu principal</a></li>
      <li><a class="br-button" accesskey="3" href="#context-nav">Ir para o menu auxiliar</a></li>
    </ul>
                <div className="scrim-menu" style={{zIndex:100000}}>
                    <div className="br-menu">
                        <nav class="folders">
                            <div class="folder">
                                <ul>
                                    <li>
                                    <NavLink
                                    className="item"
                                    exact
                                    onClick={this.fecharDrawer}
                                    to="/">
                                            <div class="content">Processos</div>
                                            <div className="suport"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
                                    </NavLink>
                                    </li>
                                    <li>
                                    <NavLink
                                    onClick={this.fecharDrawer}
                                    className="item"
                                    exact
                                    to="/banco-documentos">
                                            <div class="content">Documentos</div>
                                            <div className="suport"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
                                    </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                <Header
                    botaoMenu={
                        <Button circle>
                            <i class="fa fa-bars" aria-hidden="true"></i>
                        </Button>
                    }
                titulo="SERPRO ComDoc"/>
                
                
                <div className="container-lg">
                    <div className='row'>

                        <div className="col container-main">
                            <BreadCrumb
                                home={<a href="#">
                                    <span class="sr-only">Página inicial</span>
                                    <i class="icon fas fa-home"></i>
                                    </a>}
                                
                            >
                             <NavLink to='/'> Teste
                            </NavLink>    
                            <span>Teste</span> 
                            </BreadCrumb>
                            
                            <div className='main-content'>
                                <Switch>
                                    <Route path='/detalhe' component={Detalhe} />
                                    <Route path='/editor' component={Editor} />
                                    <Route path='/banco-documentos' component={BancoDocumentos} />
                                    <Route path='/' exact component={ComposicaoDocumentos} />
                                    <Redirect to="/" />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="br-footer">
                    <div className="container-lg">
                        {/* <div className='logo text-center'>@Luis</div> */}
                    </div>
                </div>
            </div>
       
       )
    }
}

export default Layout