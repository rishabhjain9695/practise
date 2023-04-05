import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {db} from "../../firebase"
import { Modals } from 'Components/Modal/Modal'
import './playlist.css'
import { Link } from 'react-router-dom'

import {
  collection,arrayUnion,
  getDocs,
  getDoc,
  addDoc,
  doc,
  updateDoc,
  setDoc
} from "firebase/firestore";
import CustomModal from 'Components/Cells/CustomModal/Custommodal'
import { NavLink } from 'react-router-dom'
import maxresdefault from "../../imagess/maxresdefault.jpg"
const Playlistcreated = () => {
  const [playlistnames,setPlaylistName]=useState([]);
    const uid=useSelector((state)=>state.loginreducer.loggedin);
const [songdata,setSongData]=useState([]);
    const[userToken,setUserToken]=useState(""); 
    useEffect(()=>{
       setUserToken(localStorage.getItem("userIdToken"))
       console.log(useState,"usertoken");
       const getdevref = collection(db, "songslist",);
       getDocs(getdevref)
         .then((response) => {
           const a = response.docs.map((doc) => {
             return(doc.data());
                
           });
           console.log(a,"vikas")
           setSongData(a);
         })
         .catch((error) => {
           console.log(error);
         });
  
         setPlaylistNames();
    },[])
    async function setPlaylistNames(){
      const docRef = doc(db, "users",uid);
      const docSnap = await getDoc(docRef);
      const userdata = docSnap.data();
      const userdataplaylist=userdata.playlist;
      console.log(userdataplaylist,"userplaylist")
      const playlistnames=Object.keys(userdataplaylist);
      console.log(playlistnames,"playlistnames");
      setPlaylistName(playlistnames);
      console.log(userdata,"getsongs")
    }
  return (
    <>
    <div className='main-container'>
    <div className='spotify-playlists'>
     <h2>Spotify Playlists</h2>
     <div className='spotifydiv'>
<div className="list">
     {playlistnames?.map((e)=>{
      const pl={e};

       return(
       
<div className="item">
<img src={maxresdefault}alt=""/>
 
  <h4>Today's Top Hits</h4>
  <NavLink className='navstyle' to={'/userplaylistdisplay/'+pl.e}>{e}</NavLink>
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

export default Playlistcreated;