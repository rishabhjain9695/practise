import UserPlaylist from "Views/UserPlaylist";
import CreatePlaylist from "Views/PlaylistCreated/playlistcreated";
import Home from "Views/Playlist/Playlist";
import Userplaylistdisplayandcreate from "Views/UserplaylistDisplayandCreate";
import LikedSong from "Views/LikedSongs/LikedSongs";

export const PRIVATE_ROUTES = [

  {
    path: "/wishlist",
    component: () => "Your wishlist here",
    title: "Dashboard",
  },
  {
    path: "/createdplaylist",
    component: CreatePlaylist,
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
    path: "/playlist",
    component: UserPlaylist,
    title: "Userplaylist",
  },
 
];
