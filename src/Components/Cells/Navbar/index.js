
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
    // navigate.push("/");value={searchValue} onChange={(e)=>searching(e.target.value) }
  }
  return (
    <>
  <div className="topbar">
        <div className="prev-next-buttons">
        <input type="search" id="searching" placeholder='What you want to listen to ?  '  />
        <i className="fa-sharp fa-solid fa-magnifying-glass searchicon"></i>
        </div>

        <div className="navbar">
          <ul>
                      <li>
          {!loggedinuser?  <Link to='/signup'>Sign Up</Link>:null}
            </li>
          </ul>
         {!loggedinuser?<button type="button" className=''> <Link style={{textDecoration:'none'}} to='/login'>Log In</Link></button>:null}
          {loggedinuser? <button type="button" hidden={false} onClick={handleLogout}>Logout</button>:null}
        </div>
     
      </div>
      <br />
   
    </>
  );
}

export default Navbars;