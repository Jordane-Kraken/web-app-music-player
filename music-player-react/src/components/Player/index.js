import { React } from 'react';

function Player(props) {
  return (
    <div className="player">
      <audio></audio>
      <h4>Playing Now</h4>
      <p>Next : {props.nextSong.title} by {props.nextSong.artist}</p>
    </div>
  )
}

export default Player;