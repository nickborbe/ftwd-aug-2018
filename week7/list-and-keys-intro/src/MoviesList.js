import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';

class MoviesList extends Component {
    constructor(props){
        super(props)
        this.state = {
            movies: [
                { title: "Jurassic Park", director: "Steven Spielberg" },
                { title: "Sharknado", director: "Anthony C. Ferrante" },
                { title: "Titanic", director: "James Cameron" }
              ]

        }
    }


    deleteMovie(whichMovieToDelete){
        const daMovies = [...this.state.movies];
        daMovies.splice(whichMovieToDelete, 1)

        this.setState({
            movies: daMovies
        })

    }


  showMovieCards(){
    return this.state.movies.map((eachMovie, index)=>{
      return (
          <Card 
          key={index}
          title={eachMovie.title}
          director={eachMovie.director}
          deleteClickHandler = {()=>this.deleteMovie(index)}  
            />
    
       )
    })
  }


  render() {
    return (
      <div className="list">
  

     {this.showMovieCards()}
       
      </div>
    );
  }
}

export default MoviesList;
