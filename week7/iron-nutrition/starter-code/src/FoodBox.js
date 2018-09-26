import React, { Component } from 'react';
import './App.css';

class FoodBox extends Component{
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return (
            <div className="box">
            <article className="media">
                <div className="media-left">
                <figure className="image is-64x64">
                    <img src={this.props.image} />
                </figure>
                </div>
                <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{this.props.foodName}</strong> <br />
                    <small>{this.props.calories}</small>
                    </p>
                </div>
                </div>
                <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                    <input
                        className="input"
                        type="number" 
                        value="1"
                    />
                    </div>
                    <div className="control">
                    <button 
                    onClick={()=>this.props.addToList({name: this.props.foodName , calories:this.props.calories , image:this.props.image })} 
                    className="button is-info">
                        +
                    </button>
                    </div>
                </div>
                </div>
            </article>
            </div>
        )
    }






}

export default FoodBox;