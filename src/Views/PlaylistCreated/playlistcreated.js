
import { useSelector } from 'react-redux'
import {db} from "../../firebase"
import './playlist.css'
import { NavLink } from 'react-router-dom'
import maxresdefault from "../../imagess/maxresdefault.jpg"
import { useEffect, useState } from 'react'
const CreatePlaylist = () => {
  const userPlaylistArr=useSelector((state)=>state.loginreducer.playlists);
  return (
    <>
    <div className='main-container'>
    <div className='spotify-playlists'>
     <h2>Spotify Playlists</h2>
     <div className='spotifydiv'>
<div className="list">
     {Array.isArray(userPlaylistArr)? userPlaylistArr?.map((selectedPlaylist,index)=>{

       return(
       
<div className="item" key={index}>
<img src={maxresdefault}alt=""/>
 
  <h4>Today's Top Hits</h4>
  <NavLink className='navstyle' to={'/userplaylistdisplay/'+selectedPlaylist}>{selectedPlaylist}</NavLink>
</div>

       )
     }):null}
    </div>
</div>
    </div>
    
    </div>

    </>
  )

  }

export default CreatePlaylist;