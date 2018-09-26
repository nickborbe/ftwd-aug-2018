import React, { Component } from 'react';
import './App.css';


class AddFood extends Component{
    constructor(props){
        super(props)
        this.state={
            foodNameInput: "",
            caloriesInput: "",
            imageInput: ""
        }
    }


    handleInputChange = (e)=>{
        this.setState({[e.target.id] :e.target.value})
      }
    

    render(){
        return (
        
        <form onSubmit={e=>{this.props.submitForm(e, this.state)}} className="add-food-form">
        <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
              id="foodNameInput"
              onChange = {e=>this.handleInputChange(e)}
                value={this.state.foodNameInput}
               className="input"
                type="text" />
            </div>
        </div>

        <div className="field">
          <label className="label">Calories</label>
          <div className="control">
            <input
            id="caloriesInput"
            onChange = {e=>this.handleInputChange(e)}
            value={this.state.caloriesInput}
             className="input"
              type="number" />
          </div>


         <div className="field">
            <label className="label">Image</label>
            <div className="control">
              <input
              id="imageInput"
              onChange = {e=>this.handleInputChange(e)}
                value={this.state.imageInput}
               className="input"
                type="text" />
            </div>
        </div>

          <button className="button is-info">Submit</button>
        </div>
      </form> 
      )
    }
}

export default AddFood;
