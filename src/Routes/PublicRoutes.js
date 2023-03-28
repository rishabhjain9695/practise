
import Home from "../Views/Home";
import Logout from "Views/Logout/logout";
import ForgotPasswordPage from "Views/ResetPasswordpage/index2";
import LoginPage from "Views/LoginPage";
import Playlist from "Views/Playlist/Playlist";
import ForgotPassword from "Views/ForgotPassword";

export const PUBLIC_ROUTES = [
  {
    path: "/",
    component: Home,
    title: "Homepage",
    exact: true,
  },
  {
    path: "/playlist",
    component: Playlist,
    title: "Playlist",
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

];
