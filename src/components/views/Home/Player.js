import React, { useState, useEffect } from 'react'

import cursorExpand from '../../../animations/cursorExpand';
import cursorBackToNormal from '../../../animations/cursorBackToNormal';

function Player() {
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (document.querySelector('.player__audio')) {
      if (!document.querySelector('.player__audio').paused) {
        setIsPlaying(true)
      }
      return;
    }
    const audio = document.createElement('audio');
    audio.className = 'player__audio';
    audio.loop = true;
    audio.style.display = 'none';
    audio.volume = .5
    document.getElementById('root').appendChild(audio);
  }, [])

  const playHandle = async () => {
    if (isPlaying) {
      document.querySelector('.player__audio').pause()
      setIsPlaying(false)
    } else {
      const audio = document.querySelector('.player__audio')
      if (!audio.src) {
        const url = `//api.soundcloud.com/resolve.json?url=https://soundcloud.com/downtownrecords/justice-dvno&client_id=${process.env.REACT_APP_CLIENT_ID}`
        const response = await fetch(url);
        const responseData = await response.json();

        if (responseData.stream_url) {
          audio.src = `${responseData.stream_url}?client_id=${process.env.REACT_APP_CLIENT_ID}`
        } else {
          return;
        }
      }
      audio.play()
      setIsPlaying(true)
    }
  }

  let content;
  if (isPlaying) {
    content = <i onMouseOver={cursorExpand} onMouseOut={cursorBackToNormal} onClick={playHandle} className="fas fa-pause">
      <div className="player__line player__line--right"></div>
      <div className="player__line player__line--left"></div>
    </i>
  } else {
    content = <i onMouseOver={cursorExpand} onMouseOut={cursorBackToNormal} onClick={playHandle} className="fas fa-play">
      <div className="player__line player__line--right"></div>
      <div className="player__line player__line--left"></div>
    </i>
  }

  return (
    <div className='player'>
      <div className="player__content">
        {content}
      </div>
      <span className="player__song"><span>dvno - justice</span></span>
    </div>
  )
}

export default Player