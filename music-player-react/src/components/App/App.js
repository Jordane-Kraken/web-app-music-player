import { useState } from 'react';
import Player from '../Player';

function App() {
    const [songs, setSongs] = useState([
      {
        title : "Every night",
        artist: "Zmeyev",
        img_src: "./images/song-1.jpg",
        src: "./music/zmeyev-every-night.mp3"
      },
      {
        title : "Chamomille",
        artist: "Austin Marc",
        img_src: "./images/song-2.jpg",
        src: "./music/chamomille.mp3"
      },
      {
        title : "Pink sky",
        artist: "Sky Pedro",
        img_src: "./images/song-3.jpg",
        src: "./music/pink-sky.mp3"
      },
      {
        title : "Obidos",
        artist: "Glimlip, Sling Dilly",
        img_src: "./images/song-4.jpeg",
        src: "./music/glimlip-x-sling-dilly-obidos.mp3"
        },
        {
        title : "When There's Nothing Else",
        artist: "LeVirya, Broey",
        img_src: "./images/song-5.jpg",
        src: "./music/when-theres-nothing-else.mp3"
        },
        {
        title : "Sunset",
        artist: "Odyssee, Gatz2Gatz",
        img_src: "./assets/images/song-6.jpg",
        src: "./assets/music/odyssee-gatz2gatz-sunset.mp3"
        },
        {
        title : "Ylang Ylang",
        artist: "FKJ",
        img_src: "./images/song-7.jpg",
        src: "./music/fkj-ylang-ylang.mp3"
        },
        {
        title : "Soulful",
        artist: "L'indécis",
        img_src: "./images/song-8.jpg",
        src: "./music/lindecis-soulful.mp3"
        },
    ]);

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

    
    return (
    <div className="app">
    <Player
      song={songs[currentSongIndex]}
      nextSong={songs[nextSongIndex]} 
    />
    </div>
  );
}

export default App;
