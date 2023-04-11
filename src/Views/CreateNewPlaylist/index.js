// checked 
import { db } from '../../firebase';
import { useState } from "react";
import { useSelector } from "react-redux";
import "./User.css"
import { addNewplaylist } from "Redux/Actions/Loginactions/loginactions";
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const UserPlaylist = () => {
    const userToken=useSelector((state)=>state.loginreducer.loggedin);
    const [playlistname, setPlaylistName] = useState("");
    const dispatch=useDispatch();

    return (
        <div id="flexx">
            <input type="text" placeholder="Create Playlist" value={playlistname} onChange={(e) => { setPlaylistName(e.target.value) }} />
            <NavLink to='/createdplaylist' style={{textDecoration:'none'}} id="btnstylecreateplaylist" onClick={()=>{dispatch(addNewplaylist({userToken,playlistname}))}}> Create New playlist</NavLink>
        </div>
    );

}
export default UserPlaylist;



