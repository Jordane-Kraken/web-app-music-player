import { React } from 'react';
import PlayerDetails from './PlayerDetails';
import PlayerControls from './PlayerControls';

import './index.scss';

function Player(props) {
  return (
    <div className="player">
      <audio></audio>
      <h2 className="player__title">Playing Now</h2>
      <PlayerDetails song={props.song} />
      <p>Next song : {props.nextSong.title} by {props.nextSong.artist}</p>
      <PlayerControls />
    </div>
  )
}

export default Player;