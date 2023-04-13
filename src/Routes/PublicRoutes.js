
import ForgotPasswordPage from "Views/ResetPasswordpage/index2";
import LoginPage from "Views/LoginPage";
import Playlist from "../Views/Playlist/Playlist";
import ForgotPassword from "Views/ForgotPassword";
import UserPlaylist from "Views/CreateNewPlaylist/index";
import CreatePlaylist from "Views/PlaylistCreated/playlistcreated";

export const PUBLIC_ROUTES = [
  
  
  {
    path: "/login",
    component: LoginPage,
    title: "LoginPage",
  },
 
  {
    path: "/forgotpassword",  
    component: ForgotPassword,
    title: "ForgotPassword",
  },
  {
    path: "/resetpassword",
    component: ForgotPasswordPage,
    title: "Show Team",
  },
  


];
