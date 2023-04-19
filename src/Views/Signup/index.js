// // checked
// import "./App.css";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

// import { Link, useHistory } from "react-router-dom";
// import { auth } from "../../firebase";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithPhoneNumber,
//   RecaptchaVerifier,
// } from "firebase/auth";
// import { useState } from "react";
// import {

//   doc,

//   setDoc,
// } from "firebase/firestore";

// import { db } from "../../firebase";
// import {  enqueueSnackbar } from "notistack";
// function SignUp() {
//   const phoneregex = /^[0-9]{0,10}$/;
//  const emailRegex= /^[A-Za-z0-9+_.]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
//  const passwordRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/; 
//   const [flag, setFlag] = useState(false);
//   const[enterallErrMsg,setAllErrMsg]=useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phoneno, setPhoneno] = useState("");
//   const [confirmObj, setConfirmObj] = useState("");
//   const [emailErrMessage,setEmailErrmsg]=useState(false);
//   const [nameErrMessage,setNameErrMessage]=useState(false);
//   const [phonenoErrMessage,setPhoneNoErrmsg]=useState(false);
//   const [passwordErrMessage,setPasswordErrMessage]=useState(false);
//   const [otpErrMessage,setOtpErrMessage]=useState(false);
//   const [otp, setOtp] = useState("");
//   const navigate = useHistory();
//   const setUpRecapcha = (phoneno) => {
//     const recaptchaVerifier = new RecaptchaVerifier("sign-in-button", {}, auth);
//     return signInWithPhoneNumber(auth, phoneno, recaptchaVerifier);
//   };
//   const handlPhonenoValidation = (e) => {
//     let phoneNo=e.target.value;
//     console.log(phoneNo);
//     if (phoneregex.test(phoneNo)) {
//       setPhoneno(e.target.value);
//     }
//   };
//   const handleName=(e)=>{

//     let namee=e.target.value;
//     setName(e.target.value);
//     if(namee.length>10){
//    setNameErrMessage(true);
//    return true;
//     }
//     else{
//       return false;    }
//   }
//   const handleEmail=()=>{
//     if(emailRegex.test(email)){
//       setEmailErrmsg(false);
//       return false;
//     }
//     else{
//       setEmailErrmsg(true);
//       return true;
//     }
    
//   }
//   const handlePassword=()=>{
//     if(passwordRegex.test(password)){
//       setPasswordErrMessage(false);
//       return false;
//     }
//     else{
//       setPasswordErrMessage(true);
//       return true;
//     }
    
//   }
//   const sendOtp = async (e) => {
//     e.preventDefault();
//     if(email==""&& name==""&& password==""&& phoneno==""){
//     console.log("enter first");
//     setAllErrMsg(true);
//       return;
//     }
//     if(name==""&& email=="" && password==""){
//       setNameErrMessage(true);
//       setEmailErrmsg(true);
//       setPasswordErrMessage(true);
//       return ;
//     }
//     if(name=="" && password=="" && phoneno==""){
//       setNameErrMessage(true);
//       setPasswordErrMessage(true);
//       setPhoneNoErrmsg(true);
//       handleEmail();
//       return ;
//     }
//     if(name=="" && email=="" && phoneno==""){
//       setNameErrMessage(true);
//       setEmailErrmsg(true);
//       setPhoneNoErrmsg(true);
//       let passwordd =handlePassword();
//       return ;
//     }
//     if(email=="" && password=="" && phoneno==""){
//       setEmailErrmsg(true);
//       setPasswordErrMessage(true);
//       setPhoneNoErrmsg(true);
//       return ;
//     }
//     if (name=="" && phoneno==""){
//       setNameErrMessage(true);
//       setPhoneNoErrmsg(true);
//       handleEmail();
//       let password =handlePassword();
//       return ;
//     }
//     if (email=="" && phoneno==""){
//       setEmailErrmsg(true);
//       setPhoneNoErrmsg(true);
//       handlePassword();
//       return ;
//     }
//     if(email=="" && password==""){
//       setEmailErrmsg(true);
//       setPasswordErrMessage(true);
//       if(phoneno.length<10){
//         setPhoneNoErrmsg(true);
//       }
//       return ;
//     }
//     if (password==""){
//        setPasswordErrMessage(true);
//        handleEmail();
//        if(phoneno.length<10){
//         setPhoneNoErrmsg(true);
//       }
//        return;
//     }
//     if(name==""){
//       setNameErrMessage(true);
//       handleEmail();
//       if(phoneno.length<10){
//         setPhoneNoErrmsg(true);
//       }
//       handlePassword();
//       return ;
//     }
//     if(email==""){
//       setEmailErrmsg(true);
//       handlePassword();
//       return ;
//     }
//     if(phoneno==""){
//       setPhoneNoErrmsg(true);
//       handleEmail();
//       handlePassword();
//       return ;
//     }
// if(phoneno.length<10){
//   handleEmail();
//   handlePassword();
//   handleName();
//   setPhoneNoErrmsg(true);
//   return ;
// }
// let passwordd=handlePassword();
// let name=handleName();
// let emaill=handleEmail();
// if(passwordd){
//   return ;

// }
// if(name){
//   return;
// }
// if(emaill){
//   return ;
// }
//     const phonenumber = "+91" + phoneno;
//     try {
//       const response = await setUpRecapcha(phonenumber);
//       console.log(response, "response1");
//       setFlag(true);
//       setConfirmObj(response);
//     } catch (error) {
      
//       console.log(error);
//     }
//   };
//   const onSubmitOTP = async (e) => {
//     e.preventDefault();
//     const code = otp;
//     console.log(code);
//     if (otp === "") return;
//     try {
//       await confirmObj.confirm(code);
//       signup();
//     } catch (error) {
//       setOtpErrMessage(true);
//     }
//   };
//   const signup = () => {
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         console.log(userCredential.user.uid, "user");
//         console.log(userCredential, "user");
//         addData(userCredential.user.uid);
//         enqueueSnackbar("Signed Up Successfuly", {
//           variant: "success",
//           autoHideDuration: 3000,
//           anchorOrigin: {
//             vertical: "top",
//             horizontal: "left",
//           },
//         });
//         navigate.push("/login");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   function addData(UserId) {
//     const userDataRef = doc(db, "users", UserId);
//     setDoc(userDataRef, {
//       userid: UserId,
//       name,
//      email: email.trim(),
//       password,
//       phoneno,
//       playlist: [],
//       LikedSongs: [],
//     })
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//   return (
//     <div id="loginp">
//       <br />
//       <h1 className="heading">To continue,Signup to Spotify</h1>
//       {!flag ? (
//         <Form onSubmit={sendOtp} autoComplete="off" >
//                <div>
//                <label><b>Name</b></label>
//             <input
//               type="text"
//               className="inputstyle form-control"
//               placeholder="Enter Your Name"
//               value={name}
//               onChange={(e) => {
//                handleName(e);
//                setAllErrMsg(false);
//                setEmailErrmsg(false);
//                setPhoneNoErrmsg(false);
//                setPasswordErrMessage(false);
//               }}
//             />
            
//                </div>
               
//                {nameErrMessage ? <span style={{color:'red'}}> Please Enter valid  Name</span> : null}
     
//             <br/>
//             <span>
//               We'll never share your email with anyone else.
//             </span>
//                <br/>
//                <div>
//                <label><b>Email address</b></label>
//             <input
//               type="email"
//               placeholder="Enter email"
//               value={email}
//               className="inputstyle form-control"
//               onChange={(e) => {
//                 setEmail(e.target.value);
//                 setAllErrMsg(false);
//                 setNameErrMessage(false);
//                 setEmailErrmsg(false);
//                 setPhoneNoErrmsg(false);
//                 setPasswordErrMessage(false);
//               }}
//             />
//                </div>
       
//             <br/>
//             {emailErrMessage?<span style={{color:"red"}}> Enter Valid Email</span>:null}
//             <br/>
//             <span >
//               We'll never share your email with anyone else.
//             </span>
//       <br/>
//       <div>
//       <label><b>Password</b></label>
//             <input
//               type="password"
             
//               placeholder="Password"
//               value={password}
//               className="inputstyle form-control"      onChange={(e) => {
//                   setPassword(e.target.value);               
                

//                 setAllErrMsg(false);
//                 setEmailErrmsg(false)
//                 ;
//                 setPhoneNoErrmsg(false);
//                 setNameErrMessage(false);
//                 setPasswordErrMessage(false);
//               }}
          
//             />
//             <br/>
//             {passwordErrMessage ? <span style={{color:'red'}}> Please Enter Valid Password</span> : null}
//       </div>
//          <div>
//          <label><b>Phone Number</b></label>
//             <input
//               type="text"
//               placeholder="Enter your Phone Number"
//               value={phoneno}
//               className="inputstyle form-control"
//               onChange={(e) => {
//                 handlPhonenoValidation(e);
                
//                 setAllErrMsg(false);
//                 setEmailErrmsg(false);
//                 setNameErrMessage(false);
//                 setPhoneNoErrmsg(false);
//                 setPasswordErrMessage(false);
//               }}
//             />
//          </div>
       
//             <br/>
//             {phonenoErrMessage? <span style={{color:'red'}}>Please enter Valid Phone Number</span>:null}
        
//           <div id="sign-in-button"></div>
//           {/* <div style={{ color: "red" }}>{errMsgg}</div> */}
//           {enterallErrMsg?<span style={{color:'red'}}> Enter all fields</span>:null}
//           <Button variant="primary" type="submit" className="sendOtpStyling">
//             SendOtp
//           </Button>
//         </Form>
//       ) : null}
//       {flag ? (
//         <Form onSubmit={onSubmitOTP}>
       
//             <label>Otp</label>
//             <br/>
//             <input
//                 className="inputstyle form-control" 
//               type="number"
//               placeholder="Enter Otp"
//               value={otp}
//               onChange={(e) => {
//                 setOtp(e.target.value);
             

//               }}
//             />
//             <br/>
//           {otpErrMessage?<span style={{color:'red'}}>enter valid otp</span>:null}
//           <Button variant="primary" type="submit" className="sendOtpStyling">
//             Submit
//           </Button>
//         </Form>
//       ) : null}

//       <h1 className="heading">
//         Alerady SignedUp ??{" "}
//         <Link style={{ textDecoration: "none" }} to="/login">
//           Want To logIn
//         </Link>
//       </h1>
//     </div>
//   );
// }

// export default SignUp;


//     // let emailErr=handleEmail();
//     // console.log(emailErr,"qq")
//     // if(phoneno.length<10){
//     //   setPhoneNoErrmsg(true);
//     //   return;
//     // }
//     // if(emailErr){
//     //   return
//     // }
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
 const emailRegex= /[A-Za-z._ 0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
 const passwordRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const [flag, setFlag] = useState(false);
  const[enterallErrMsg,setAllErrMsg]=useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [confirmObj, setConfirmObj] = useState("");
  const [emailErrMessage,setEmailErrmsg]=useState(false);
  const [nameErrMessage,setNameErrMessage]=useState(false);
  const [phonenoErrMessage,setPhoneNoErrmsg]=useState(false);
  const [passwordErrMessage,setPasswordErrMessage]=useState(false);
  const [otpErrMessage,setOtpErrMessage]=useState(false);
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
    if(emailRegex.test(email)){
      setEmailErrmsg(false);
      return false;
    }
    else{
      setEmailErrmsg(true);
      return true;
    }
    
  }
  const handlePassword=()=>{
    if(passwordRegex.test(password)){
      setPasswordErrMessage(false);
      return false;
    }
    else{
      setPasswordErrMessage(true);
      return true;
    }
    
  }
  const sendOtp = async (e) => {
    e.preventDefault();
    if(email==""&& name==""&& password==""&& phoneno==""){
    console.log("enter first");
    setAllErrMsg(true);
      return;
    }
    if(name=="" && email=="" && password==""){
      setNameErrMessage(true);
      setEmailErrmsg(true);
      setPasswordErrMessage(true);
      return ;
    }
    if(name=="" && password=="" && phoneno==""){
      setNameErrMessage(true);
      setPasswordErrMessage(true);
      setPhoneNoErrmsg(true);
      handleEmail();
      return ;
    }
    if(name=="" && email=="" && phoneno==""){
      setNameErrMessage(true);
      setEmailErrmsg(true);
      setPhoneNoErrmsg(true);
      let passwordd =handlePassword();
      return ;
    }
    if(email=="" && password=="" && phoneno==""){
      setEmailErrmsg(true);
      setPasswordErrMessage(true);
      setPhoneNoErrmsg(true);
      return ;
    }
    if (name=="" && phoneno==""){
      setNameErrMessage(true);
      setPhoneNoErrmsg(true);
      handleEmail();
      let password =handlePassword();
      return ;
    }
    if (email=="" && phoneno==""){
      setEmailErrmsg(true);
      setPhoneNoErrmsg(true);
      handlePassword();
      return ;
    }
    if(email=="" && password==""){
      setEmailErrmsg(true);
      setPasswordErrMessage(true);
      if(phoneno.length<10){
        setPhoneNoErrmsg(true);
      }
      return ;
    }
    if (password==""){
       setPasswordErrMessage(true);
       handleEmail();
       if(phoneno.length<10){
        setPhoneNoErrmsg(true);
      }
       return;
    }
    if(name==""){
      setNameErrMessage(true);
      handleEmail();
      if(phoneno.length<10){
        setPhoneNoErrmsg(true);
      }
      let password=handlePassword();
      return ;
    }
    if(email==""){
      setEmailErrmsg(true);
      let passwordd =handlePassword();
      return ;
    }
    if(phoneno==""){
      setPhoneNoErrmsg(true);
      handleEmail();
      let passwordd= handlePassword();
      return ;
    }
if(phoneno.length<10){
  setPhoneNoErrmsg(true);
  return ;
}
let passwordd=handlePassword();
if(passwordd){
  return ;

}
let emaill=handleEmail();
if(emaill){
  return ;
}
    const phonenumber = "+91" + phoneno;
    try {
      const response = await setUpRecapcha(phonenumber);
      console.log(response, "response1");
      setFlag(true);
      setConfirmObj(response);
    } catch (error) {
      
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
      setOtpErrMessage(true);
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
               setNameErrMessage(false);
               setEmailErrmsg(false);
               setPhoneNoErrmsg(false);
               setPasswordErrMessage(false);
              }}
            />
            
               </div>
               {nameErrMessage ? <span style={{color:'red'}}> Please Enter Your Name</span> : null}
     
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
                setNameErrMessage(false);
                setEmailErrmsg(false);
                setPhoneNoErrmsg(false);
              }}
            />
               </div>
       
            <br/>
            {emailErrMessage?<span style={{color:"red"}}> Enter Valid Email</span>:null}
            <br/>
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
                setNameErrMessage(false);
                setPasswordErrMessage(false);
              }}
          
            />
            <br/>
            {passwordErrMessage ? <span style={{color:'red'}}> Please Enter Valid Password</span> : null}
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
                
                setAllErrMsg(false);
                setEmailErrmsg(false);
                setNameErrMessage(false);
                setPhoneNoErrmsg(false);
                setPasswordErrMessage(false);
              }}
            />
         </div>
       
            <br/>
            {phonenoErrMessage? <span style={{color:'red'}}>Please enter Valid Phone Number</span>:null}
        
          <div id="sign-in-button"></div>
          {/* <div style={{ color: "red" }}>{errMsgg}</div> */}
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
             

              }}
            />
            <br/>
          {otpErrMessage?<span style={{color:'red'}}>enter valid otp</span>:null}
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