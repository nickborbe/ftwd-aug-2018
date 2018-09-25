// components/Card.js

import React from 'react';

const card = (props) => {



  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>Director: {props.director}</p>
      <div>
      { props.hasOscars && <p>Got the Oscar Award! 😉 </p> }

      { !props.hasOscars && <p>No Oscars but got a {props.rating} on IMDB 😔 </p> }
          </div>

      <button onClick = {()=> props.deleteClickHandler()} >Delete</button>

    </div>
  )
};











export default card;