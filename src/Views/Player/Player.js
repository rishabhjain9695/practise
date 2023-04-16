import React, { useEffect, useRef, useState } from "react";
import "./player.css";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsFillSkipStartCircleFill,
  BsFillSkipEndCircleFill,
} from "react-icons/bs";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrentSongObj } from "Redux/Actions/Loginactions/loginactions";
import { isPlayinggggg } from "Redux/Actions/Loginactions/loginactions";

const Player = () => {
  const progress=useRef();
  const clickRef = useRef();
  const debounce = useRef();
  const dispatch = useDispatch();
  const [isFirstRender,setIsFirstRender]=useState(true);
  const currentSong = useSelector(
    (state) => state.loginreducer?.currentSong
  );
  console.log(currentSong,"currentsongObject")
  const currentSongName = useSelector(
    (state) => state.loginreducer?.currentSong?.SongName
  );
  console.log(currentSong.SongUrl, "songurl");
  const songData = useSelector(
    (state) => state.loginreducer.currentPlayingSongArray
  );
  const Playing = useSelector((state) => state.loginreducer.isPlaying);
  console.log(songData, "songarray whether it is from playlist or main songs list");
  const audioElems = useRef();
  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    const divprogress = (offset / width) * 100;
    audioElems.current.currentTime =
      (divprogress / 100) * audioElems.current.duration;
  }

  const skipBack = () => {
    if (debounce.current) {
      clearTimeout(debounce.current);
    }
    const index = songData.findIndex((x) => x.SongUrl == currentSong.SongUrl);
    console.log(index, "z");
    if (index == 0) {
      debounce.current = setTimeout(() => {
        dispatch(setCurrentSongObj(songData[songData.length - 1]));
        dispatch(isPlayinggggg(true));
      }, 1000);
    } else {
      debounce.current = setTimeout(() => {
        dispatch(setCurrentSongObj(songData[index - 1]));
        dispatch(isPlayinggggg(true));
      }, 1000);
    }

    audioElems.current.currentTime = 0;
  };

  const skiptoNext = () => {
    const index = songData.findIndex((x) => x.SongUrl == currentSong.SongUrl);
    console.log("deb", debounce.current);
    if (debounce.current) {
      console.log(debounce,"debounce 1")
      clearTimeout(debounce.current);
      console.log(debounce,"debounce 2")
      
    }
    if (index == songData.length - 1) {
      console.log(songData[0], "save");
      console.log(debounce.current,"after debb")
      debounce.current = setTimeout(() => {
        dispatch(setCurrentSongObj(songData[0]));
        dispatch(isPlayinggggg(true));
      }, 1000);
      console.log(debounce, "debounceee");
    } else {
      console.log(songData[index + 1], "save");
     
      console.log(debounce.current,"after debb22");
      debounce.current = setTimeout(() => {
        dispatch(setCurrentSongObj(songData[index + 1]));
        dispatch(isPlayinggggg(true));
      },1000);
    }
    audioElems.current.currentTime = 0;
  };
  const PlayPause = () => {
    if (Playing) {
      audioElems.current.pause();
      dispatch(isPlayinggggg(false));
    } else {
      audioElems.current.play();
      dispatch(isPlayinggggg(true));
    }
  };

  const onPlaying = () => {
    const duration = audioElems.current.duration;
    const ct = audioElems.current.currentTime;
    progress.current.style.width=`${(ct/duration)*100 + "%"}`;
 
  };
  useEffect(() => {
 if(isFirstRender){
  setIsFirstRender(false);
  return ;
 }
 audioElems.current.currentTime = 0;
 audioElems.current.play();
  }, [currentSong]);
 
  useEffect(() => {
    dispatch(isPlayinggggg(false));
   
  }, []);
  const playNextSong=()=>{
   const index = songData.findIndex((x) => x.SongUrl == currentSong?.SongUrl);
   console.log(index,"index");  
   if (index == songData.length - 1) {
    console.log("2")
    dispatch(setCurrentSongObj(songData[0]));
    dispatch(isPlayinggggg(true));
   }
   else{
    console.log("1")
    dispatch(setCurrentSongObj(songData[index + 1]));
    dispatch(isPlayinggggg(true));  
   }
  }
  return (
    <>
    
    {currentSong ? 
        <audio src={currentSong.SongUrl} ref={audioElems} onTimeUpdate={onPlaying}  onEndedCapture={playNextSong}/>: null}
      
      
      
        <div className="player_container">
          <h1>{currentSongName}</h1>
          <div className="navigation">
            <div
              className="navigation_wrapper"
              onClick={checkWidth}
              ref={clickRef}
            >
              <div
                className="seek_bar"
                ref={progress}
              ></div>
            </div>
          </div>
          <div className="controls">
            <BsFillSkipStartCircleFill
              className="btn_action"
              onClick={skipBack}
            />
            {Playing ? (
              <BsFillPauseCircleFill
                className="btn_action pp"
                onClick={PlayPause}
              />
            ) : (
              <BsFillPlayCircleFill
                className="btn_action pp"
                onClick={PlayPause}
              />
            )}
            <BsFillSkipEndCircleFill
              className="btn_action"
              onClick={skiptoNext}
            />
          </div>
        </div>
   
    </>
  );
};

export default Player;
