import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Sidebar() {
  const loggedinuser=useSelector((state)=>state.loginreducer.loggedin);
  console.log(loggedinuser,"checkedtarun")
  return (  
    <div className="sidebar">
      <div className="logo">
        
          <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="Logo" />
      </div>
      
      <div className="navigation">
        <ul>
          <li>
           <Link to='/Home'>Home</Link> 
          </li>
        </ul>
         <ul>
         <li>
           <Link to='/userPlaylists'>Playlist</Link> 
          </li>
          </ul>
        <ul>
        <li>
      
       <Link to='/createNewPlaylist' >Create Playlist</Link>
           
          
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
