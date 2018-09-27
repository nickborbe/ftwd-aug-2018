import React, { Component } from 'react';
import '../App.css';
import Search from './Search';
import ProductTable from './ProductTable';
import data from '../data.json';

class Main extends Component {
    constructor(props){
        super(props)
        this.state={
            data: data.data,
            searchBox: "",
        }
    }


    updateSearchTerm = (newSearchTerm) =>{
        this.setState({searchBox: newSearchTerm})
        console.log(this.state)
    }

  render() {
    return (
      <div className="main-list">

      <h1> Welcome To Fancy List App!</h1>

        <Search update = {this.updateSearchTerm} val={this.state.searchBox} />

        <ProductTable data = {this.state.data} searchTerm={this.state.searchBox} />

       
      </div>
    );
  }
}

export default Main;