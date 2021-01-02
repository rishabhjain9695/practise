import Login from "Views/Login";
import SignUp from "Views/SignUp";
import ForgotPassword from "Views/ForgotPassword";

export const AUTH_ROUTES = [
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/forgot-password",
    Component: ForgotPassword,
  },
];
