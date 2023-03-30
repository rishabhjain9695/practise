import UserPlaylist from "Views/UserPlaylist";
import Playlistcreated from "Views/PlaylistCreated/playlistcreated";
import Playlist from "Views/Playlist/Playlist";
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
    component: Playlist,
    title: "Home",
  },
  {
    path: "/userplaylistdisplay/:name",
    component: Userplaylistdisplayandcreate,
    title: "Home",
  },
 
];
