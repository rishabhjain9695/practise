import React, { useEffect, useRef, useState } from 'react';
import './player.css';
import {BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill, BsSkipEndCircleFill, BsFillSkipEndCircleFill} from 'react-icons/bs';

const Player = ({songdata,setSongData,currentSong,setCurrentSong,isPlaying,setIsPlaying,audioElem,seekbar,setSeekbar})=> {
const [show,setShow]=useState(false);
      const clickRef = useRef();

    //  const PlayPause = ()=>
    //   {
    //     console.log("tarunstrong",isPlaying);
    //     console.log("tarunstrong",isPlaying);
    //     if(isPlaying){
    //         console.log("q",isPlaying);
    //         console.log("Ayushh")
    //         audioElem.current.pause();
    //     }
    //     else{
    //         audioElem.current.pause();
    //     }
    //     setIsPlaying(!isPlaying);
    //   }


  const checkWidth = (e)=>
  {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = offset / width * 100;
    audioElem.current.currentTime = divprogress / 100 * currentSong.length;

  }

  const skipBack = ()=>
  {
    const index = songdata.findIndex(x=>x.SongName == currentSong.SongName);
    if (index == 0)
    {
      setCurrentSong(songdata[songdata.length - 1])
    }
    else
    {
      setCurrentSong(songdata[index - 1])
    }
    audioElem.current.currentTime = 0;
    setIsPlaying(!isPlaying);
  setSeekbar(true);
    
  }


  const skiptoNext = ()=>
  {
    console.log("he12")
    const index = songdata.findIndex(x=>x.SongName == currentSong.SongName);

    if (index == songdata.length-1)
    {
      setCurrentSong(songdata[0])
    }
    else
    {
      setCurrentSong(songdata[index + 1])
    }
    audioElem.current.currentTime = 0;
    setIsPlaying(!isPlaying);
    setSeekbar(true);
    
  }
const PlayPause=()=>{
    setSeekbar(!seekbar);
}
useEffect(()=>{
    if(seekbar){
        audioElem.current.play();
    }
    else{
        audioElem.current.pause();
    }
},[seekbar])

useEffect(()=>{
    setShow(true);
},[isPlaying])
useEffect(()=>{
    setShow(false);
},[])
  return (
    <>

   {show? <div className='player_container'>
   <h1>{currentSong.SongName}</h1>
    <div className="navigation">
      <div className="navigation_wrapper" onClick={checkWidth} ref={clickRef} >
        <div className="seek_bar" style={{width:`${currentSong.progress+'%'}`}}></div>
      </div>
    </div>
    <div className="controls">
      <BsFillSkipStartCircleFill className='btn_action' onClick={skipBack}/>
      {seekbar ? <BsFillPauseCircleFill className='btn_action pp' onClick={PlayPause} /> : <BsFillPlayCircleFill className='btn_action pp'onClick={PlayPause} />}
      <BsFillSkipEndCircleFill className='btn_action' onClick={skiptoNext}/>        
    </div>
  </div>: null}
</>
  
  )
}

export default Player;