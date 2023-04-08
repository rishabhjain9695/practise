import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import likedicon from '../../imagess2/likedicon.png'
import maxresdefault from '../../imagess/maxresdefault.jpg'
import "./App.css"
import Player from 'Views/Player/Player';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addToPlaylist,addtoLikedSongs } from 'Redux/Actions/Loginactions/loginactions';
const Userplaylistdisplayandcreate = () => {
  const dispatch=useDispatch();
  const userSongsList=useSelector((state)=> state.loginreducer.songs);
  const userToken=useSelector((state)=>state.loginreducer.loggedin);
  const updatedPlaylistSongs=useSelector((state)=>state.loginreducer.playlistSongs);
  console.log(updatedPlaylistSongs,"updatedPlaylistSongsssss");
  const params = useParams();
  const audioElem = useRef();
  const { name } = params;
  const [songdata, setSongData] = useState([]);
  const [currentSong, setCurrentSong] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [playlistsongs, setPlaylistSongs] = useState([]);
  const [enablePlaybutton, setPlaybutton] = useState(false);
  const [playingPlaylistSongs, setplayingPlaylistSong] = useState(false);

  useEffect(() => {
 setSongData(userSongsList)
    
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
          <h2>{name}s</h2>
          <div className='spotifydiv'>
            <div className="list">
              {Array.isArray(updatedPlaylistSongs)?updatedPlaylistSongs?.map((e,i) => {

                return (
                    <div className="item" key={i}>
                      <img  src={maxresdefault} alt="" />

                      <h4>Today's Top Hits</h4>
                      <span > {e.SongName}</span>
                      <button  style={{ backgroundColor: 'grey' }} onClick={() => {
                        setCurrentSong(e);
                        setIsPlaying(!isPlaying);
                        setPlaybutton(true);
                        setplayingPlaylistSong(true);
                      }}>click to Play </button>
                    </div>

                  )
              }):null}
            </div>
          </div>
        </div>
        <>
          {<div className='main-container'>
            <div className='spotify-playlists'>
              <h2>All Songs</h2>
              <div className='spotifydiv'>
                <div className="list">

                  {songdata?.map((songObject,i) => {
                    const payloadtoSent={songInfo:{...songObject},
                    userToken,
                    name
                    }
                    const payloadToSenttoLikedSongs={
                              userToken,
                             songName: songObject.SongName
                            }
                    return (
                        <div className="item" key={i}>
                          <img src={maxresdefault} alt="" />

                          <h4>{songObject.SongName}</h4>
                          <button  style={{ backgroundColor: 'grey' }} onClick={()=>{dispatch(addToPlaylist(payloadtoSent))}}>
                            Add Song to Playlist

                          </button>
                          <button onClick={() => {
                       
                            dispatch(addtoLikedSongs(payloadToSenttoLikedSongs))
                          }}>
                            <img src={likedicon} id="hearticon" alt="" />
                          </button>
                          <button onClick={() => {
                            // setCurrentSong(songObject);
                            // setIsPlaying(!isPlaying);
                            // setPlaybutton(true);
                            // setplayingPlaylistSong(false);
                          }}>click</button>
                        </div>
                      )
                  })}

                </div>
              </div>
            </div>
            {<Player songdata={playingPlaylistSongs ? playlistsongs : songdata} setSongData={playingPlaylistSongs ? setPlaylistSongs : setSongData} currentSong={currentSong} setCurrentSong={setCurrentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioElem={audioElem} enablePlaybutton={enablePlaybutton} setPlaybutton={setPlaybutton} />}
          </div>}

        </>



      </div>

    </>

  )
}

export default Userplaylistdisplayandcreate

