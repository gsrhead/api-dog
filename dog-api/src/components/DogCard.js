import React from 'react';

export default function dogCard(props) {
  return (
    <div className="dogCard">
      <img src={props.dog.image} alt="DogCard component" />
  
    </div>
  );
}
