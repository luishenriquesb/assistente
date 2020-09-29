import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout'

import { render } from '@testing-library/react';

class App extends Component{

  render() {
    
    return (
      <Layout/>
    );
  }
  
}

export default App;
