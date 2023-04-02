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
      
      <div class="navigation">
        <ul>
          <li>
           <Link to='/Home'>Home</Link> 
          </li>

          <li>
         
              <span class="fa fa-search"></span>
              <Link >Search</Link>
             
          </li>
        </ul>
      </div>

      <div class="navigation">
      <ul>
          <li>
           <Link to='/createdplaylist'>Playlist</Link> 
          </li>
          </ul>
        <ul>
          <li>
      
       <Link to='/playlist' >Createe Playlist</Link>
           
}            
          </li>

          <li>
       
              <span class="fa fas fa-heart"></span>
              <Link to="/likedsongs">Liked Songs</Link>
    
          </li>
        </ul>
      </div>

     
    </div>


  )
}

export default Sidebar;
