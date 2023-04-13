import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import likedicon from "../../imagess2/likedicon.png";
import maxresdefault from "../../imagess/maxresdefault.jpg";
import "./App.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  addToPlaylist,
  addtoLikedSongs,
  isPlayinggggg,
  setCurrentSongObj,
  currentPlayingSongArr,
} from "Redux/Actions/Loginactions/loginactions";
const Userplaylistdisplayandcreate = () => {
  const dispatch = useDispatch();
  const debounce=useRef();
  const userSongsList = useSelector((state) => state.loginreducer.songs);
  const userToken = useSelector((state) => state.loginreducer.loggedin);
  const updatedPlaylistSongs = useSelector(
    (state) => state.loginreducer.playlistSongs
  );  
  console.log(updatedPlaylistSongs,"checkingggggg")
  const params = useParams();
  const audioElem = useRef(); 
  const { name } = params;
  const [currentSong, setCurrentSong] = useState(null);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;
    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };

  return (
    <>
      <audio
        src={currentSong?.SongUrl}
        ref={audioElem}
        onTimeUpdate={onPlaying}
      />
      <div className="main-container">
        <div className="spotify-playlists">
          <h2>{name}</h2>
          <div className="spotifydiv">
            <div className="list">
              { updatedPlaylistSongs?.map((e, i) => {
                    return (
                      <div className="item" key={i}>
                        <img src={maxresdefault} alt="" />

                        <h4>Today's Top Hits</h4>
                        <span style={{ color: "white" }}> {e.SongName}</span>
                        <button
                          id="btnn1"
                          onClick={() => {
                            if(debounce.current){
                              clearTimeout(debounce.current);
                            }
                             debounce.current= setTimeout(()=>{
                             dispatch(setCurrentSongObj(e));
                             dispatch(isPlayinggggg(true));
                             dispatch(currentPlayingSongArr(updatedPlaylistSongs));

                            },1000)
                          }}
                        >
                          click to Play Playlist
                        </button>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
        <>
          {
              <div className="spotify-playlists">
                <h2>All Songs</h2>
                <div className="spotifydiv">
                  <div className="list">
                    {userSongsList?.map((songObject, i) => {
                      const payloadtoSent = {
                        songInfo: { ...songObject },
                        userToken,
                        name,
                      }
                      console.log(payloadtoSent,"payy");
                      const payloadToSenttoLikedSongs = {
                        userToken,
                        songName: songObject.SongName,
                      }
                      return (
                        <div className="item" key={i}>
                          <img src={maxresdefault} alt="" />

                          <h4 style={{ color: "white" }}>
                            {songObject.SongName}
                          </h4>
                          <button
                            id="btnn1"
                            onClick={() => {
                              console.log("clicked.,")
                              dispatch(addToPlaylist(payloadtoSent));
                              dispatch(currentPlayingSongArr(updatedPlaylistSongs));

                             
                        
                            }}
                          >
                            Add Song to Playlist
                          </button>
                    
                    <i className="fa-solid fa-heart"     onClick={() => {
                              dispatch(
                                addtoLikedSongs(payloadToSenttoLikedSongs)
                              );
                            }}></i>
                            {/* <i class="fa-solid fa-heart" style="color: #f70808;"></i> */}
                          
                          <button
                            onClick={() => {
                           
                              dispatch(setCurrentSongObj(songObject));

                             dispatch(isPlayinggggg(true));
                             dispatch(currentPlayingSongArr(userSongsList));
                            }}
                            id="btnn"
                          >
                            click
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
          
        
          }
        </>
      </div>
    </>
  );
};

export default Userplaylistdisplayandcreate;
