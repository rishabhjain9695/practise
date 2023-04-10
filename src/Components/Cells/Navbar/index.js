
import { Link } from 'react-router-dom';
import {useSelector } from "react-redux"
import './navbar.css'
function Navbars() {
  const loggedinuser=useSelector((state)=>state.loginreducer.loggedin);
  console.log(loggedinuser,"asshshsh");
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
          {loggedinuser? <button type="button" hidden={false}> <Link style={{textDecoration:'none'}}to='/logout'>Log Out</Link></button>:null}
        </div>
      </div>
      <br />
   
    </>
  );
}

export default Navbars;