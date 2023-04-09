
export const Login=(loggedin)=>{
    console.log("ayushhshshs");
    return {
        type:"LOGIN",
        loggedin
    }
}
export const setLoginData=(loggedin)=>{
    return {
        type:"LOGIN",
        loggedin
    }
}
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
export const addToPlaylist=(payload)=>{
    return {
        type:"ADDSONGTOPLAYLIST",
        payload
    }
}
export const getUpdatedPlaylistdata=(payload)=>{
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
    console.log("tameez",payload)
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