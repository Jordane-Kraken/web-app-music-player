import { React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';

function PlayerControls(props) {
  return (
    <div className="player__controls">
      <button className="skipBtn">
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button className="playBtn">
        <FontAwesomeIcon icon={faPlay} />
      </button>
      <button className="skipBtn">
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  )
}

export default PlayerControls;