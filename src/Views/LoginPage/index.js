import React, { useEffect } from 'react'
import '../LoginPage'
import Form from 'react-bootstrap/Form';
import SpotifyLogo from '../../imagess/SpotifyLogo.png'
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../../firebase"
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import { getPlaylists, Login } from 'Redux/Actions/Loginactions/loginactions';
import { useDispatch } from "react-redux";
import { getSongs,getLikedSongs } from 'Redux/Actions/Loginactions/loginactions';
function LoginPage() {
  const navigate=useHistory();
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const [error,setError]=useState("");
  const dispatch=useDispatch();
  const sigin=(e)=>{
    e.preventDefault();
    if(email==""|| password==""){
      return ;
    }
    else{
 
    signInWithEmailAndPassword(auth,email,password).then((Usercredential)=>{
      setEmail("");
      setPassword("");
      enqueueSnackbar("Logged In Successfuly", {
        variant: "success",
        autoHideDuration: 3000,
        anchorOrigin: {
          vertical: "top",
          horizontal: "left",
        },
      });
      console.log(Usercredential,"userinfo")
      console.log(Usercredential.user.uid,"usertoken")
      dispatch(Login(Usercredential.user.uid));
      dispatch(getSongs());
      dispatch(getPlaylists(Usercredential.user.uid));
      dispatch(getLikedSongs(Usercredential.user.uid))
      navigate.push('/Home');
     
    }).catch((error)=>{
      console.log(error.message,"errrrrrrrrrr");
      setError(error.message);
    })
  }
}
  return (
    <div id='loginp'>
    
      <img src={SpotifyLogo} alt=""  />
      <br />
      <h1 id="heading">To continue,login to Spotify</h1>
      <Form onSubmit={sigin} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  value={email} onChange={(e)=>{setEmail(e.target.value)
        setError("");}} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"     value={password} onChange={(e)=>{setPassword(e.target.value)
        setError("");}}/>
      </Form.Group>

      <button  id='btnstyle' type='submit' >Login</button>
    </Form> 
   
    {<span style={{color:'red'}}>{error}</span>}
    <Link style={{textDecoration:'none'}} to='/forgotpassword'>Forgot Password</Link>
    <Link style={{textDecoration:'none'}} to='/signup'>Dont have an Acoount! Create a new Account</Link>
    </div>
  )
}

export default LoginPage;