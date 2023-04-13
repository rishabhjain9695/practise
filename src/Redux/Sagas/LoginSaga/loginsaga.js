
import axios from "axios";
import { takeLatest, put, all } from "redux-saga/effects";
import { getUpdatedPlaylistdata, setPlaylists, setSongs, addtoLikedSongs,getUpdatedLikedSongs, getUpdatedPlaylistsArray, setSelectedPlaylistSongs, getLikedSongs, setLikedSongs,} from "Redux/Actions/Loginactions/loginactions"
import { collection,getDocs,getDoc,doc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { db } from "firebase";
import { updateDoc,arrayUnion } from "firebase/firestore";
import { setLoginData } from "Redux/Actions/Loginactions/loginactions";

    function* getAllSongs(){
console.log("saga called");
const getsongslist = collection(db, "songslist");
try{
  console.log("try block");
  const response= yield getDocs(getsongslist);
  console.log(response,"heyrespoosne");
 const songsarray = response.docs.map((doc) => {
    console.log(doc.data(),"docccc")
    return (doc.data());
  })
  console.log(songsarray,"songList Array");
  yield put(setSongs(songsarray))
}
catch(error){
  console.log(error);
}
}
function* getPlaylists({payload}){

  console.log("getP")
  let UserPlaylists=[];
console.log("saga called playlistt");
console.log(payload,)
try{
const userRef = doc(db, "users",payload);
console.log("userRef",userRef);
const userDoc = yield getDoc(userRef);
console.log(userDoc,"userdoccc");
const userdata = userDoc.data().playlist;
const playlistNamesArray=Object.keys(userdata);
console.log(playlistNamesArray,"playlnames");
yield put(setPlaylists(playlistNamesArray));
}
catch(error){

}
}
function* addSongToPlaylist({payload}){
  console.log(payload,"payloadreceived");
  yield updateDoc(doc(db, "users", payload.userToken), {
        ["playlist" + ["." + `${payload.name}`]]: arrayUnion(payload.songInfo)
      });
      const userData = doc(db, "users", payload.userToken);
        const userDoc = yield getDoc(userData);
        const getplaylistdata = userDoc.data().playlist[payload.name];
        console.log("getplaylist", getplaylistdata)
        yield put(getUpdatedPlaylistdata(getplaylistdata));

}
function* LikedSongs({payload}){
  console.log("likedpayload",payload);
  yield updateDoc(doc(db, "users",payload.userToken ),{
    ["LikedSongs"]: arrayUnion(payload.songName)
  });
  const user = doc(db, "users",payload.userToken);
                console.log(payload.userToken,"userToken")
                const useref = yield getDoc(user);
                const userlikedSongs= useref.data().LikedSongs;
                console.log(userlikedSongs,"LikedSongsget")
                yield put(getUpdatedLikedSongs(userlikedSongs));

}
function* addNewPlaylist({payload}){
  console.log("addsagasucess",payload);
  try{
    yield updateDoc(doc(db, "users",payload.userToken ), {
      ["playlist" + ["."+`${payload.playlistname}`]]: arrayUnion()
    });
    const userRef = doc(db, "users",payload.userToken);
    console.log("userRef",userRef);
    const userDoc = yield getDoc(userRef);
    let playlistArray=Object.keys(userDoc.data().playlist);
    yield put(getUpdatedPlaylistsArray(playlistArray));
  }
catch(error){

}
  

}
function* getSelectedPlaylistSongsArr({payload}){
  console.log("addsagasucess",payload);
  try{
   
    const userData = doc(db, "users", payload.userToken);
    const userDoc = yield getDoc(userData);
    const data=userDoc.data().playlist;
    console.log(data)
    const getplaylistdata = userDoc.data().playlist[payload.selectedPlaylist];
    console.log("gettttttttttttt", getplaylistdata)
    yield put(setSelectedPlaylistSongs(getplaylistdata));
  }
catch(error){

}
  

}
function* getLikedSongsLogin({payload}){
  console.log("LIKEDSONGSLOGGEDINSAGA",payload);
  try{
    const user = doc(db, "users",payload);
                console.log(payload,"userToken")
                const useref = yield getDoc(user);
                const userlikedSongs= useref.data().LikedSongs;
                console.log("aa",userlikedSongs);
                yield put (setLikedSongs(userlikedSongs));
  }
catch(error){

}
}
function* Sagaa() {
  yield all([
    takeLatest("ADDNEWPLAYLIST",addNewPlaylist),
    takeLatest("GETALLSONGS", getAllSongs),
    takeLatest("GETPLAYLISTS",getPlaylists),
    takeLatest("ADDSONGTOPLAYLIST",addSongToPlaylist),
    takeLatest("GETSELECTEDPLAYLISTSONGS",getSelectedPlaylistSongsArr),
    takeLatest("ADDLIKEDSONGS",LikedSongs),
    // takeLatest("GETLOGIN",getLoginuserdata)
    takeLatest("GETLIKEDSONGSDURINGLOGGEDIN",getLikedSongsLogin)

  ]);
}



export default Sagaa;
