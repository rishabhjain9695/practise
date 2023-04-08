import React from 'react'
import "./Sidebar.css"
import SpotifyLogo from "../../../imagess/SpotifyLogo.png"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Sidebar() {
  const loggedinuser=useSelector((state)=>state.loginreducer.loggedin);
  // const l=useSelector((state)=>state.loginreducer.userplaylists);
  console.log(loggedinuser,"checkedtarun")
  return (  
    <div className="sidebar">
      <div className="logo">
        
          <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="Logo" />
      </div>
      
      <div className="navigation">
        <ul>
          <li key={Math.floor(Math.random()*100)}>
           <Link to='/Home'>Home</Link> 
          </li>
        </ul>
         <ul>
         <li key={Math.floor(Math.random()*100)}>
           <Link to='/createdplaylist'>Playlist</Link> 
          </li>
          </ul>
        <ul>
        <li key={Math.floor(Math.random()*100)}>
      
       <Link to='/playlist' >Create Playlist</Link>
           
          
          </li>

          <li key={Math.random()}>
       
              <span className="fa fas fa-heart"></span>
              <Link to="/likedsongs">Liked Songs</Link>
    
          </li>
        </ul>
      </div>

     

     
    </div>


  )
}

export default Sidebar;
