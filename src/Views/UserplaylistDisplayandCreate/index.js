import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import likedicon from "../../imagess2/likedicon.png";
import maxresdefault from "../../imagess/maxresdefault.jpg";
import "./App.css";
import Player from "Views/Player/Player";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  addToPlaylist,
  addtoLikedSongs,
} from "Redux/Actions/Loginactions/loginactions";
const Userplaylistdisplayandcreate = () => {
  const dispatch = useDispatch();
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [enablePauseButton, setPlaybutton] = useState(false);
  const [playingPlaylistSongs, setplayingPlaylistSong] = useState(false);

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
                          id="playBtn"
                          onClick={() => {
                            setCurrentSong(e);
                            setIsPlaying(!isPlaying);
                            setPlaybutton(true);
                            setplayingPlaylistSong(true);
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
            <div className="main-container">
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
                            id="btnstyle3"
                            onClick={() => {
                              console.log("clicked.,")
                              dispatch(addToPlaylist(payloadtoSent));
                            }}
                          >
                            Add Song to Playlist
                          </button>
                          <button
                            id="btnstyle3"
                            onClick={() => {
                              dispatch(
                                addtoLikedSongs(payloadToSenttoLikedSongs)
                              );
                            }}
                          >
                            {/* <img src={likedicon} id="hearticon" alt="" /> */}
                            Add to Liked Songs
                          </button>
                          <button
                            onClick={() => {
                              setCurrentSong(songObject);
                              setIsPlaying(!isPlaying);
                              setPlaybutton(true);
                              setplayingPlaylistSong(false);
                            }}
                            id="btnstyle2"
                          >
                            click
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/* {
                <Player
                  songdata={
                    playingPlaylistSongs ? updatedPlaylistSongs : userSongsList
                  }
                  currentSong={currentSong}
                  setCurrentSong={setCurrentSong}
                  isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
                  audioElem={audioElem}
                  
                  enablePauseButton={enablePauseButton}
                  setPlaybutton={setPlaybutton}
                />
              } */}
            </div>
          }
        </>
      </div>
    </>
  );
};

export default Userplaylistdisplayandcreate;
