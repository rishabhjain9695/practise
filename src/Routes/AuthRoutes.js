
// import SignUp from "Views/SignUp";
import ForgotPassword from "../Views/ForgotPassword/index";
import LoginPage from "Views/LoginPage";
import SignUp from "../Views/Signup/index"
export const AUTH_ROUTES = [
  {
    path: "/login",
    component: LoginPage,
    title: "Login",
  },
  {
    path: "/signup",
    component:SignUp ,
    title: "Signup",
  },
  {
    path: "/forgot-password",
    component: ForgotPassword,
    title: "Forgot Password",
  },
];
