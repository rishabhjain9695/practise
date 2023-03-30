import UserPlaylist from "Views/UserPlaylist";
import Playlistcreated from "Views/PlaylistCreated/playlistcreated";

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
 
];
