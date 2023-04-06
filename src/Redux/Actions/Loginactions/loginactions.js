
export const Login=(loggedin)=>{
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
// export const getLoggedinuserPlaylist=(userplaylists)=>{
//     return {
//         type:"LoggedInUserPlaylist",
//         userplaylists
//     }
// }