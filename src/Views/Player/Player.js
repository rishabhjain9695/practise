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
  const [progress, setProgress] = useState(0);
  const clickRef = useRef();
  const debounce = useRef();
  const dispatch = useDispatch();
  const currentSongUrl = useSelector(
    (state) => state.loginreducer?.currentSong?.SongUrl
  );
  const currentSongName = useSelector(
    (state) => state.loginreducer?.currentSong?.SongName
  );
  console.log(currentSongUrl, "reduxurl");
  const songData = useSelector(
    (state) => state.loginreducer.currentPlayingSongArray
  );
  const Playing = useSelector((state) => state.loginreducer.isPlaying);
  console.log(songData, "cool");
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
      // return ;

    }
    console.log(songData[songData.length - 1].SongUrl, "sd");
    const index = songData.findIndex((x) => x.SongUrl == currentSongUrl);
    console.log(index, "z");
    if (index == 0) {
      console.log(songData[songData.length - 1], "save");
      debounce.current = setTimeout(() => {
        dispatch(setCurrentSongObj(songData[songData.length - 1]));
        dispatch(isPlayinggggg(true));
      }, 700);
    } else {
      console.log(songData[index - 1], "save");
      debounce.current = setTimeout(() => {
        dispatch(setCurrentSongObj(songData[index - 1]));
        dispatch(isPlayinggggg(true));
      }, 600);
    }

    audioElems.current.currentTime = 0;
  };

  const skiptoNext = () => {
    const index = songData.findIndex((x) => x.SongUrl == currentSongUrl);
    console.log("deb", debounce.current);
    if (debounce.current) {
      console.log(debounce,"debounce 1")
      clearTimeout(debounce.current);
      console.log(debounce,"debounce 2")
      
    }
    if (index == songData.length - 1) {
      console.log(songData[0], "save");
      audioElems.current.pause();
      console.log(debounce.current,"after debb")
      debounce.current = setTimeout(() => {
        dispatch(setCurrentSongObj(songData[0]));
        dispatch(isPlayinggggg(true));
      }, 800);
      console.log(debounce, "debounceee");
    } else {
      console.log(songData[index + 1], "save");
      audioElems.current.pause();
      console.log(debounce.current,"after debb22")
      debounce.current = setTimeout(() => {
        dispatch(setCurrentSongObj(songData[index + 1]));
        dispatch(isPlayinggggg(true));
      });
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
    setProgress((ct / duration) * 100);
  };
  useEffect(() => {
    if (currentSongUrl !== "") {
      console.log(currentSongUrl, "aas");
      audioElems.current.play();
    }
  }, [currentSongUrl]);
  useEffect(() => {
    dispatch(isPlayinggggg(false));
    if(audioElems.current){
      audioElems.current.onended=function(){
        console.log("heyeeyeyey");
    }
  }
   
  }, []);

  return (
    <>
      {" "}
      <audio src={currentSongUrl} ref={audioElems} onTimeUpdate={onPlaying} />
      {
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
                style={{ width: `${progress + "%"}` }}
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
      }
    </>
  );
};

export default Player;
