import Container from '../../../../node_modules/react-bootstrap/Container';
import Nav from '../../../../node_modules/react-bootstrap/Nav';
import Navbar from '../../../../node_modules/react-bootstrap/Navbar';
// import SpotifyLogo from '../../imagess/SpotifyLogo.png'
// import { loginreducer } from '../../../Reducers/loginreducer/loginreducer';
import { Link } from 'react-router-dom';
import {useSelector } from "react-redux"
// import Button from 'react-bootstrap/Button';
import './navbar.css'
function Navbars() {
  const loggedinuser=useSelector((state)=>state.loginreducer.loggedin);
  console.log(loggedinuser,"asshshsh");
  // const[searching,setSearching]=useState("");
  return (
    <>
  <div class="topbar">
        <div class="prev-next-buttons">
          <button type="button" class="fa fas fa-chevron-left"></button>
          <button type="button" class="fa fas fa-chevron-right"></button>
        </div>

        <div class="navbar">
          <ul>
          
          <li> <Link>Premium</Link></li>
        
    {/* <input type={'search'} placeholder=" Search Songs " style={{borderRadius:'10%'}}  /> */}
            <li class="divider">|</li>
            <li>
          {!loggedinuser?  <Link to='/signup'>Sign Up</Link>:null}
            </li>
          </ul>
         {!loggedinuser?<button type="button"> <Link style={{textDecoration:'none'}} to='/login'>Log In</Link></button>:null}
          {loggedinuser? <button type="button" hidden={false}> <Link style={{textDecoration:'none'}}to='/logout'>Log Out</Link></button>:null}
        </div>
        {/* <div id="searchdiv">    <input type="text" id="searchbutton" placeholder="Search.."/></div> */}
      </div>
      <br />
   
    </>
  );
}

export default Navbars;