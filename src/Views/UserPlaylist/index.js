// checked 
import {
    collection,arrayUnion,
    getDocs,
    getDoc,
    addDoc,
    doc,
    updateDoc,
    setDoc
    } from "firebase/firestore";
    
import { db } from '../../firebase';
import { useState } from "react";
import { useSelector } from "react-redux";
import "./User.css"
import { useHistory } from "react-router-dom";
import { addNewplaylist } from "Redux/Actions/Loginactions/loginactions";
const UserPlaylist = () => {
    const navigate=useHistory();
    const userToken=useSelector((state)=>state.loginreducer.loggedin);
    const[playlistname,setPlaylistName]=useState("");
// const addplaylist=async()=>{
   
//         const userRef = doc(db, "users","UserId");
//         const userDoc = await getDoc(userRef);
//         const getsongs = userDoc.data().playlist.playlistname;
//         console.log(getsongs, "getsongsdata");
//         navigate.push('/createdplaylist')
      
// }
    return(
     <div id="flexx">
    <input type="text" placeholder="Create Playlist" value={playlistname} onChange={(e)=>{setPlaylistName(e.target.value)}}/>
    <button id="btnstylecreateplaylist" onClick={addNewplaylist(playlistname)}>o playlist</button>
 </div>
    );
      
}
export default UserPlaylist



