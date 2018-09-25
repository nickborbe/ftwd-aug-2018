import React, { Component } from 'react';


class FormField extends Component {
    constructor(props){
        super(props)
        this.state={}
    }



    render(){
        return(
            <div className="field">
                <label className="label">{this.props.content}</label>
                <div className="control">
                    <input className="input" type={this.props.inputType} placeholder={this.props.holder} />
                </div>
            </div>
        
        )
    }


}

export default FormField;