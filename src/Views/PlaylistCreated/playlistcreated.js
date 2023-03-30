import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
const playlistcreated = () => {
    const uid=useSelector((state)=>state.loginreducer);
    console.log(uid,"uid","createdplaylist");
    useEffect(()=>{

    })
  return (
    <div>
      
    </div>
  )
}

export default playlistcreated
