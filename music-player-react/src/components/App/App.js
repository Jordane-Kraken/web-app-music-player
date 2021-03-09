import { useState } from 'react';
import Player from '../Player';

function App() {
    const [songs, setSongs] = useState([
      {
        title : "Obidos",
        artist: "Glimlip, Sling Dilly",
        img_src: "../../assets/images/song-4.jpeg",
        src: "../../assets/music/glimlip-x-sling-dilly-obidos.mp3"
        },
        {
        title : "When There's Nothing Else",
        artist: "LeVirya, Broey",
        img_src: "../../assets/images/song-5.jpg",
        src: "../../assets/music/when-theres-nothing-else.mp3"
        },
        {
        title : "Sunset",
        artist: "Odyssee, Gatz2Gatz",
        img_src: "../../assets/images/song-6.jpg",
        src: "../../assets/music/odyssee-gatz2gatz-sunset.mp3"
        },
        {
        title : "Ylang Ylang",
        artist: "FKJ",
        img_src: "../../assets/images/song-7.jpg",
        src: "../../assets/music/fkj-ylang-ylang.mp3"
        },
        {
        title : "Soulful",
        artist: "L'indécis",
        img_src: "../assets/images/song-8.jpg",
        src: "../../assets/music/lindecis-soulful.mp3"
        },
    ]);

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

    
    return (
    <div className="App">
    <Player
      song={songs[currentSongIndex]}
      nextSong={songs[nextSongIndex]} 
    
    />
    </div>
  );
}

export default App;
