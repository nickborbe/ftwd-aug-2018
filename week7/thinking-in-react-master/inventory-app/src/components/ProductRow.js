import React, { Component } from 'react';
import '../App.css';

class ProductRow extends Component {
  render() {
    return (
        <div className="table-thing">
        <p>{this.props.theName}</p>
        <p>{this.props.thePrice}</p>
    </div>
    );
  }
}

export default ProductRow;