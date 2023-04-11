
const initialState = {
  loggedin: null,
  songs: [],
  playlists: [],
  playlistSongs: [],
  likedSongs: [],
  // loggedInObj:null
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
    // case "SETLOGIN": {
    //   return {...data, loggedInObj: action.payload };
    // }
    default:
      return data;
    }
};

export default loginreducer;
