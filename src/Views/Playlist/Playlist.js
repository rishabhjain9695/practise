
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

// function listsongs() {
  //   const getsongs = collection(db, "songslist");
  //   getDocs(getsongs)
  //     .then((response) => {
    //       const a = response.docs.map((doc) => {
      //         return {
        //           data: doc.data(),
  //           id: doc.id
  //         };
  //       });
  //       setListofsongs(a);
  //       console.log("aacheck", a);
  //       // console.log(m, "mmm");
  // console.log(filterele,"filktreweeer");
  // arr.push(filterele);
  // console.log(arr,"setting");
  // const UpdateSongRef = doc(db, "users",userToken);
  // updateDoc(UpdateSongRef,{playlist:arr}) 
  
  // setListofsongs(a);
  // console.log("aacheck", a);
  // console.log(m, "mmm");
  //   console.log(playArray,"play")
  //   playArray.map((e)=>{
    //     // setSongsUrl(.e.data);
    //     arr.push(e.data);
    //     console.log(arr,"ch");
    //   })
    //   console.log(arr,"arrys");
    //   arr.push(id);
  //   console.log(arr,"onclick");
  //     
  //     })
  //     .catch((error) => {
    //       console.log(error);
//     });
// }
  // let arr=[];
  // const docRef =  doc(db, "users", userToken);
  // const docSnap = await getDoc(docRef);
  //     const getsongs = docSnap.data().playlist;
  //     console.log(getsongs,"gettt");
  //              setPlayArray(getsongs);
  //         // console.log(playArray,"playlisat")
  //         playArray.map((e)=>{
    //           arr.push(e);
    //         })
    //         console.log(arr,"aswsonfffgs");
    // const playlist=useSelector((state)=>state.loginreducer.playlist)   // lists(listofSongs, setListofsongs);
    // useEffect(()=>{
    //   setPlaylist(props.pn);
    //   console.log(props.pn,"Propspassingtohome")
    //   listsongs();
    //    setUserToken(localStorage.getItem("userIdToken"))
    //    console.log(useState,"usertoken");
    //    const getdevref = collection(db, "songslist",);
    //    getDocs(getdevref)
    //      .then((response) => {
    //        const a = response.docs.map((doc) => {
    //          return(doc.data());
                
    //        });
    //        console.log(a,"vikas")
    //        setSongData(a);
    //        console.log("Songsssss", songdata);
    //       //  console.log(m, "mmm");
    //      })
    //      .catch((error) => {
    //        console.log(error);
    //      });
    //          playlist();
    
    // },[playlistname])
    {/* <div>
  <h1>selectedplaylistSongs</h1>
{ props? playlistsongs?.map((e)=>{
console.log(e,"obj");
console.log(e.SongName,"songname");
console.log(e.SongUrl,"songurl");
return (
  <div>
  <h1>{e.SongName}</h1>
        <audio controls ref={e.song}>
          <source src={e.SongUrl} />
        </audio> 
        
  </div>
)
}):null}
    </div> */}