
import React, { useEffect, useMemo, useRef, useState } from 'react'
import './navbar.css'
import "./navbar.css"
import maxresdefault from '../../imagess/maxresdefault.jpg'
import Player from 'Views/Player/Player';
import {  useSelector } from 'react-redux';
function Home() {
  const userSongsList=useSelector((state)=> state.loginreducer.songs);

  const audioElem = useRef();
  const [currentSong, setCurrentSong] = useState(null);
     const [filteredSong,setFilteredSong]=useState([]);
     const [searchValue,setSearchValue]=useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [enablePauseButton, setPlaybutton] = useState(false);
  const [cond,setCond]=useState(false);
  const [cond2,setCond2]=useState(false);
     useEffect(()=>{
      console.log(searchValue,"searchhchchc")
    const debounce = setTimeout(()=>findSearchSong(searchValue), 1000);
    return ()=>clearTimeout(debounce);
   },[searchValue])
  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;
    setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })
  }
  const searching=(value)=>{
    setSearchValue(value);
    if(value==""){
      setCond(false);
    }
    else{
    setCond(true);
    console.log("ab")
    }}
  const findSearchSong=(searchValue)=>{
       let filteredData= userSongsList && userSongsList?.filter((value)=>value.SongName.toLowerCase().includes(searchValue.toLowerCase()));
      //  console.log(filteredData[0],"ff");
       if(filteredData?.length!==0){
       setCond2(true);
        setFilteredSong(filteredData);
       }
       else{
        setCond2(false);
       }
  }
  return (
    <>         
      <audio src={currentSong?.SongUrl} ref={audioElem} onTimeUpdate={onPlaying} />
      <div className='main-container'>
      <input type="search" value={searchValue} onChange={(e)=>searching(e.target.value) } />
        <div className='spotify-playlists'>
          <h2>All Songs</h2>
          <div className='spotifydiv'>
            <div >

              {!cond ? ( userSongsList && userSongsList.map((e,i) => {
                return (

                    <div className="item" key={i}>
                      <img src={maxresdefault} alt="" />

                      <h4 style={{color:'white'}}>{e.SongName}</h4>
                      <button id="btnn" onClick={() => {
                        setCurrentSong(e);
                        setIsPlaying(!isPlaying);
                        setPlaybutton(true);
                      }}>click</button>

                    </div>

                  )
              })): ( cond2 ? filteredSong && filteredSong.map((e,i) => {
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
              }): null ) }    

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

