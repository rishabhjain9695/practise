import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import maxresdefault from '../../imagess/maxresdefault.jpg'
const LikedSong = () => {
    
    const likedSongs=useSelector((state)=>state.loginreducer.likedSongs);
return (
    <div className='main-container'>
    <div className='spotify-playlists'>
     <h2>Liked Songs</h2>
     <div className='spotifydiv'>
    <div className="list">  
      {likedSongs?.map((e,i)=>{
        return (
          
  <div className="item" key={i}>
<img src={maxresdefault} alt=""/>

<h4>{e}</h4>   
</div>
        )
      })}
      </div>
    </div>
    </div>
    </div>
  )
}

export default LikedSong
