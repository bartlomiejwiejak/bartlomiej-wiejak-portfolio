import React, { useContext, useRef } from 'react';

import { RoutingContext } from '../../../context';

const WorkFill = () => {

  const { routingState } = useContext(RoutingContext);
  const stylesRef = useRef({});
  if (routingState.lastProject !== null) {
    stylesRef.current = {
      title: { transform: 'translate3d(0,0,0)' },
      scroller: { transform: `translate3d(0,-${routingState.lastProject * 25}%,0)` }
    }
  }

  return (
    <div className='work work--fill'>
      <div style={stylesRef.current.scroller} className='work__scroller'>
        <div className='project project--fill'>
          <h2 className="project__title project__title--down"><div style={stylesRef.current.title}>Vault</div></h2>
          <h2 className="project__title project__title--up"><div style={stylesRef.current.title}>Cloth</div></h2>
        </div>
        <div className='project project--fill'>
          <h2 className="project__title project__title--down"><div style={stylesRef.current.title}>Your</div></h2>
          <h2 className="project__title project__title--up"><div style={stylesRef.current.title}>Place</div></h2>
        </div>
        <div className='project project--fill'>
          <h2 className="project__title project__title--down"><div style={stylesRef.current.title}>Burger</div></h2>
          <h2 className="project__title project__title--up"><div style={stylesRef.current.title}>Project</div></h2>
        </div>
        <div className='project project--fill'>
          <h2 className="project__title project__title--down"><div style={stylesRef.current.title}>Coming</div></h2>
          <h2 className="project__title project__title--up"><div style={stylesRef.current.title}>Soon</div></h2>
        </div>
      </div>
    </div>
  )
}

export default WorkFill;