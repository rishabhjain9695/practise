import React, { useEffect } from 'react'
import '../LoginPage'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SpotifyLogo from '../../imagess/SpotifyLogo.png'
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../../firebase"
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
// import { setLogin } from '../action/loginaction';
import { Login } from 'Redux/Actions/Loginactions/loginactions';
import { useDispatch, useSelector } from "react-redux";
import { getLoggedinuserPlaylist } from 'Redux/Actions/Loginactions/loginactions';
import {
  collection,arrayUnion,
  getDocs,
  getDoc,
  addDoc,
  doc,
  updateDoc,
  setDoc
} from "firebase/firestore";
import { db } from '../../firebase';
function LoginPage() {
  // const mydata=useSelector((state)=>{state.loginreducer.playlist})
  const navigate=useHistory();
  const[isLoggedIn,setLoggedIn]=useState(false);
  const[userToken,setUserToken]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const [error,setError]=useState(false);
  const dispatch=useDispatch();
  // console.log(mydata,"mydaytaa");
  const hello=async(uid)=>{
    console.log("hello");
     const docRef = doc(db, "users",uid);
    const docSnap = await getDoc(docRef);
    const getsongs = docSnap.data();
    console.log(getsongs,"getsongsdedede");
    console.log("getsongsdedede");
    dispatch(getLoggedinuserPlaylist(getsongs.playlist));
  }
  const sigin=async(e)=>{
  
    e.preventDefault();
    if(email==""|| password==""){
      setError(true);
    }
    else{
 
    signInWithEmailAndPassword(auth,email,password).then((user)=>{
      hello(user.user.uid);
      enqueueSnackbar("Logged In Successfuly", {
        variant: "success",
        autoHideDuration: 3000,
        anchorOrigin: {
          vertical: "top",
          horizontal: "left",
        },
      });
      console.log(user,"auth");
      console.log(user.user.email,"user");
      console.log(user.user.uid,"useridcheck");
      localStorage.setItem("userIdToken",user.user.uid);
      setUserToken(user.user.uid);
      dispatch(Login(user.user.uid));
      // dispatch(getLoggedinuserPlaylist(getsongs));

      
      // localStorage.setItem("useremail",user.user.email);
      // localStorage.setItem("login","true");
      navigate.push('/home');
      // localStorage.setItem("token",user.user.accessToken);
      // localStorage.setItem("login",true);
    }).catch((error)=>{
      console.log(error);
    })
  }
}
  return (
    <div id='loginp'>
    
      <img src={SpotifyLogo} alt=""  />
      <br />
      <h1 id="heading">To continue,login to Spotify</h1>
      <Form onSubmit={(e)=>{sigin(e)}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)
        setError(false);}} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  value={password} onChange={(e)=>{setPassword(e.target.value)
        setError(false);}}/>
      </Form.Group>

      <button  id='btnstyle' type='submit' >Login</button>
    </Form> 
   
    {error?<span style={{color:'red'}}>Invalid Credentials.Enter Valid Credential</span>:<span></span>}
    <Link style={{textDecoration:'none'}} to='/forgotpassword'>Forgot Password</Link>
    <Link style={{textDecoration:'none'}} to='/signup'>Dont have an Acoount! Create a new Account</Link>
    </div>
  )
}

export default LoginPage
