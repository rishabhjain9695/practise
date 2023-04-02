import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import {
    collection,arrayUnion,
    getDocs,
    getDoc,
    addDoc,
    doc,
    updateDoc,
    setDoc
  } from "firebase/firestore";
import { db } from 'firebase';
import maxresdefault from '../../imagess/maxresdefault.jpg'
const LikedSong = () => {
    const uid=useSelector((state)=>state.loginreducer.loggedin);
    const [userlikedSongs,setUserLikedSongs]=useState([]);
    useEffect(()=>{
      getLikedSongs();    
    },[])
    async function getLikedSongs(){
        const user = doc(db, "users",uid);
                console.log(uid,"uid")
                const useref = await getDoc(user);
                const userlikedSongs= useref.data().LikedSongs;
                setUserLikedSongs(userlikedSongs);

    } 
  return (
    <div className='main-container'>
    <div className='spotify-playlists'>
     <h2>Liked Songs</h2>
     <div className='spotifydiv'>
    <div className="list">  
      {userlikedSongs.map((e)=>{
        return (
          <>
  
  <div className="item">
<img src={maxresdefault} alt=""/>

<h4>{e}</h4>   
</div>
</>
        )
      })}
      </div>
    </div>
    </div>
    </div>
  )
}

export default LikedSong
