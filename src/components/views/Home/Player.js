import React, { useState, useEffect } from 'react'

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
    audio.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
    audio.className = 'player__audio';
    audio.loop = true;
    audio.style.display = 'none';
    document.getElementById('root').appendChild(audio);
  }, [])

  const playHandle = () => {
    if (isPlaying) {
      document.querySelector('.player__audio').pause()
      setIsPlaying(false)
    } else {
      console.log(document.querySelector('.player__audio'))
      document.querySelector('.player__audio').volume = .2
      document.querySelector('.player__audio').play()
      setIsPlaying(true)
    }
  }

  let content;
  if (isPlaying) {
    content = <i onClick={playHandle} className="fas fa-pause">
      <div className="player__line player__line--right"></div>
      <div className="player__line player__line--left"></div>
    </i>
  } else {
    content = <i onClick={playHandle} className="fas fa-play">
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
