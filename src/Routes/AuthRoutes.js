
import ForgotPassword from "../Views/ForgotPassword/index";
import LoginPage from "Views/LoginPage";
import SignUp from "../Views/Signup/index"
import ForgotPasswordPage from "Views/ResetPasswordpage/index2";
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

  {
    path: "/resetpassword",
    component: ForgotPasswordPage,
    title: "Show Team",
  },
  

];
