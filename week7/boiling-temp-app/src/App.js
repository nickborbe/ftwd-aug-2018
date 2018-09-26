import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
