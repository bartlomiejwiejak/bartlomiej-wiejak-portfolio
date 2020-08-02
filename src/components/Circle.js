import React from 'react';
import circle from '../assets/circleWork.png';

const Circle = () => {
  return (
    <div className='circle'>
      <img src={circle} alt="circle" className="circle__img" />
    </div>
  );
}

export default Circle;
