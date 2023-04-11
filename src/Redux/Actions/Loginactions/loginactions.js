
export const Login=(loggedin)=>{
    return {
        type:"LOGIN",
        loggedin
    }
}
// export const getLoginData=(loggedin)=>{
//     console.log("dynamic",loggedin)
//     return {
//         type:"GETLOGIN",
//         loggedin
//     }
// }
// export const setLoginData=(loggedin)=>{
//     return {
//         type:"SETLOGIN",
//         loggedin
//     }
// }
export const Logoutuser=(loggedin)=>{
    return {
        type:"LOGOUT",
        loggedin
    }
}
export const getSongs=(payload)=>{
    return {
        type:"GETALLSONGS",
        payload
    }
}
export const setSongs=(payload)=>{
    return {
        type:"SETSONGS",
        payload
    }
}
export const getPlaylists=(payload)=>{
    console.log("getP");
   return {
    type:"GETPLAYLISTS",
    payload
   }
}
export const setPlaylists=(payload)=>{
    return {
        type:"SETPLAYLISTS",
        payload
    }
}
export const    addToPlaylist=(payload)=>{
  
    console.log("addToPlaylist action",payload);
    return {
        type:"ADDSONGTOPLAYLIST",
        payload
    }
}
export const getUpdatedPlaylistdata=(payload)=>{
    console.log("getupadtated",payload)
    return {
        type:"GETUPDATEDSONGSFROMPLAYLIST",
        payload
    }
}
export const addtoLikedSongs=(payload)=>{
    return {
        type:"ADDLIKEDSONGS",
        payload
    }
}
export const getUpdatedLikedSongs=(payload)=>{
    console.log("add",payload)
    return {
        type:"GETADDLIKEDSONGS",
        payload
    }
}
export const addNewplaylist=(payload)=>{
    console.log("addingpla");
    return {
        type:"ADDNEWPLAYLIST",
        payload
    }
}
export const getUpdatedPlaylistsArray=(payload)=>{
    console.log("addingpla");
    return {
        type:"GETUPDATEDPLAYLISTS",
        payload
    }
}
export const getSelectedPlaylistSongs=(payload)=>{
    console.log("SELE",payload);
    return {
        type:"GETSELECTEDPLAYLISTSONGS",
        payload
    }
}
export const setSelectedPlaylistSongs=(payload)=>{
    console.log("fd");
    return {
        type:"SETSELECTEDPLAYLISTSONGS",
        payload
    }
}
export const getLikedSongs=(payload)=>{
    console.log("add",payload)
    return {
        type:"GETLIKEDSONGSDURINGLOGGEDIN",
        payload
    }
}
export const setLikedSongs=(payload)=>{
    console.log("add",payload)
    return {
        type:"SETLIKEDSONGSDURINGLOGGEDIN",
        payload
    }
}