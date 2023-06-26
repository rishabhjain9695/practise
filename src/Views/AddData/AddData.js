import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getdatas, postDatatoApi, setData, updateUserData } from "Redux/Actions/getdataActions";
import "./AddData.css";
import "../UserTable/UserTable.css"
import {useHistory} from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { nameRegex,emailRegex,passwordRegex,professionRegex,collegeRegex } from "../../constants";
function AddData() {
  const userDataWithKeysArr=useSelector(state=>state.getUserData.data);
  const {obj}=useParams();
  console.log(obj,"useparamsobj");
  const [isChecked,setIschecked]=useState(false);
  const dispatch=useDispatch();
  const [ob,setObj]=useState({
    name:"",
    email:"",
    profession:"",
    college:"",
    password:""

  })
  const [err,setErr]=useState({
    nameErr:false,
    emailErr:false,
    professionErr:false,
    collegeErr:false,
    passwordErr:false
  })


  const navigate=useHistory();
  const handleName=(e)=>{
    setErr({...err,nameErr:false})
    const name=e.target.value;
    setObj({...ob,name});
    if(name!=""){
    if (!nameRegex.test(name)) {
      setErr({...err,nameErr:true})
    }
  }
  else{
    setErr({...err,nameErr:false});
  }
  }
  
  const handleEmail=(e)=>{
    setErr({...err,emailErr:false})
    const email=e.target.value;
    setObj({...ob,email});
    if(email!=""){
    if (!emailRegex.test(email)) {
      setErr({...err,emailErr:true})
    }
  }
  else{
    setErr({...err,emailErr:false});
  }

 
  }
  const handleCollege=(e)=>{
    setErr({...err,collegeErr:false})
    const college=e.target.value;
    setObj({...ob,college});
    if(college!=""){
    if (!collegeRegex.test(college)) {
      setErr({...err,collegeErr:true})
    }
  }
  else{
    setErr({...err,collegeErr:false});
  }
  }
  const handlePassword=(e)=>{
    setErr({...err,passwordErr:false})
    const password=e.target.value;
    setObj({...ob,password});
    if(password!=""){
    if (!passwordRegex.test(password)) {
      setErr({...err,passwordErr:true})
    }
  }
  else{
    setErr({...err,passwordErr:false});
  }
  }
  const handleProfession=(e)=>{
    setErr({...err,professionErr:false})
    const profession=e.target.value;
    setObj({...ob,profession});
    if(profession!=""){
    if (!professionRegex.test(profession)) {
      setErr({...err,professionErr:true})
    }
  }
  else{
    setErr({...err,professionErr:false});
  }
  }
  const updateUserrData=(e)=>{
    e.preventDefault();
    if(ob.name==""||ob.email=="" || ob.college=="" ||ob.profession=="" || ob.password=="") return;
 if(err.nameErr || err.passwordErr || err.emailErr || err.passwordErr || err.collegeErr || err.professionErr) return;
 if(!isChecked)return;
    dispatch(updateUserData(ob));
    console.log("upppppp");
    setObj({
      name:"",
      email:"",
      profession:"",
      college:"",
      password:""
    });
    setIschecked(false);
    navigate.push('/users');

  }
  const submitform=(e)=>{
  e.preventDefault();
  console.log("submitfunction")
  if(ob.name==""||ob.email=="" || ob.college=="" ||ob.profession=="" || ob.password=="") return;
 if(err.nameErr || err.passwordErr || err.emailErr || err.passwordErr || err.collegeErr || err.professionErr) return;
 if(!isChecked){ console.log("not checked Please check it first please");
  return;
 }

  console.log(ob);
  dispatch(postDatatoApi(ob));
  setObj({
    name:"",
    email:"",
    profession:"",
    college:"",
    password:""
  })
  setIschecked(false);
  navigate.push('/users');
  }
  useEffect(()=>{
    console.log(obj,"useeffect",userDataWithKeysArr,"uuuuuuuuuuuuuuuuu");
    if(obj){
  const userObj=  userDataWithKeysArr.length>0 && userDataWithKeysArr.find((user)=>user.key==obj);
  console.log(userObj,"Chekc")
  setObj(userObj);
    }},[obj])
useEffect(()=>{
  dispatch(getdatas());
},[])
  
  return (
    <div className="mainDiv">
    
     <button  className="btn btn-primary showBtn" onClick={()=>navigate.push('/users')}>Show Data</button>
     
     <div className="heading"><h1>Enter Your details</h1></div>
    <div className="form">
<form onSubmit={!obj ? submitform : updateUserrData}>
<div className="form-group input">
    <label  >Enter your name</label>
    <input type="text" className="form-control "  id="name" aria-describedby="emailHelp" placeholder="Enter name" value={ob.name} onChange={handleName}/>
{err.nameErr ? <span style={{color:"red"}}>Enter valid Name</span> : null}
  </div>
  <div className="form-group input">
    <label >Email address</label>
    <input type="email" className="form-control "  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={ob.email} onChange={handleEmail}/>
    {err.emailErr ? <span style={{color:"red"}}>Enter valid email</span> :null}
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group input">
    <label  >Enter your College name</label>
    <input type="text" className="form-control "  id="College" aria-describedby="emailHelp" placeholder="Enter your College Name" value={ob.college} onChange={handleCollege}/>
    {err.collegeErr ? <span style={{color:"red"}}>Enter valid collegeName</span> : null}
  </div>
  <div className="form-group input">
    <label  >Enter your Profession</label>
    <input type="text" className="form-control "  id="Profession" aria-describedby="emailHelp" placeholder="Enter your Profession" value={ob.profession} onChange={handleProfession}/>
    {err.professionErr ? <span style={{color:"red"}}>Enter valid Profession</span> : null}
  </div>
  <div className="form-group input">
    <label >Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={ob.password} onChange={handlePassword}/>
    {err.passwordErr ? <span style={{color:"red"}}>First letter should be capital and password length should be 8 containg special character and digit</span> : null}
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={isChecked} onChange={(e)=>setIschecked(e.target.checked)}/>
    <label className="form-check-label">Check me out</label>
   
  </div>
  { !obj ? <button type="submit" className="btn btn-primary">Submit</button>
  :
  <button type="submit" className="btn btn-primary" >Update</button>}
</form>
    </div>
</div>
  );
}

export default AddData;
