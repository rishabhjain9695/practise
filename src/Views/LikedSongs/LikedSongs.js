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
    <div id="flexx">
            <h1 style={{color:'red'}}>Liked Songs</h1>
      {userlikedSongs.map((e)=>{
        return (
            <div id="flexx">
               <p style={{color:'orange'}}>{e}</p> 
            </div>
        )
      })}
    </div>
  )
}

export default LikedSong
