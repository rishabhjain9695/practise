
import React, { useEffect, useRef, useState } from 'react'
import './navbar.css'
import {
  collection, arrayUnion,
  getDocs,
  getDoc,
  addDoc,
  doc,
  updateDoc,
  setDoc
} from "firebase/firestore";
import { db } from '../../firebase';
import "./navbar.css"
import likedicon from '../../imagess2/likedicon.png'
import maxresdefault from '../../imagess/maxresdefault.jpg'
import Player from 'Views/Player/Player';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSongs } from 'Redux/Actions/Loginactions/loginactions';
function Home() {
  const dispatch=useDispatch();
  const userToken=useSelector((state)=> state.loginreducer.loggedin);
  const userSongsList=useSelector((state)=> state.loginreducer.songs);

  console.log(userSongsList,"Songs of User");

  const audioElem = useRef();
  const [currentSong, setCurrentSong] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [songdata, setSongData] = useState([]);
  const [enablePlaybutton, setPlaybutton] = useState(false);
  useEffect(() => {
   setSongData(userSongsList);
        setCurrentSong("");
console.log("hello usefeect called")
  }, [])
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
                console.log(currentSong, "checkk");
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
        <Player songdata={songdata} setSongData={setSongData} currentSong={currentSong} setCurrentSong={setCurrentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioElem={audioElem} enablePlaybutton={enablePlaybutton} setPlaybutton={setPlaybutton} />
      </div>

    </>

  )
}

export default Home;

