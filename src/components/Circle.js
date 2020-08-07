import React from 'react';
import circle from '../assets/work/circle.png';

const Circle = () => {
  return (
    <div className='circle'>
      <img src={circle} draggable='false' alt="circle" className="circle__img" />
    </div>
  );
}

export default Circle;
