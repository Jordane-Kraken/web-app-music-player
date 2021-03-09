import { React } from 'react';
import PlayerDetails from './PlayerDetails';

function Player(props) {
  return (
    <div className="player">
      <audio></audio>
      <h4>Playing Now</h4>
      <PlayerDetails song={props.song} />
      <p>Next : {props.nextSong.title} by {props.nextSong.artist}</p>
    </div>
  )
}

export default Player;