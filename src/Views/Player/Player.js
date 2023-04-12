import React, { useEffect, useRef, useState } from 'react';
import './player.css';
import {BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill, BsFillSkipEndCircleFill} from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setCurrentSongObj } from 'Redux/Actions/Loginactions/loginactions';
const Player = ()=> {
      const clickRef = useRef();
      const dispatch=useDispatch();
      const currentSongUrl=useSelector((state)=>state.loginreducer.currentSong.SongUrl);
      const currentSongName=useSelector((state)=>state.loginreducer.currentSong.SongName);
      console.log(currentSongUrl,"reduxurl")
      const [currentSongg,setCurrentSongg]=useState("");
      const songData=useSelector((state)=>state.loginreducer.songs);
      const [isPlaaying,setIsplayying]=useState(false);
      console.log(songData,"sonnn");
      const audioElems=useRef();
  const checkWidth = (e)=>
  {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    const divprogress = offset / width * 100;
    audioElems.current.currentTime = divprogress / 100 * currentSong.length;

  }

  const skipBack = ()=>
  {
    console.log(songData[songData.length-1].SongUrl,"sd");
    console.log(currentSongg,"cs");
    const index = songData.findIndex(x=>x.SongUrl == currentSongUrl);
    console.log(index,"z")
    if (index == 0)
    {
      console.log(songData[songData.length-1],"save")
      // setCurrentSongg(songData[songData.length - 1])
      dispatch(setCurrentSongObj(songData[songData.length-1]));
    }
    else
    {
      console.log(songData[index-1],"save")
      dispatch(setCurrentSongObj(songData[index-1]));
    }

    audioElems.current.currentTime = 0;
  //   setIsPlaying(!isPlaying); 
  // setPlaybutton(true);
    
  }


  const skiptoNext = ()=>
  {
   
    const index = songData.findIndex(x=>x.SongUrl == currentSongUrl);

    if (index == songData.length-1)
    {
      console.log(songData[0],"save")
      dispatch(setCurrentSongObj(songData[0]));
    }
    else
    {
      console.log(songData[index+1],"save")
      dispatch(setCurrentSongObj(songData[index+1]))
    }
    audioElems.current.currentTime = 0;
    //     setIsPlaying(!isPlaying);
    // setPlaybutton(true);
  }
const PlayPause=()=>{
  if(isPlaaying){
    // audioElems.current.pause();
    setIsplayying(false);
  }
  else{
    // audioElems.current.play()
    setIsplayying(true);
  }

}

// useEffect(()=>{
// if(isPlaaying){
//   audioElems.current.pause();
// }
// else{
//   audioElems.current.play();
// }
// },[isPlaaying])
const onPlaying = () => {
  const duration = audioElems.current.duration;
  const ct = audioElems.current.currentTime;
  // setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })
}
useEffect(()=>{
  if(currentSongUrl!==""){
    console.log(currentSongUrl,"aas")
    audioElems.current.play();
    // setIsplayying(true);
    // PlayPause(); 
  }
},[currentSongUrl])

   
  return (
    <>     <audio src={currentSongUrl} ref={audioElems} onTimeUpdate={onPlaying} />
{ <div className='player_container'>
   <h1>{currentSongName}</h1>
    <div className="navigation">
      <div className="navigation_wrapper" onClick={checkWidth} ref={clickRef} >
        <div className="seek_bar" style={{width:`${currentSongg?.progress+'%'}`}}></div>
      </div>
    </div>
    <div className="controls">
      <BsFillSkipStartCircleFill className='btn_action' onClick={skipBack}/>
      {isPlaaying ? <BsFillPauseCircleFill className='btn_action pp' onClick={PlayPause} /> : <BsFillPlayCircleFill className='btn_action pp'onClick={PlayPause} />}
      <BsFillSkipEndCircleFill className='btn_action' onClick={skiptoNext}/>        
    </div>
  </div>}
</>
  
  )
}

export default Player;



// useEffect(()=>{
//     if(enablePauseButton){
//         audioElem?.current?.play();
//         setShow(true);
//     }
//     else{
//         audioElem?.current?.pause();
//     }
// },[enablePauseButton])
