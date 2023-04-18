
import { useDispatch, useSelector } from 'react-redux'
import {db} from "../../firebase"
import './playlist.css'
import { NavLink, useHistory } from 'react-router-dom'
import maxresdefault from "../../imagess/maxresdefault.jpg" 
import { getSelectedPlaylistSongs } from 'Redux/Actions/Loginactions/loginactions'
const UserPlaylists = () => {
  const userPlaylistArr=useSelector((state)=>state.loginreducer.playlists);
  const userToken=useSelector((state)=>state.loginreducer.loggedin);
  const dispatch=useDispatch();
  const navigate=useHistory();
  return (
    <>
    <div className='main-container'>
    <div className='spotify-playlists'>
     <h2  >Spotify Playlists</h2>
     <div className='spotifydiv'>
<div className="list" >
     {Array.isArray(userPlaylistArr)? userPlaylistArr.map((selectedPlaylist,index)=>{

       return(
       
<div className="item" key={index} onClick={()=>{dispatch(getSelectedPlaylistSongs({userToken,selectedPlaylist}))
   console.log("wowowwoo");
   navigate.push('/userplaylistdisplay/'+selectedPlaylist);

}}>
<img src={maxresdefault}alt=""/>
 
  <h4>Today's Top Playlist</h4>
<span style={{color:'white'}}>  {selectedPlaylist}  </span>
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

export default UserPlaylists;