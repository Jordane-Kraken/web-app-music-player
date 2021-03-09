import { React } from 'react';

function PlayerDetails(props) {
  return (
    <div className="player__details">
    <div className="details__img">
      <img style={{borderRadius: '30%' , width: '50%'}} src={props.song.img_src} alt=""/>
    </div>
    <h3 className="details__title">{props.song.title}</h3>
    <h4 className="details__artist">{props.song.artist}</h4>

    </div>
  )
}

export default PlayerDetails;