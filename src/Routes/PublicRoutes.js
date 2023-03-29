
import Logout from "Views/Logout/logout";
import ForgotPasswordPage from "Views/ResetPasswordpage/index2";
import LoginPage from "Views/LoginPage";
import Home from "../Views/Playlist/Playlist";
import ForgotPassword from "Views/ForgotPassword";
import Homes from "../Views/Home";
import UserPlaylist from "Views/UserPlaylist/index";

export const PUBLIC_ROUTES = [
  {
    path: "/",
    component:Homes,
    title: "Homepage",
    exact: true,
  },
  {
    path: "/Home",
    component: Home,
    title: "Home",
  },
  {
    path: "/login",
    component: LoginPage,
    title: "LoginPage",
  },
  {
    path: "/logout",
    component: Logout,
    title: "Logout",
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
  {
    path: "/playlist",
    component: UserPlaylist,
    title: "Show Team",
  },

];
