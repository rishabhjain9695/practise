import UserPlaylist from "Views/UserPlaylist";
import Playlistcreated from "Views/PlaylistCreated/playlistcreated";
import Home from "Views/Playlist/Playlist";
import Userplaylistdisplayandcreate from "Views/UserplaylistDisplayandCreate";

export const PRIVATE_ROUTES = [

  {
    path: "/wishlist",
    component: () => "Your wishlist here",
    title: "Dashboard",
  },
  {
    path: "/createdplaylist",
    component: Playlistcreated,
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
  // {
  //   path: "/home",
  //   component: Playlist,
  //   title: "Home",
  // },
 
];
