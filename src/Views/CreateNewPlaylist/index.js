// checked 
import { db } from '../../firebase';
import { useState } from "react";
import { useSelector } from "react-redux";
import "./User.css"
import songswalpaper from "../../imagess/songswalpaper.jpg"
import { addNewplaylist } from "Redux/Actions/Loginactions/loginactions";
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const CreateNewPlaylist = () => {
    const userToken=useSelector((state)=>state.loginreducer.loggedin);
    const [playlistname, setPlaylistName] = useState("");
    const dispatch=useDispatch();

    return (
        <div id="flexx">
            <input type="text" id="createNewPlaylistInput" placeholder="Create Playlist" value={playlistname} onChange={(e) => { setPlaylistName(e.target.value) }} />
            <NavLink to='/userPlaylists' style={{textDecoration:'none'}} id="btnstylecreateplaylist" onClick={()=>{dispatch(addNewplaylist({userToken,playlistname}))}}> Create </NavLink>
        </div>
    );

}
export default CreateNewPlaylist;



