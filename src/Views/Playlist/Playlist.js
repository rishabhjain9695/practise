
import React, { useEffect, useRef, useState } from 'react'
import './navbar.css'
import "./navbar.css"
import maxresdefault from '../../imagess/maxresdefault.jpg'
import Player from 'Views/Player/Player';
import {  useSelector } from 'react-redux';

function Home() {
  const userSongsList=useSelector((state)=> state.loginreducer.songs);

  // console.log(userSongsList,"Songs of User");

  const audioElem = useRef();
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [enablePauseButton, setPlaybutton] = useState(false);
  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;
    setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })
  }
  return (
    <>


      <audio src={currentSong?.SongUrl} ref={audioElem} onTimeUpdate={onPlaying} />
      <div className='main-container'>

        <div className='spotify-playlists'>
          <h2>All Songs</h2>
          <div className='spotifydiv'>
            <div >

              {userSongsList && userSongsList.map((e,i) => {
                return (

                    <div className="item" key={i}>
                      <img src={maxresdefault} alt="" />

                      <h4>{e.SongName}</h4>
                      <button onClick={() => {
                        setCurrentSong(e);
                        setIsPlaying(!isPlaying);
                        setPlaybutton(true);
                      }}>click</button>

                    </div>

                  )
              })}

            </div>
          </div>
        </div>
        <div className='spotify-playlists'>
          <div className='spotifydiv'>
            <div className="list">

            </div>
          </div>

        </div>
        <Player songdata={userSongsList} currentSong={currentSong} setCurrentSong={setCurrentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioElem={audioElem} enablePauseButton={enablePauseButton} setPlaybutton={setPlaybutton} />
      </div>

    </>

  )
}

export default Home;

