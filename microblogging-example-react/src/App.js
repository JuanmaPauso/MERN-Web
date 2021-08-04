import React, { Component } from 'react';
import Saludo from './Saludo'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         <h1 className="App-title">Bienvenido al developeo</h1>
        
        </header>

        <Saludo />
   
      </div>
    );
  }
}

export default App;
