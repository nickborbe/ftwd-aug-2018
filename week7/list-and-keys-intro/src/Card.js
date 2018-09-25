// components/Card.js

import React from 'react';

const card = (props) => {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>Director: {props.director}</p>
      <button onClick = {()=> props.deleteClickHandler()} >Delete</button>

    </div>
  )
};







export default card;