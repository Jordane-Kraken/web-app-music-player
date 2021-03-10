import React, { useState, useRef, useEffect } from 'react';
import Header from '../Header';
import PlayerDetails from './PlayerDetails';
import PlayerControls from './PlayerControls';

import './index.scss';

function Player(props) {
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  });

  const skipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let i = props.currentSongIndex;
        i++;

        if (i > props.songs.length -1) {
          i = 0;
        }

        return i;
      })
    } else {
      props.setCurrentSongIndex(() => {
        let i = props.currentSongIndex;
        i--;

        if (i < 0) {
          i = props.songs.length -1;
        }

        return i;
      });
    }
  }

  return (
    <div className="player">
    <Header />
      <audio src={props.songs[props.currentSongIndex].src} ref={audioElement}></audio>
      <h2 className="player__title">Playing Now</h2>
      <PlayerDetails
        song={props.songs[props.currentSongIndex]}
      />
      <p className="player__details" style={{margin: '1em'}}>Next song : {props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</p>
      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        skipSong={skipSong}
      />
    </div>
  )
}

export default Player;