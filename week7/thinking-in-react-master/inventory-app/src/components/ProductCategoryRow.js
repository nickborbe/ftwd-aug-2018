import React, { Component } from 'react';
import '../App.css';

class ProductCategoryRow extends Component {
  render() {
    return (
      <h3>{this.props.text}</h3>
    );
  }
}

export default ProductCategoryRow;