import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectList from './components/ProjectList';
import ProjectDetails from './components/ProjectDetails';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import AuthService from './components/auth/auth-service';


import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();

  }

  logMeIn= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  fetchUser(){
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser:  response
        }) 
      })
      .catch( err =>{
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
  }


  render() {
    this.fetchUser();
    return (
      <div className="App">
        <Navbar  setTheUserInTheAppComponent={this.logMeIn} userInSession={this.state.loggedInUser} />
        <Switch>
        <Route exact path="/" render={() => <Login  {...this.props} setTheUserInTheAppComponent={this.logMeIn}/>}/>
        <Route exact path='/signup' render={() => <Signup  {...this.props} setTheUserInTheAppComponent={this.logMeIn}/>}/>
          <Route exact path="/projects" component={ProjectList}/>
          <Route exact path="/projects/:id" component={ProjectDetails} />
        </Switch>
 
      </div>
    );
  }
}

export default App;
