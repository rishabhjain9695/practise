import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
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
import { useSelector } from 'react-redux';
import likedicon from '../../imagess2/likedicon.png'
import maxresdefault from '../../imagess/maxresdefault.jpg'
import "./App.css"
import { NavLink } from 'react-router-dom';
import Player from 'Views/Player/Player';
import { useRef } from 'react';
import Home from 'Views/Playlist/Playlist';
// import { useParams } from 'react-router-dom';
const Userplaylistdisplayandcreate = () => {
  const params=useParams();
  const audioElem=useRef();
  const {name}=params;
  console.log(name,"11111111111")
  const uid=useSelector((state)=>state.loginreducer.loggedin);
  const [listofSongs, setListofsongs] = useState([]);
  const [playArray, setPlayArray] = useState([]);
  const [songsUrl, setSongsUrl] = useState([]);
  const [songdata,setSongData]=useState([]);
  const [currentSong,setCurrentSong]=useState('');
  const [isPlaying,setIsPlaying]=useState(false);
  const[playlistname,setPlaylist]=useState("");
  const[playlistsongs,setPlaylistSongs]=useState([]);
  const[seekbar,setSeekbar]=useState(false);
  useEffect(()=>{
    listsongs();
     console.log(useState,"usertoken");
     const getdevref = collection(db, "songslist",);
     getDocs(getdevref)
       .then((response) => {
         const a = response.docs.map((doc) => {
           return(doc.data());
              
         });
         console.log(a,"vikas")
         setSongData(a);
         console.log("Songsssss", songdata);
         
       })
       .catch((error) => {
         console.log(error);
       });
           playlist();
          },[])
        
  async function addtoLikedSongs(songname){
    console.log(songname,"songname")
    await updateDoc(doc(db, "users", uid), {
      ["LikedSongs"]: arrayUnion(songname)
    });
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
          await updateDoc(doc(db, "users", uid), {
            ["playlist" + ["."+`${playlistname}`]]: arrayUnion(filterele)
        });
    playlist();
 }
    useEffect(()=>{
            setPlaylist(name);
    },[name])
    async function playlist(){
      const docRef = doc(db, "users",uid);
      const docSnap = await getDoc(docRef);
      const getplaylistdata = docSnap.data().playlist[name];
      console.log("getplaylist",getplaylistdata)
     
      setPlaylistSongs(getplaylistdata);
      console.log(playlistname,"tttt");
      // console.log(getsongs,"get");
    }
    useEffect(()=>{
  
      audioElem.current.play();
    
      }
    ,[isPlaying])
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
 <h2>{name}</h2>
 <div className='spotifydiv'>
<div className="list">
      {playlistsongs?.map((e)=>{
        return (
          <>
          <div className="item">
<img src={maxresdefault} alt=""/>

<h4>Today's Top Hits</h4>
<h >{e.SongName}</h>
<button   style={{backgroundColor:'grey'}}      onClick={()=>{
  setCurrentSong(e);
  setIsPlaying(!isPlaying);
  setSeekbar(true);
}}>click</button>
</div>

</>        )
      })}
      </div>
</div>
</div>
 <>
      <div className='main-container'>
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
<button id={e.SongUrl} style={{backgroundColor:'grey'}}  onClick={(e)=>{

            console.log(e.target.id,"btn")
            setSongs(e.target.id)}}>
            Add 
            
          </button>
          <button  onClick={() =>{
            addtoLikedSongs(e.SongName);
          }}>
          <img src={likedicon} id="hearticon"alt=""  />
</button>
</div>
</>  )
      })}

    </div>
    </div>
    </div>
    <Player songdata={playlistsongs} setSongData={setPlaylistSongs} currentSong={currentSong} setCurrentSong={setCurrentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioElem={audioElem} seekbar={seekbar} setSeekbar={setSeekbar}/>
    </div>
  
    </>
<Player songdata={songdata} setSongData={setSongData} currentSong={currentSong} setCurrentSong={setCurrentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioElem={audioElem} seekbar={seekbar} setSeekbar={setSeekbar}/>/


</div>

    </>
      
  )
}

export default Userplaylistdisplayandcreate

