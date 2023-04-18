
import CreatePlaylist from "Views/PlaylistCreated/playlistcreated";
import Home from "Views/Playlist/Playlist";
import Userplaylistdisplayandcreate from "Views/UserplaylistDisplayandCreate";
import LikedSong from "Views/LikedSongs/LikedSongs";
import CreateNewPlaylist from "Views/CreateNewPlaylist";
import UserPlaylists from "Views/PlaylistCreated/playlistcreated";

export const PRIVATE_ROUTES = [

  {
    path: "/wishlist",
    component: () => "Your wishlist here",
    title: "Dashboard",
  },
  {
    path: "/userPlaylists",
    component: UserPlaylists,
    title: "playlist created",
  },
  {
    path: "/Home",
    component: Home,
    title: "Home",
  },
  {
    path: "/userplaylistdisplay/:name",
    component: Userplaylistdisplayandcreate,
    title: "Home",
  },
  {
    path: "/likedsongs",
    component: LikedSong,
    title: "LikedSongs",
  },{
    path: "/createNewPlaylist",
    component: CreateNewPlaylist,
    title: "CreateNewPlaylist",
  },
 
];
