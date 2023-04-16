import React, { useEffect } from 'react'
import './loginPage.css'
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
  const emailRegex= /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const [emailErrMsg,setEmailErrMsg]=useState(false);
  const [passwordErrMsg,setPasswordErrMsg]=useState(false);
  const sigin=(e)=>{
    e.preventDefault();
    if(email==""|| password==""){
      setEmailErrMsg(true);
      setPasswordErrMsg(true);
      return ;
    }
     if(email!=="" && password == ""){
     if(!emailRegex.test(email)){
         setEmailErrMsg(true);
         setPasswordErrMsg(true);
     }

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
      <h1 id="heading"><b>To continue,login to Spotify</b></h1>
   <Form onSubmit={sigin}  autoComplete="off    ">
        <label><b>Email</b></label>
      <br/>
      <input type="email" className=" inputstyle "     placeholder=" Enter your email" value={email}  onChange={(e)=>{
        setEmail(e.target.value)
      
      setEmailErrMsg(false);
      setPasswordErrMsg(false);
      
      } }/>
      <br/>
      {emailErrMsg ? <span style={{color:'red'}}>Please enter your Email</span>: null}
      <br/>
      <label><b>Password</b></label>
      <br/>
      <input type="password" className=" inputstyle "     placeholder=" Enter your password" value={password} onChange={(e)=>{setPassword(e.target.value)
      setEmailErrMsg(false);
      setPasswordErrMsg(false);
      } }/>
      <br/>
      {passwordErrMsg ? <span style={{color:'red'}}>Please enter your Password</span>:null}
      <button  id='loginBtn' type='submit' >Login</button>

   </Form>
   
    {<span style={{color:'red'}}>{error}</span>}
    <Link  to='/forgotpassword'>Forgot Password ?</Link>
    <Link style={{textDecoration:'none'}} to='/signup'>Dont have an Acoount! Create a new Account</Link>
    </div>
  )
}

export default LoginPage;