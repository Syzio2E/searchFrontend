import React from 'react';
import './card.css';

const Card = ({ title, content, city }) => {
  return (
    <div className="card" style={{margin:"2rem", width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{content}</h6>
        <p className='card-text'>{city}</p>
      </div>
    </div>
  );
};

export default Card;
