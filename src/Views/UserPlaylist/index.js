
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
import "./User.css"
const UserPlaylist = () => {
    const[playlistname,setPlaylistName]=useState("");
const addplaylist=async()=>{
    await updateDoc(doc(db, "users", "UserId"), {
      ["playlist" + ["."+`${playlistname}`]]: arrayUnion()
    });
        const docRef = doc(db, "users","UserId");
        const docSnap = await getDoc(docRef);
        const getsongs = docSnap.data().playlist.playlistname;
        console.log(getsongs, "getsongsdata");
      
}
    return(
     <div id="flexx">
    <input type="text" placeholder="Create Playlist" value={playlistname} onChange={(e)=>{setPlaylistName(e.target.value)}}/>
    <button id="btnstylecreateplaylist"onClick={()=>{addplaylist(playlistname)}}>Create playlist</button>
 </div>
    );
      
}
export default UserPlaylist
