
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
  const [listofSongs, setListofsongs] = useState([]);
  const [currentSong,setCurrentSong]=useState('');
  const [isPlaying,setIsPlaying]=useState(false);
  const [songdata,setSongData]=useState([]);
  const[userToken,setUserToken]=useState(""); 
  const[playlistname,setPlaylist]=useState("");
  const[playlistsongs,setPlaylistSongs]=useState([]);
  const[seekbar,setSeekbar]=useState(false);
  useEffect(()=>{
    listsongs();
     setUserToken(localStorage.getItem("userIdToken"))
     console.log(useState,"usertoken");
     const getdevref = collection(db, "songslist",);
     getDocs(getdevref)
       .then((response) => {
         const a = response.docs.map((doc) => {
           return(doc.data());
              
         });
         console.log(a,"vikas")
         console.log(songdata,"MAFi")
         setSongData(a);
         console.log(songdata,"MAFi")
         setCurrentSong("");
         console.log(currentSong,"cs");
       })
       .catch((error) => {
         console.log(error);
       });
           playlist();
          },[])
          useEffect(()=>{
  
            audioElem.current.play();
          
            }
          ,[isPlaying])
  async function addtoLikedSongs(songname){
    console.log(songname,"songname")
    await updateDoc(doc(db, "users", userToken), {
      ["LikedSongs"]: arrayUnion(songname)
    });
  }
  async function playlist(){
    const docRef = doc(db, "users",userToken);
    const docSnap = await getDoc(docRef);
    const getplaylistdata = docSnap.data().playlist[playlistname];
    console.log("getplaylist",getplaylistdata)
    setPlaylistSongs(getplaylistdata);
    console.log(playlistname,"tttt");
    // console.log(getsongs,"get");
  }
  function listsongs() {
    const getsongs = collection(db, "songslist");
    getDocs(getsongs)
    .then((response) => {
      const a = response.docs.map((doc) => {
        return {
          data: doc.data(),
          };
        });
        setListofsongs(a);
        console.log("aacheck", a);
        // console.log(m, "mmm");
      })
      .catch((error) => {
        console.log(error);
      });
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

      
      console.log(listofSongs,"listOfSongs");
      return (
        <>
    <audio src={currentSong?.SongUrl} ref={audioElem} onTimeUpdate={onPlaying}/>
      <div className='main-container'>
        <input type="search" name="" id="" />
<div className='spotify-playlists'>
 <h2>All Songs</h2>
 <div className='spotifydiv'>
<div className="list">  
    
       { songdata.map((e) => {
        console.log(currentSong,"ram");
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

{/* <button id={e.SongUrl}  onClick={(e)=>{

            console.log(e.target.id,"btn")
            setSongs(e.target.id)}}>
            Add 
            
          </button> */}
          <Link  onClick={() =>{
            addtoLikedSongs(e.SongName);
          }}>
          <img src={likedicon} id="hearticon"alt=""  />
</Link>
</div>
</>  )
      })}

    </div>
    </div>
    </div>
    <Player songdata={songdata} setSongData={setSongData} currentSong={currentSong} setCurrentSong={setCurrentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioElem={audioElem} seekbar={seekbar} setSeekbar={setSeekbar}/>
    </div>
  
    </>

)
}

export default Home;

