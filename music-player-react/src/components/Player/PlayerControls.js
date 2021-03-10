import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';

function PlayerControls(props) {
  return (
    <div className="player__controls">
      <button className="skipBtn" onClick={() => props.skipSong(false)}>
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button className="playBtn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
        <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
      </button>
      <button className="skipBtn">
        <FontAwesomeIcon icon={faForward} onClick={() => props.skipSong()} />
      </button>
    </div>
  )
}

export default PlayerControls;