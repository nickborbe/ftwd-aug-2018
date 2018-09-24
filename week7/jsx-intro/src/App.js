import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  render() {
    const blah = "hello this is a string"
    const formShowing = true;

    const showForm = () => {

      if(formShowing){
        return (
          <form>
          <label>Username</label>
          <input></input>
        </form>
      );
      }else{
        return "no form here"
      }

    }


    return (
      <div className="App">


      <h1>Welcome To The App</h1>
      <h1> {2 + 2} </h1>
      <h1>{blah}</h1>

      <div>
        {showForm()}
      </div>
     
      </div>
    );
  }



}

export default App;
