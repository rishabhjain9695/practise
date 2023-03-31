
import React, { useEffect, useState } from 'react'
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
// import { list } from 'firebase/storage';
import likedicon from '../../imagess2/likedicon.png'
import maxresdefault from '../../imagess/maxresdefault.jpg'

function Home(props) {
  const [listofSongs, setListofsongs] = useState([]);
  
  const [playArray, setPlayArray] = useState([]);
  const [songsUrl, setSongsUrl] = useState([]);
  const [songdata,setSongData]=useState([]);
  const[userToken,setUserToken]=useState(""); 
  const[playlistname,setPlaylist]=useState("");
  const[playlistsongs,setPlaylistSongs]=useState([]);
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
         setSongData(a);
         console.log("Songsssss", songdata);
        //  console.log(m, "mmm");
       })
       .catch((error) => {
         console.log(error);
       });
           playlist();
          },[])
          // const d=()=>{
            //   console.log(songdata,"ss");
  // }
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
    //     let selectedPlaylist=getplaylistarray.find((e)=>{
    //       return 
    //     })
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

      
      console.log(listofSongs,"listOfSongs");
  return (
    <div id='flexx'>
      {/* <button style={{ color: 'red' }} onClick={listsongs}>click to load songs</button> */}
      <h1>All Songssssssssssssssssss</h1>
      {listofSongs.map((e) => {
        {/* console.log(ind),"kk"); */}
        return (
          <div id="flexx">
          <div>
        <img src={maxresdefault}/>
          <h1>{e.data.SongName}</h1>
          {/* <audio controls>
            <source src={e.data.SongUrl} />
          </audio> */}
          
          <button id={e.data.SongUrl}  onClick={(e)=>{
            console.log(e.target.id,"btn")
            setSongs(e.target.id)}}>
            Add 
            
          </button>
          <button  onClick={() =>{
            addtoLikedSongs(e.data.SongName);
          }}><img src={likedicon} id="hearticon"alt=""  />
</button>
                    </div>
          </div>
        )
      })}
      {/* <button onClick={d}>op</button> */}
    </div>

)
}

export default Home;

