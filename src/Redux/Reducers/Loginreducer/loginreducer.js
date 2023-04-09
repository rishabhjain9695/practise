import React from 'react'
const initialState={
loggedin:null,
songs:[],
playlists:[],
playlistSongs:[],
likedSongs:[],
}
const loginreducer=(data=initialState,action)=>{
    switch (action.type) {
      
        case "LOGIN":
          console.log("hey");
          return { ...data, loggedin: action.loggedin };
    
          case "LOGOUT":
            return { ...data, loggedin: action.loggedin};
            case "GETALLSONGS":{
              return { ...data, songs: action.payload};
            }
                case "SETSONGS":
                  return {...data,songs:action.payload}
                  case "GETPLAYLISTS":
                    return {...data,playlists:action.payload}
                    case "SETPLAYLISTS":
                      return {...data,playlists:action.payload}
                      case "ADDSONGTOPLAYLIST":{
                        return {...data,playlistSongs:action.payload}
                      }
                      case "GETUPDATEDSONGSFROMPLAYLIST":{
                        return {...data,playlistSongs:action.payload}
                      }
                      case "ADDLIKEDSONGS" :{
                        return {...data,likedSongs:action.payload}
                      }
                      case "GETADDLIKEDSONGS" :{
                        return {...data,likedSongs:action.payload}
                      }
                      case "ADDNEWPLAYLIST" :{
                        return {...data,playlists:action.payload}
                      }
                      case "GETUPDATEDPLAYLISTS" :{
                        return {...data,playlists:action.payload}
                      }
                      case "SETSELECTEDPLAYLISTSONGS" :{
                        return {...data,playlistSongs:action.payload}
                      }
        default:
          return data;
      }
}

export default loginreducer
