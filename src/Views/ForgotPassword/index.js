import React from 'react'

import '../Signup/App.css'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import "./App.css"
import {useHistory} from "react-router-dom";
import { send } from '../../firebase';
function ForgotPassword() {
    const navigate=useHistory();
    const sendResetPassword = (e) => {
        e.preventDefault();
        if(email==""){
            setError(true)
        }
        else{send(email);
          
            navigate.push('/ForgotPasswordPage')}
        
      };
      const [email, setEmail] = useState("");
      const[error,setError]=useState(false);
  return (
       <div id='loginp'>
    <div id="head">
    
      <br />
      <h1 id="headingforgot">Password Reset</h1>
      <p id="para">Enter your Spotify username, or the email address that you used to register. We'll send you an email with your username and a link to reset your password.

</p>
  <Form onSubmit={(e)=>{sendResetPassword(e)}}><Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)
        setError(false)}} />
       {error?<span style={{color:'red'}}>Enter the email </span>:<span></span>}
       <br />
        <button id="Send" type='submit'>Send</button>
      </Form.Group></Form>
 
<hr/>      </div>
    
    </div>
  )
}

export default ForgotPassword
