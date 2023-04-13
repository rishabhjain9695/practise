
import { Link } from 'react-router-dom';
import {useSelector } from "react-redux"
import './navbar.css'
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import  {Logoutuser} from "../../../Redux/Actions/Loginactions/loginactions";
// import {useHistory} from "react-router-dom";
import { useDispatch } from 'react-redux';
function Navbars() {
  const loggedinuser=useSelector((state)=>state.loginreducer.loggedin);
  console.log(loggedinuser,"asshshsh");
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
    // navigate.push("/");
  }
  return (
    <>
  <div className="topbar">
        <div className="prev-next-buttons">
          <button type="button" className="fa fas fa-chevron-left"></button>
          <button type="button" className="fa fas fa-chevron-right"></button>
        </div>

        <div className="navbar">
          <ul>
          
          <li> <span>Premium</span></li>
      
            <li className="divider">|</li>
            <li>
          {!loggedinuser?  <Link to='/signup'>Sign Up</Link>:null}
            </li>
          </ul>
         {!loggedinuser?<button type="button"> <Link style={{textDecoration:'none'}} to='/login'>Log In</Link></button>:null}
          {loggedinuser? <button type="button" hidden={false} onClick={handleLogout}>Logout</button>:null}
        </div>
      </div>
      <br />
   
    </>
  );
}

export default Navbars;