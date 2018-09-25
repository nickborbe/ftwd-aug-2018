import React, { Component } from 'react';

class AddMovie extends Component {
    constructor(props){
        super(props)
        this.state = {
            titleField: "",
            directorField: "",
            ratingField: ""
        }
    }



  titleFieldChange = (theEventObject) => {
    this.setState({titleField: theEventObject.target.value})
  }

  directorFieldChange = (theEventObject) => {
    this.setState({directorField: theEventObject.target.value})
  }

  ratingFieldChange = (theEventObject) => {
    this.setState({ratingField: theEventObject.target.value})
  }



    render(){
        return(

        
        <form onSubmit = {(e)=> this.props.addNew(e, this.state)}>
        <h2>Add A New Movie</h2>
        <label>Title</label>
        <input type="text" onChange={(e)=> this.titleFieldChange(e)} value={this.state.titleField}></input>

        <label>Director</label>
        <input type="text" onChange={(e)=> this.directorFieldChange(e)} value={this.state.directorField}></input>

        <label>IMDB Rating</label>
        <input type="number" onChange={(e)=> this.ratingFieldChange(e)} value={this.state.ratingField}></input>

        <button>Submit</button>
      </form>

        )

    }


}


export default AddMovie;