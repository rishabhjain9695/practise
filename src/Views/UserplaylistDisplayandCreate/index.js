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
// import { useParams } from 'react-router-dom';
const Userplaylistdisplayandcreate = () => {
  const params=useParams();
  const {name}=params;
  console.log(name,"11111111111")
  const uid=useSelector((state)=>state.loginreducer.loggedin);
  const [listofSongs, setListofsongs] = useState([]);
  const [playArray, setPlayArray] = useState([]);
  const [songsUrl, setSongsUrl] = useState([]);
  const [songdata,setSongData]=useState([]);
  const[playlistname,setPlaylist]=useState("");
  const[playlistsongs,setPlaylistSongs]=useState([]);
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
      // addplaylist();
    },[])
    return (
      <>
      <div id="flexx">
      <h1>{name} playlistt</h1>
      {playlistsongs.map((e)=>{
        return (
          <>
          <div id="flexx">          <h1>{e.SongName}</h1></div>
{/* 
          <audio  controls >
          <source src={e.SongUrl} />
        </audio>  */}
</>        )
      })}
      </div>
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
      </>
  )
}

export default Userplaylistdisplayandcreate

//   const addplaylist=async()=>{
//         const docRef = doc(db, "users",uid);
//         console.log(uid,"uid")
//         const docSnap = await getDoc(docRef);
//         console.log(name,"amaamam")
//         const getsongs = docSnap.data().playlist;
//         console.log(getsongs,"getttttttttttttttttttttttttttttt")
//         console.log(getsongs, "AYUSHSHHSHSHHSHSHHS");
      
// }
  // console.log("savemeeeee",name);