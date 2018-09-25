import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';

class App extends Component {
  render() {
    return (
      <div className="App">

      <Navbar/>
      <FormField content="Name" inputType="text" holder="e.g Alex Smith"/>
      <FormField content="Email" inputType="email" holder="e.g alexsmith@gmail.com"/>
      
    

      </div>
    );
  }
}





export default App;
