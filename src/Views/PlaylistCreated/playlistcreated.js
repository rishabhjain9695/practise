import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {db} from "../../firebase"
import { getDoc,doc
 } from 'firebase/firestore'
const Playlistcreated = () => {
    const uid=useSelector((state)=>state.loginreducer.loggedin);
    console.log(uid,"uid","createdplaylist");
    useEffect(()=>{
     hello();
    },[])
    async function hello(){
      const docRef = doc(db, "users",uid);
      const docSnap = await getDoc(docRef);
      const getsongs = docSnap.data();
      console.log(getsongs,"getsongs")
    }
  return (
    <div>
      
    </div>
  )
}

export default Playlistcreated
