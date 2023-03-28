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
  // const loggedin=useSelector((state)=>state.loginreducer.loggedInuser);
  // console.log(loggedin,"reducer");
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
          
            <li>
            <Link>Support</Link>
            </li>
            <li>
            <Link>Download</Link>
            </li>
            <li class="divider">|</li>
            <li>
            <Link to='/signup'>Sign Up</Link>
            </li>
          </ul>
         {<button type="button"> <Link style={{textDecoration:'none'}} to='/login'>Log In</Link></button>}
          <button type="button" hidden={false}> <Link style={{textDecoration:'none'}}to='/logout'>Log Out</Link></button>
        </div>
      </div>
      <br />
   
    </>
  );
}

export default Navbars;