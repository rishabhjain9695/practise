
import { Link } from 'react-router-dom';
import {useSelector } from "react-redux"
import './navbar.css'
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import  {Logoutuser, searchingSong} from "../../../Redux/Actions/Loginactions/loginactions";
import {useHistory} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
function Navbars() {
  const loggedinuser=useSelector((state)=>state.loginreducer.loggedin);
  const [value,setvalue]=useState()
  console.log(loggedinuser,"asshshsh");
  const navigate=useHistory();
  const dispatch=useDispatch();
  function handleClick(){
    navigate.push("/login");
  }
 
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
  }
  useEffect(()=>{
    dispatch(searchingSong(""));
  }
  ,[])
  
  return (
    <>
  <div className="topbar">
        <div className="prev-next-buttons">
        <input type="search" id="searching" placeholder='What you want to listen to ?  '  onChange={(e)=>dispatch(searchingSong(e.target.value))}  />
        <i className="fa-sharp fa-solid fa-magnifying-glass searchicon"></i>
        </div>

        <div className="navbar">
          <ul>
                      <li>
          {!loggedinuser?  <Link to='/signup'>Sign Up</Link>:null}
            </li>
          </ul>
         {!loggedinuser?<button type="button" className='' onClick={handleClick}> Login</button>:null}
          {loggedinuser? <button type="button" hidden={false} onClick={handleLogout}>Logout</button>:null}
        </div>
     
      </div>
      <br />
   
    </>
  );
}

export default Navbars;