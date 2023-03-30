import React, { useEffect } from 'react'
import Home from 'Views/Playlist/Playlist'
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
const Userplaylistdisplayandcreate = () => {
  // const[userToken,setUserToken]=useState(""); 
  const uid=useSelector((state)=>state.loginreducer.loggedin);
  const params=useParams();
    useEffect(()=>{
      addplaylist(name);        
    },[])
    const addplaylist=async(name)=>{
          const docRef = doc(db, "users",uid);
          console.log(uid,"uid")
          const docSnap = await getDoc(docRef);
          console.log(name,"amaamam")
          const getsongs = docSnap.data().playlist;
          console.log(getsongs,"getttttttttttttttttttttttttttttt")
          console.log(getsongs, "AYUSHSHHSHSHHSHSHHS");
        
  }
    const {name}=params;
    console.log("savemeeeee",name);
    useEffect(()=>{
      
    },[])
  return (
    <>
    <div>
    {name}
    </div>
    <Home/>
    </>
  )
}

export default Userplaylistdisplayandcreate
