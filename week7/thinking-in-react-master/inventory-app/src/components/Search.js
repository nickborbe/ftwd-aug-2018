import React, { Component } from 'react';
import '../App.css';

class Search extends Component {
  render() {
    return (

      <input
      onChange={e=>this.props.update(e.target.value)} 
      value={this.props.val}
      className="search" 
      placeholder="search..."/>

    );
  }
}

export default Search;