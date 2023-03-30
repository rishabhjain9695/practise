import React from 'react'
const initialState={
    userplaylists:[],
    loggedin:null
}
const loginreducer=(data=initialState,action)=>{
    switch (action.type) {
        case "LOGIN":
          return { ...data, loggedin: action.loggedin };
    
          case "LOGOUT":
            return { ...data, loggedin: action.loggedin,userplaylists:[] };
            case "LoggedInUserPlaylist":
                return {...data,userplaylists:action.userplaylists}
        default:
          return data;
      }
}

export default loginreducer
