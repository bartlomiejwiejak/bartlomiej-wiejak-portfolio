import React from 'react';

const WorkIndicators = () => {
  return (
    <div className="work__pagination">
      <div>
        <span className="work__pagination__active"><div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
        </span>
        <span className="work__pagination__seperator">—</span>
        <span className="work__pagination__number">04</span>
      </div>
    </div>
  );
}

export default WorkIndicators;
