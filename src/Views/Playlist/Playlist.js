
import React, { useEffect, useRef, useState } from 'react'
import './navbar.css'
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
import "./navbar.css"
import { useSelector } from 'react-redux';
import likedicon from '../../imagess2/likedicon.png'
import maxresdefault from '../../imagess/maxresdefault.jpg'
import Player from 'Views/Player/Player';
import { Link } from 'react-router-dom';
function Home() {
  const audioElem=useRef();
  const [currentSong,setCurrentSong]=useState('');
  const [isPlaying,setIsPlaying]=useState(false);
  const [songdata,setSongData]=useState([]);
  const[userToken,setUserToken]=useState(""); 
  const[playlistname,setPlaylist]=useState("");
  const[playlistsongs,setPlaylistSongs]=useState([]);
  const[seekbar,setSeekbar]=useState(false);
  useEffect(()=>{
    playlist();
   let usertoken= localStorage.getItem("userIdToken")
     setUserToken(localStorage.getItem("userIdToken"))
     console.log(useState,"usertoken");
     const getdevref = collection(db, "songslist",);
     getDocs(getdevref)
       .then((response) => {
         const a = response.docs.map((doc) => {
           return(doc.data());
              
         });
     
         console.log(a,"checking a")
         console.log(songdata,"check")
         setSongData(a);
         console.log(songdata,"check")
         setCurrentSong("");
         console.log(currentSong,"cs");
       })
       .catch((error) => {
         console.log(error);
       });   
           
          },[])

       
  async function addtoLikedSongs(songname){
    console.log(songname,"songname")
    await updateDoc(doc(db, "users", userToken), {
      ["LikedSongs"]: arrayUnion(songname)
    });
  }
  async function playlist(){
    console.log("Hey");
    const docRef = doc(db, "users",userToken);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data(),"docsnap")
    const getplaylistdata = docSnap.data().playlist[playlistname];
    console.log("getplaylist",getplaylistdata)
    setPlaylistSongs(getplaylistdata);
    console.log(playlistname,"playlistname");
    
  }

 async function setSongs(id) {
   const filterele=songdata.find((e)=>{
     console.log(e,"eeeee");
            return e.SongUrl==id;
          })
          await updateDoc(doc(db, "users", userToken), {
            ["playlist" + ["."+`${playlistname}`]]: arrayUnion(filterele)
        });
    playlist();
      }
      const onPlaying=()=>{
        const duration= audioElem.current.duration;
        const ct= audioElem.current.currentTime;
        setCurrentSong({...currentSong,"progress":ct/duration *100,"length":duration})
      }
      return (
        <>
       
     
    <audio src={currentSong?.SongUrl} ref={audioElem} onTimeUpdate={onPlaying}/>
      <div className='main-container'>
      
<div className='spotify-playlists'>
 <h2>All Songs</h2>
 <div className='spotifydiv'>
<div className="currentsong">  
    
       { songdata.map((e) => {
        console.log(currentSong,"checkk");
        return (
          <>
  
          <div className="item">
<img src={maxresdefault} alt=""/>

<h4>{e.SongName}</h4>      
<button  onClick={()=>{
  setCurrentSong(e);
  setIsPlaying(!isPlaying);
  setSeekbar(true);
}}>click</button>


</div>

</>  )
      })}

    </div>
    </div>
    </div>
    <div className='spotify-playlists'>
 <div className='spotifydiv'>
<div className="list">  

    </div>
    </div>
 
    </div>
    <Player songdata={songdata} setSongData={setSongData} currentSong={currentSong} setCurrentSong={setCurrentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioElem={audioElem} seekbar={seekbar} setSeekbar={setSeekbar}/>
    </div>
  
    </>

)
}

export default Home;

