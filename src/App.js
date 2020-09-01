import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout'
import ComposicaoDocumentos from './containers/ComposicaoDocumentos/ComposicaoDocumentos';

import {Route, Switch, Redirect, withRouter,} from 'react-router-dom'
import { render } from '@testing-library/react';
import Detalhe from './containers/Detalhe/Detalhe';
import Editor from './containers/Editor/Editor'
import BancoDocumentos from './containers/BancoDocumentos/BancoDocumentos'

class App extends Component{

  render() {
    let routes = (
      <Switch>
        <Route path='/detalhe' component={Detalhe}/>
        <Route path='/editor' component={Editor}/>
        <Route path='/banco-documentos' component={BancoDocumentos}/>
        <Route path='/' exact component={ComposicaoDocumentos}/>
        <Redirect to="/" />
      </Switch>
    )
    return (
      <div>
      <Layout>
        {routes}
      </Layout>
      </div>
    );
  }
  
}

export default withRouter(App);
