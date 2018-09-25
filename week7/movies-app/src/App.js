import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MoviesList from './MoviesList';

class App extends Component {



  render() {
    return (
      <div className="App">
      <h1>Check Out This Awesome List Of Movies</h1>

     <MoviesList />
       
      </div>
    );
  }
}

export default App;
