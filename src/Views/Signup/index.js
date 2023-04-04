
import './App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import SpotifyLogo from './../Components/imagess/SpotifyLogo.png'
import { Link, useHistory } from 'react-router-dom';
import {auth} from "../../firebase"
import {app} from "../../firebase"
import { getAuth,createUserWithEmailAndPassword,signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { useState } from 'react';
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  setDoc
} from "firebase/firestore";

import { db } from "../../firebase";
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
function SignUp() {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[phoneno,setPhoneno]=useState("");
  // const[userkey,setUserkey]=useState('');
  const[otp,setOtp]=useState("");
  const navigate=useHistory();
   const  configureCaptcha = () =>{
     const auth = getAuth();
     window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
      }
    }, auth);
  }
  const onSignInSubmit = (e) => {
    e.preventDefault()
    configureCaptcha()
    const phoneNumber = "+91" +phoneno;
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
        });
      }
      const  onSubmitOTP = (e) =>{
        e.preventDefault()
        const code = otp
        console.log(code)
        window.confirmationResult.confirm(code).then((result) => {
          
          const user = result.user;
          console.log(JSON.stringify(user),"usereeeeeee");
          // alert("User is verified");
           enqueueSnackbar("Signed Up Successfuly", {
      variant: "success",
      autoHideDuration: 3000,
      anchorOrigin: {
        vertical: "top",
        horizontal: "left",
      },
    });
          signup(e);
          // ...
        }).catch((error) => {
          
    });
  }
  const signup=(e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>{
      
      console.log(userCredential.user.uid,"user");
      console.log(userCredential,"user");
      adddata(userCredential.user.uid);
      navigate.push('/login');
    }).catch((error)=>{
      console.log(error);
    })
  }
  function adddata(UserId) {
    // e.preventDefault();
    const ref = doc(db, "users",UserId);
    setDoc(ref, { 
      userid:UserId,
        name,
    email,
  password,
phoneno,
playlist:[],
LikedSongs:[] })
      .then((response) => {
        console.log(response.id);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div id='loginp'>
      <br />
      <h1 className="heading">To continue,login to Spotify</h1>
      <Form onSubmit={(e)=>{onSignInSubmit(e)}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" value={name} onChange={(e)=>{setName(e.target.value)}} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Enter your Phone Number" value={phoneno} onChange={(e)=>{setPhoneno(e.target.value)}}/>
      </Form.Group>
      <Button variant="primary" type="submit" id='sign-in-button'>
        Submit
      </Button>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Otp</Form.Label>
        <Form.Control type="number" placeholder="Enter Otp" value={otp} onChange={(e)=>{setOtp(e.target.value)}}/>
      </Form.Group>
        
    </Form>
    <Button variant="primary" onClick={(e)=>{onSubmitOTP(e)}}>
        Submit
      </Button>
 
    <h1 className='heading'>Alerady SignedUp ??   <Link style={{textDecoration:'none'}} to='/login'>Want To logIn</Link></h1>
    </div>
  )
}

export default SignUp;