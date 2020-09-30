import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout'
import {withRouter} from 'react-router-dom'
import { render } from '@testing-library/react';

class App extends Component{

  render() {
    
    return (
      <Layout/>
    );
  }
  
}

export default withRouter(App);
