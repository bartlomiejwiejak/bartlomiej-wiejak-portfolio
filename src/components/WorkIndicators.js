import React from 'react';

const WorkIndicators = () => {
  return (
    <div className='work__indicators'>
      <h1 className="work__heading">Works</h1>
      <div className="work__pagination">
        <span className="work__pagination__active"><div>01</div>
          <div>02</div>
          <div>03</div>
        </span>
        <span className="work__pagination__seperator">—</span>
        <span className="work__pagination__number">03</span>
      </div>
    </div>
  );
}

export default WorkIndicators;
