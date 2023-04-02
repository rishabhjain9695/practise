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

  const[pn,setPn]=useState("");
  const [playlistnames,setPlaylistName]=useState([]);
  const[showModal,setShowModal]=useState(false);
    const uid=useSelector((state)=>state.loginreducer.loggedin);
    const [listofSongs, setListofsongs] = useState([]);
const [songdata,setSongData]=useState([]);
    const[userToken,setUserToken]=useState(""); 
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
          //  console.log(m, "mmm");playlistname
         })
         .catch((error) => {
           console.log(error);
         });
  
  
    },[])
    useEffect(()=>{
     hello();
    },[])
    function submitModal(e){
      console.log(e,"name")
      setShowModal(true)
    }
    async function setSongs(id) {
      const filterele=songdata.find((e)=>{
        console.log(e,"eeeee");
               return e.SongUrl==id;
           })
           await updateDoc(doc(db, "users",userToken), {
             playlist: arrayUnion({
              filterele
             }),
           });
         }
          const addplaylist=async(pn,id)=>{
            console.log(songdata,id,"sooooooooooooooo")
            const filterele=songdata.find((e)=>{
              console.log(e,"eeeee");
                    return e.SongUrl==id;
                })
                console.log(filterele,"filterele")
            console.log(songdata,"121");
            console.log(id,"ee")
            await updateDoc(doc(db, "users", uid), {
              ["playlist" + ["."+`${pn}`]]: arrayUnion(filterele)
            });
              const docRef = doc(db, "users",uid);
              const docSnap = await getDoc(docRef);
              const getsongs = docSnap.data().playlistname;
              console.log("getsongsdata");
            
      }   
    async function hello(){
      const docRef = doc(db, "users",uid);
      const docSnap = await getDoc(docRef);
      const userdata = docSnap.data();
      const userdataplaylist=userdata.playlist;
      console.log(userdataplaylist,"userplaylist")
      const playlistnames=Object.keys(userdataplaylist);
      // console.log(keys,"keysssss");
      setPlaylistName(playlistnames);
      console.log(userdata,"getsongs")
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