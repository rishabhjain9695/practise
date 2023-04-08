
import { useSelector } from 'react-redux'
import {db} from "../../firebase"
import './playlist.css'
import { NavLink } from 'react-router-dom'
import maxresdefault from "../../imagess/maxresdefault.jpg"
const CreatePlaylist = () => {

  const userPlaylistArray=useSelector((state)=>state.loginreducer.playlists);
  console.log(userPlaylistArray,"aarav");
  return (
    <>
    <div className='main-container'>
    <div className='spotify-playlists'>
     <h2>Spotify Playlists</h2>
     <div className='spotifydiv'>
<div className="list">
     {userPlaylistArray?.map((selectedPlaylist,index)=>{

       return(
       
<div className="item" key={index}>
<img src={maxresdefault}alt=""/>
 
  <h4>Today's Top Hits</h4>
  <NavLink className='navstyle' to={'/userplaylistdisplay/'+selectedPlaylist}>{selectedPlaylist}</NavLink>
</div>

       )
     })}
    </div>
</div>
    </div>
    
    </div>

    </>
  )

  }

export default CreatePlaylist;