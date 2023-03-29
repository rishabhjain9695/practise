
import React, { useEffect, useState } from 'react'
// import './navbar.css'    
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
// import "./navbar.css"
import './User.css'
const UserPlaylist = () => {
    // const a={};
    const [userplaylistname,setName]=useState("");
    // const [listofSongs, setListofsongs] = useState([]);
    // const[userToken,setUserToken]=useState("");   
    const [listofSongs, setListofsongs] = useState([]);
    const [playArray, setPlayArray] = useState([]);
    const [songsUrl, setSongsUrl] = useState([]);
    const [songdata,setSongData]=useState([]);
    const[userToken,setUserToken]=useState("");  
      // }
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
    
      },[])
 async function setSongs(id) {
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
            const filterele=songdata.find((e)=>{
              console.log(e,"eeeee");
                return e.SongUrl==id;
            })
            await updateDoc(doc(db, "users",userToken), {
              playlist: arrayUnion({
               filterele
              }),
            });
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
      }
    function listsongs() {
        const getsongs = collection(db, "songslist");
        getDocs(getsongs)
          .then((response) => {
            const a = response.docs.map((doc) => {
              return {
                data: doc.data(),
                id: doc.id
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
    const createPlaylist=(a)=>{
        console.log(a,"Aa");
        setName("");
    }
    
  return (
    <div id='flexx'>
    <input type="text" placeholder="Create Playlist" value={userplaylistname} onChange={(e)=>{setName(e.target.value)}}/>
     <button id="btnstylecreateplaylist" onClick={()=>{createPlaylist(userplaylistname)}}>Create playlist</button>
    <div>

    </div>
    {/* <button style={{ color: 'red' }} onClick={listsongs}>click to load songs</button> */}
    {listofSongs.map((e) => {
      {/* console.log(ind),"kk"); */}
      return (
        <div id="flexx">
        <div>
        <h1>{e.data.SongName}</h1>
        <audio controls>
          <source src={e.data.SongUrl} />
        </audio>
        <button id={e.data.SongUrl} onClick={(e)=>{setSongs(e.target.id)}}>
          +
        </button>
        </div>
        </div>
      )
    })}
    {/* <button onClick={d}>op</button> */}
  </div>

  )
}

export default UserPlaylist
    // <div id="flexx">
    // <input type="text" placeholder="Create Playlist" value={userplaylistname} onChange={(e)=>{setName(e.target.value)}}/>
    // <button id="btnstylecreateplaylist" onClick={()=>{createPlaylist(userplaylistname)}}>Create playlist</button>
    // <div>
      
    // </div>
    // </div>
