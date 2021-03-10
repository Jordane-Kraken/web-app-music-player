import React from 'react';

function PlayerDetails(props) {
  return (
    <div className="player__details">
    <div className="player__details__img">
      <img className="player__details__image" src={props.song.img_src} alt=""/>
    </div>
    <h3 className="player__details__title">{props.song.title}</h3>
    <h4 className="player__details__artist">{props.song.artist}</h4>
    </div>
  )
}

export default PlayerDetails;