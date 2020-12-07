import React, { useContext, useRef } from 'react';

import { RoutingContext } from '../../../context';

const WorkFill = () => {

  const { routingState } = useContext(RoutingContext);
  const stylesRef = useRef(null);
  if (routingState.lastProject !== null) {
    stylesRef.current = {
      title: { transform: 'translate(0%,0%)' },
      scroller: { transform: `translate(0%,-${routingState.lastProject * 25}%)` }
    }
  }

  return (
    <div className='work work--fill'>
      <div style={stylesRef.current ? { transform: stylesRef.current.scroller.transform } : {}} className='work__scroller'>
        <div className='project project--fill'>
          <h2 className="project__title project__title--down"><div style={stylesRef.current ? { transform: stylesRef.current.title.transform } : {}}>Vault</div></h2>
          <h2 className="project__title project__title--up"><div style={stylesRef.current ? { transform: stylesRef.current.title.transform } : {}}>Cloth</div></h2>
        </div>
        <div className='project project--fill'>
          <h2 className="project__title project__title--down"><div style={stylesRef.current ? { transform: stylesRef.current.title.transform } : {}}>Your</div></h2>
          <h2 className="project__title project__title--up"><div style={stylesRef.current ? { transform: stylesRef.current.title.transform } : {}}>Place</div></h2>
        </div>
        <div className='project project--fill'>
          <h2 className="project__title project__title--down"><div style={stylesRef.current ? { transform: stylesRef.current.title.transform } : {}}>Burger</div></h2>
          <h2 className="project__title project__title--up"><div style={stylesRef.current ? { transform: stylesRef.current.title.transform } : {}}>Project</div></h2>
        </div>
        <div className='project project--fill'>
          <h2 className="project__title project__title--down"><div style={stylesRef.current ? { transform: stylesRef.current.title.transform } : {}}>Coming</div></h2>
          <h2 className="project__title project__title--up"><div style={stylesRef.current ? { transform: stylesRef.current.title.transform } : {}}>Soon</div></h2>
        </div>
      </div>
    </div>
  )
}

export default WorkFill;