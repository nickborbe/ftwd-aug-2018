import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectList from './components/ProjectList';
import ProjectDetails from './components/ProjectDetails';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
  }

  logMeIn= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }


  render() {
    return (
      <div className="App">
        <Navbar userInSession={this.state.loggedInUser} />
        <Switch>
        <Route exact path="/" render={() => <Login setTheUserInTheAppComponent={this.logMeIn}/>}/>
        <Route exact path='/signup' render={() => <Signup setTheUserInTheAppComponent={this.logMeIn}/>}/>
          <Route exact path="/projects" component={ProjectList}/>
          <Route exact path="/projects/:id" component={ProjectDetails} />
        </Switch>
 
      </div>
    );
  }
}

export default App;
