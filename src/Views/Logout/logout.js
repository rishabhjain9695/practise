import React from "react";
import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { setLogin } from "Redux/Actions/loginActions";
import './App.css'
import {useHistory} from "react-router-dom";
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
// import { setlogout } from "../action/loginaction";
import  {Logoutuser} from "Redux/Actions/Loginactions/loginactions";

// setlogout
export default function Logout() {
  const navigate = useHistory();
//   const navigate = useHistory();
const dispatch=useDispatch();
  function handleLogout() {
    dispatch(Logoutuser(null));
    enqueueSnackbar("Logged Out Successfuly", {
      variant: "success",
      autoHideDuration: 3000,
      anchorOrigin: {
        vertical: "top",
        horizontal: "left",
      },
    });
    navigate.push("/");
    // localStorage.clear();
  }
  return (
    <div className="d-flex  justify-content-center w-100 ">
      <div className="  w-25 ">
        <div className="row-2">
          <div className="column  border border-dark  rounded-2  logdiv">
            <h1 id="logoutbtn">
              Sure to Logout
            </h1>
            <div className="px-4 bg-transparent">
              <div className="d-flex  justify-content-center w-100 mt-2">
                <button
                  id="btnstyle"
                  onClick={handleLogout}
                >
                  {" "}
                  logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
