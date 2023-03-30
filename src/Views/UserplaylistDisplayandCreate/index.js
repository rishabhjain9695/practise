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
// import { useParams } from 'react-router-dom';
const Userplaylistdisplayandcreate = () => {
  const params=useParams();
  // const[userToken,setUserToken]=useState(""); 
  const {name}=params;
  console.log(name,"11111111111")
  const uid=useSelector((state)=>state.loginreducer.loggedin);
  // const params=useParams();  
    useEffect(()=>{
      // addplaylist(name);        
    },[])
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
    useEffect(()=>{
      // addplaylist();
    },[])
  return (
    <>
    <div>
    {/* {name} */}
    </div>
    <Home pn={name}/>
    </>
  )
}

export default Userplaylistdisplayandcreate
