import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <img className='card-image' src={props.img}></img>
        <h2 className='card-title'>{props.title}</h2>
        <p className='card-description'>{props.description}</p>
      </div>
      <a className="btn-card btn-primary btn-sm" href="#" role="button">Read More</a>

      
    </div>
  )
}


export default Card;