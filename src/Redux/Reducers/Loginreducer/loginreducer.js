
const initialState = {
  loggedin: null,
  songs: [],
  playlists: [],
  playlistSongs: [],
  likedSongs: [],
  currentSong:null,
  isPlaying:false,
  currentPlayingSongArray:null
};
const loginreducer = (data = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log("hey");
      return { ...data, loggedin: action.loggedin };

    case "LOGOUT":
      return { ...data, loggedin: action.loggedin,songs:[], playlists: [],
        playlistSongs: [],
        likedSongs: [],
        currentSong:null,
        isPlaying:false,
        currentPlayingSongArray:null
       };
 
    case "SETSONGS":
      return { ...data, songs: action.payload };
  
    case "SETPLAYLISTS":
      return { ...data, playlists: action.payload };

    case "GETUPDATEDSONGSFROMPLAYLIST": {
      console.log(action.payload, "CHECKINGGGGG");

      return { ...data, playlistSongs: action.payload };
    }
   
    case "GETADDLIKEDSONGS": {
      return { ...data, likedSongs: action.payload };
    }
    case "GETUPDATEDPLAYLISTS": {
      return { ...data, playlists: action.payload };
    }
    
    case "SETSELECTEDPLAYLISTSONGS": {
      return { ...data, playlistSongs: action.payload };
    }
    case "SETLIKEDSONGSDURINGLOGGEDIN": {
      return { ...data, likedSongs: action.payload };
    }
    case "SETCURRENTSONG": {
      console.log("SETCURRENTSONG red",action.payload)
      return { ...data, currentSong: action.payload };
    }
    case "ISPLAYING": {
      console.log("ISPLAYING red",action.payload)
      return { ...data,   isPlaying: action.payload };
    }
    case "CURRENTPLAYINGSONGARAAY": {
      console.log("CURRENTPLAYINGSONGARAAY REDUCER ",action.payload)
      return { ...data,currentPlayingSongArray: action.payload };
    }
    default:
      return data;
    }
};

export default loginreducer;
