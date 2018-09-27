import React, { Component } from 'react';
import '../App.css';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';


class ProductTable extends Component {
    constructor(props){
        super(props)
        this.state={
            checkbox: false,
        }
    }



    showProductsByCategory = (category) =>{
        return this.props.data.filter((eachProduct)=>{
            if(this.state.checkbox){

                return eachProduct.category === category && eachProduct.name.toUpperCase().includes(this.props.searchTerm.toUpperCase()) && eachProduct.stocked === this.state.checkbox

            }else{

                return eachProduct.category === category && eachProduct.name.toUpperCase().includes(this.props.searchTerm.toUpperCase())
            }

        }).map((eachProduct, index)=>{

            return <ProductRow key={index} theName={eachProduct.name} thePrice={eachProduct.price} />

        })
    }

    updateCheckBox = (e) =>{
        this.setState({checkbox: e.target.checked})
    }



  render() {
    return (
      <div className="productTable-list">

      <input type="checkbox" onChange={e=> this.updateCheckBox(e)} checked={this.state.checkbox} />
      <label> Only Show Products In Stock</label>

      <div className="table-thing">
          <h3>Name</h3>
          <h3>Price</h3>
      </div>


    {this.showProductsByCategory("Sporting Goods").length > 0 && <ProductCategoryRow text="Sporting Goods" />   }
    {this.showProductsByCategory("Sporting Goods")}


      {this.showProductsByCategory("Electronics").length > 0 &&  <ProductCategoryRow text="Electronics" /> }
      {this.showProductsByCategory("Electronics")}



       
      </div>
    );
  }
}

export default ProductTable;