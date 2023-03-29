import React from 'react'
import "./Sidebar.css"
import SpotifyLogo from "../../../imagess/SpotifyLogo.png"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Sidebar() {
  const loggedinuser=useSelector((state)=>state.loginreducer.loggedin);
  return (  
    <div className="sidebar">
      <div className="logo">
        
          <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="Logo" />
      </div>
      
      <div class="navigation">
        <ul>
          <li>
          { loggedinuser?  <Link to='/home'>   <span class="fa fas fa-plus-square"></span>
              <span>Home</span></Link>:<Link>Home</Link>}
          </li>

          <li>
          <a href="#">
              <span class="fa fa-search"></span>
              <span>Search</span>
              </a>
          </li>

          <li>
            <a href="#">
              <span class="fa fas fa-book"></span>
              <span>Your Library</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="navigation">
        <ul>
          <li>
       {loggedinuser?<Link to='/playlist'>   <span class="fa fas fa-plus-square">Create Playlist</span></Link>:
       <Link >   <span class="fa fas fa-plus-square">Create Playlist</span></Link>
           
}            
          </li>

          <li>
            <a href="#">
              <span class="fa fas fa-heart"></span>
              <span>Liked Songs</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="policies">
        <ul>
          <li>
            <a href="#">Cookies</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </ul>
      </div>
    </div>


  )
}

export default Sidebar;
