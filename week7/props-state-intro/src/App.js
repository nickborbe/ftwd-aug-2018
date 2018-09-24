import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from "./User"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      
        userA: {
                firstName: 'Harper',
                lastName: 'Perez',
                avatarUrl:'http://www.kodlamaker.com/wp-content/uploads/2015/10/codingforkids.png'
        },
        userB: {
                firstName: 'Ana',
                lastName: 'Rivera',
                avatarUrl:'https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png'
        },
        clickCount: 0,
        backColor: 'yellow'
    

    }

  }

  


  componentDidUpdate = () =>{
    console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=")
  }


  colorMapper = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

  clickHandler = () => {
    console.log('button clicked');

    if(this.state.clickCount >= 4){
      this.setState({
        clickCount: this.state.clickCount+1, 
        backColor: this.colorMapper()
      })

    } else{
      this.setState({
        clickCount: this.state.clickCount+1
      })
    }


  }

  render() {
      return (
      <div className="App">
          <h1> Hello Ironhackers! </h1>
          <p>Count is: {this.state.clickCount}</p>
          <button onClick={this.clickHandler}>Click me</button>
          
          <User theColor={this.state.backColor} 
          firstName={this.state.userA.firstName} 
          lastName={this.state.userA.lastName} 
          image={this.state.userA.avatarUrl} />

          <User firstName={this.state.userB.firstName} 
          lastName={this.state.userB.lastName} 
          image={this.state.userB.avatarUrl} /> 

      </div>
      );
  }
}

export default App;
