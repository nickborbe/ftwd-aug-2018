import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import AddMovie from './AddMovie';

class MoviesList extends Component {
    constructor(props){
        super(props)
        this.state = {
            movies: [
                { title: "Jurassic Park", director: "Steven Spielberg", hasOscars: true, IMDbRating: 7.8 },
                { title: "Sharknado", director: "Anthony C. Ferrante", hasOscars: false, IMDbRating: 11.0 },
                { title: "Titanic", director: "James Cameron", hasOscars: true, IMDbRating: 8.3 },
                { title: "The Godfather", director: "Francis Coppola", hasOscars: true, IMDbRating: 9.2 },
                { title: "Star Wars", director: "Rian Johnson" , hasOscars: true, IMDbRating: 8.7 },
                { title: "The Shawshank Redemption", director: "Frank Darabont", hasOscars: false, IMDbRating: 9.3 }
              ],
              showOscarAwarded: false ,
              filtered: [],
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

    this.state.filtered = this.state.movies.filter((theMovie )=> {
      return theMovie.hasOscars == this.state.showOscarAwarded
    });

    return this.state.filtered.map((eachMovie, index)=>{
      return (
          <Card 
          key={index}
          title={eachMovie.title}
          director={eachMovie.director}
          rating = {eachMovie.IMDbRating}
          hasOscars = {eachMovie.hasOscars}
          deleteClickHandler = {()=>this.deleteMovie(index)}  
            />
       )
    })
  }


  toggleOscars = () => {
    this.setState({showOscarAwarded: !this.state.showOscarAwarded})
  }




  addNewMovie = (e, newThingToAdd) => {
    e.preventDefault();

    const newMovie = {
      title: newThingToAdd.titleField,
      director: newThingToAdd.directorField,
      IMDbRating: newThingToAdd.ratingField,
      hasOscars: false
    };

    const allTheMovies = [...this.state.movies];
    // const allTheMovies = this.state.movies.slice()
    // either of these works, they each simply make a duplicate of this.state.movies

    allTheMovies.push(newMovie);

    this.setState({movies: allTheMovies })

  }


 


  render() {

   

    return (
      <div className="list">

      <button onClick = {()=> this.toggleOscars()}>
      {this.state.showOscarAwarded && "Show Me The Losers" }
      {!this.state.showOscarAwarded && "Show Me The Oscar Winners" }
      </button>

      <AddMovie addNew = {this.addNewMovie} />

  

     {this.showMovieCards()}



       
      </div>
    );
  }



 
}

export default MoviesList;
