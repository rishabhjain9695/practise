// checked 
import { db } from '../../firebase';
import { useState } from "react";
import { useSelector } from "react-redux";
import "./User.css"
import { useHistory } from "react-router-dom";
import { addNewplaylist } from "Redux/Actions/Loginactions/loginactions";
import { NavLink } from 'react-router-dom';
const UserPlaylist = () => {
    const [playlistname, setPlaylistName] = useState("");

    return (
        <div id="flexx">
            <input type="text" placeholder="Create Playlist" value={playlistname} onChange={(e) => { setPlaylistName(e.target.value) }} />
            <NavLink to='/createdplaylist' style={{textDecoration:'none'}} id="btnstylecreateplaylist" onClick={()=>{addNewplaylist(playlistname)}}>o playlist</NavLink>
        </div>
    );

}
export default UserPlaylist



