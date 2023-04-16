// checked
import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import { useState } from "react";
import {

  doc,

  setDoc,
} from "firebase/firestore";

import { db } from "../../firebase";
import {  enqueueSnackbar } from "notistack";
function SignUp() {
  const phoneregex = /^[0-9]{0,10}$/;
 const nameRegex=/^[a-zA-Z ]*$/
 const emailRegex= /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const [flag, setFlag] = useState(false);
  const[enterallErrMsg,setAllErrMsg]=useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [confirmObj, setConfirmObj] = useState("");
  const [errMsgg, setErrMsg] = useState("");
  const [emailErrMessage,setEmailErrmsg]=useState(false);
  const [phonenoErrMessage,setPhoneNoErrmsg]=useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useHistory();
  const setUpRecapcha = (phoneno) => {
    const recaptchaVerifier = new RecaptchaVerifier("sign-in-button", {}, auth);
    return signInWithPhoneNumber(auth, phoneno, recaptchaVerifier);
  };
  const handlPhonenoValidation = (e) => {
    let phoneNo=e.target.value;
    if (phoneregex.test(phoneNo)) {
      console.log(phoneno.match(phoneregex), "regege");
     
      setPhoneno(e.target.value);
    }
  };
  const handleName=(e)=>{
    let name=e.target.value;
    if(nameRegex.test(name)){

      setName(e.target.value);
    }
  }
  const handleEmail=()=>{
    if(email.match(emailRegex)){
      setEmailErrmsg(false);
      return false;
    }
    else{
      setEmailErrmsg(true);
      return true;
    }
    
  }
  const sendOtp = async (e) => {
    e.preventDefault();
    if(email==""||name==""||password==""||phoneno==""){
    console.log("enter first");
    setAllErrMsg(true);
      return;
    }
    let emailErr=handleEmail();
    console.log(emailErr,"qq")
    if(phoneno.length<10){
      setPhoneNoErrmsg(true);
      return;
    }
    if(emailErr){
      return
    }
    const phonenumber = "+91" + phoneno;
    try {
      const response = await setUpRecapcha(phonenumber);
      console.log(response, "response1");
      setFlag(true);
      setConfirmObj(response);
    } catch (error) {
      setErrMsg("Invalid Phone Number");
      console.log(error);
    }
  };
  const onSubmitOTP = async (e) => {
    e.preventDefault();
    const code = otp;
    console.log(code);
    if (otp === "") return;
    try {
      await confirmObj.confirm(code);
      signup();
    } catch (error) {
      setErrMsg(error.message);
      console.log(error.message);
    }
  };
  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user.uid, "user");
        console.log(userCredential, "user");
        addData(userCredential.user.uid);
        enqueueSnackbar("Signed Up Successfuly", {
          variant: "success",
          autoHideDuration: 3000,
          anchorOrigin: {
            vertical: "top",
            horizontal: "left",
          },
        });
        navigate.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  function addData(UserId) {
    const userDataRef = doc(db, "users", UserId);
    setDoc(userDataRef, {
      userid: UserId,
      name,
      email,
      password,
      phoneno,
      playlist: [],
      LikedSongs: [],
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div id="loginp">
      <br />
      <h1 className="heading">To continue,Signup to Spotify</h1>
      {!flag ? (
        <Form onSubmit={sendOtp} autoComplete="off" >
               <div>
               <label><b>Name</b></label>
            <input
              type="text"
              className="inputstyle form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => {
               handleName(e);
               setAllErrMsg(false);
               setEmailErrmsg(false);
               setPhoneNoErrmsg(false);
              }}
            />
               </div>
     
            <br/>
            <span>
              We'll never share your email with anyone else.
            </span>
               <br/>
               <div>
               <label><b>Email address</b></label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              className="inputstyle form-control"
              onChange={(e) => {
                setEmail(e.target.value);
                setAllErrMsg(false);
                setEmailErrmsg(false);
                setPhoneNoErrmsg(false);
              }}
            />
               </div>
       
            <br/>
            {emailErrMessage?<span style={{color:"red"}}> Enter Valid Email</span>:null}
            <span >
              We'll never share your email with anyone else.
            </span>
      <br/>
      <div>
      <label><b>Password</b></label>
            <input
              type="password"
             
              placeholder="Password"
              value={password}
              className="inputstyle form-control"      onChange={(e) => {
                setPassword(e.target.value);
                setAllErrMsg(false);
                setEmailErrmsg(false);
                setPhoneNoErrmsg(false);
              }}
          
            />
            <br/>
      </div>
         <div>
         <label><b>Phone Number</b></label>
            <input
              type="text"
              placeholder="Enter your Phone Number"
              value={phoneno}
              className="inputstyle form-control"
              onChange={(e) => {
                handlPhonenoValidation(e);
                setErrMsg("");
                setAllErrMsg(false);
                setEmailErrmsg(false);
                setPhoneNoErrmsg(false);
              }}
            />
         </div>
       
            <br/>
            {phonenoErrMessage? <span style={{color:'red'}}>Please enter Valid Phone Number</span>:null}
        
          <div id="sign-in-button"></div>
          <div style={{ color: "red" }}>{errMsgg}</div>
          {enterallErrMsg?<span style={{color:'red'}}> Enter all fields</span>:null}
          <Button variant="primary" type="submit" className="sendOtpStyling">
            SendOtp
          </Button>
        </Form>
      ) : null}
      {flag ? (
        <Form onSubmit={onSubmitOTP}>
       
            <label>Otp</label>
            <br/>
            <input
                className="inputstyle form-control" 
              type="number"
              placeholder="Enter Otp"
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value);
                setErrMsg("")
              }}
            />
            <br/>
          {errMsgg?<span style={{color:'red'}}>enter valid otp</span>:null}
          <Button variant="primary" type="submit" className="sendOtpStyling">
            Submit
          </Button>
        </Form>
      ) : null}

      <h1 className="heading">
        Alerady SignedUp ??{" "}
        <Link style={{ textDecoration: "none" }} to="/login">
          Want To logIn
        </Link>
      </h1>
    </div>
  );
}

export default SignUp;