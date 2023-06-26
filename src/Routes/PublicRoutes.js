import AddData from "Views/AddData/AddData";
import AboutUs from "Views/AboutUs";
import { Link } from "react-router-dom";
import UserDataTable from "Views/UserTable/UserDataTable";
import Error from "Error";

export const PUBLIC_ROUTES = [
  {
    path: "/",
    component: AddData,
    title: "Homepage",
    exact: true,
  },
  {
    path: "/users",
    component: UserDataTable,
    title: "usersData",
    exact:true,
  },
  {
    path: "/:obj",
    component: AddData,
    title: "AddData",
    exact: true,
  },
  {
    path:"*",
    component:Error,
    title: "About random guy",
  },
];
