import React, { Component } from 'react';


class CoolButton extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }



    render(){
        return(
            <button className = "button is-info">{this.props.text}</button>
        )
    }

}

export default CoolButton;