import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />


         <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/gallery' component={Gallery}/>
          <Route exact path='/ourprojects' component={Projects}/>
          <Route exact path='/ourprojects/:id' component={ProjectDetails}/>
        </Switch>

      
      </div>
    );
  }
}

export default App;
